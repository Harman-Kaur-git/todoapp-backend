require("dotenv").config();
var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var app = express();
const session = require('express-session');
const FileStore = require('session-file-store')(session);

app.use(session({
  secret: process.env.SESSION_SECRET || "dev_secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,   // IMPORTANT for localhost + HTTP
  }
}));
const cors = require("cors");

app.use(cors({
  origin: "https://todoapp-backend-production-19aa.up.railway.app",
  credentials: true
}));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var todoRouter = require("./routes/todoRouter");
var newTaskRouter = require("./routes/newTaskRouter");
var deleteTaskRouter = require("./routes/deleteTaskRouter");
var loginPageRouter = require("./routes/loginPageRouter");
var signupPageRouter = require("./routes/signupPageRouter");
var registerRouter = require("./routes/registerRouter");
var loginRouter = require("./routes/loginRouter");
var logoutRouter = require("./routes/logoutRouter");
var confirmationRouter=require("./routes/confirmationRouter")
var confirmedRouter=require("./routes/confirmedRouter")
var deleteaccountRouter=require("./routes/deleteaccountRouter")

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/todo", todoRouter);
app.use("/newtask", newTaskRouter);
app.use("/delete", deleteTaskRouter);
app.use("/loginPage", loginPageRouter);
app.use("/signupPage", signupPageRouter);
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/logout", logoutRouter);
app.use("/account/deactivate/confirmation",confirmationRouter)
app.use("/account/deactivate/confirmed",confirmedRouter)
app.use("/deactivate",deleteaccountRouter)
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
