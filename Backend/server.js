require("dotenv").config();
const express = require("express");
const passport = require("passport");
const session = require("express-session");
const cors = require("cors");
const GithubStrategy = require("passport-github2").Strategy;
const axios = require("axios");

const app = express();

// Enable CORS for your React app
app.use(
  cors({
    origin: "http://localhost:5173", // Your React app URL
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Allow credentials (cookies)
  })
);

app.use(
  session({
    secret: "secret", // Change this to a more secure key in production
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using HTTPS
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/github/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/", (req, res) => {
  res.send('<a href="/auth/github">Login with Github</a>');
});

app.get(
  "/auth/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

app.get(
  "/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/" }),
  (req, res) => {
    // Send only username and avatar_url as JSON
    const userData = {
      username: req.user.username,
      avatar_url: req.user.photos[0].value, // Ensure this path is correct
    };

    // Store user data in session for later use
    req.session.userData = userData;

    // Redirect to frontend after successful login
    res.redirect("http://localhost:5173/profile"); // Redirect to your frontend profile page
  }
);

// Secure profile route
app.get("/profile", (req, res) => {
  if (!req.user) {
    return res.status(401).send("Not authenticated");
  }

  // Send user data as JSON from session
  res.json(req.session.userData); // Send only username and avatar_url
});

app.get("/logout", (req, res) => {
  req.logout(() => {
    req.session.destroy(); // Destroy session on logout
    res.redirect("/");
  });
});

// Data

app.get('/repos', async (req, res) => {
  const user = req.query.user;
  const date = new Date();
  const year = date.getFullYear();

  try {
    const response = await axios.get(`https://api.github.com/users/${user}/repos`, {
      params: {
        since: `${year}-01-01T00:00:00Z`,
        until: `${year}-12-31T23:59:59Z`,
      },
    });

    res.json({ repoCount: response.data.length });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Github API rate limit exceeded!" });
  }
});

app.get('/followers', async (req, res) => {
  const user = req.query.user;
  const date = new Date();
  const year = date.getFullYear();

  try {
    const response = await axios.get(`https://api.github.com/users/${user}/followers`);

    const followersInYear = await Promise.all(response.data.map(async (follower) => {
      const userData = await axios.get(follower.url);
      return new Date(userData.data.created_at).getFullYear() === year ? userData.data : null;
    }));

    res.json({ followerCount: followersInYear.filter(f => f !== null).length });
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "Github API rate limit exceeded!"});
  }
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
