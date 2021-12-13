"use-strict";

const path = require("path");
const express = require("express");
const PORT = process.env.PORT || 5000;
const http = require("http");
const cryptoPart = require("./utils/encryption");
// const db = reqire("better-sqlite3")("./db/sucher-und-finder.db"); */
const registerCheck = require("./utils/checkRegister");
const registerUser = require("./utils/registerUser");



// Initialisiere App:
const app = express();



// Basic logging as middleware:
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});


// set EJS as Template Engine:
app.set("view-engine", "ejs");


// HTML files are rendered via EJS in the Views-folder
// To access static css and JS folders and files in the views folder
// use express static middleware
// whenever the route /views is called (e.g. from HTMl files to load CSS and JS):
//  it will go to the following directory
app.use("/views", express.static(path.join(__dirname, "views")));

// to get user input via POST from the body: (nochmals Einstellungen überprüfen!!)
app.use(express.urlencoded({
    extended: true
}));

// Set up the Routes
app.get("/", (req, res) => {
    res.render("index.ejs");
});


app.get("/login-or-reg", (req, res) => {
    res.render("login-or-reg.ejs");
})


app.get("/login", (req, res) => {
    res.render("login.ejs");
});

app.get("/register", (req, res) => {
    res.render("register.ejs");
})

app.post("/register", (req, res) => {
    // nutzerdaten in datenbank schreiben...
    const username = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    registerUser.registerNewUser(username, email, password);

    // fehlt noch die response...
    // TODO: mit Erfolgsnachricht!!
    res.redirect("/");

});

app.get("/logout", (req, res) => {
    res.redirect("/");
});


app.get("/help", function(req, res) {
    res.render("help.ejs");
});

// Admin-Part:

app.get("/admin", function (req, res) {
    res.render("admin.ejs", { message: "" });
});

/* app.get("/admin/home", (req, res) => {
    // TODO: if no session with authorization: redirect to /admin
    res.render("admin-home.ejs");
}); */


// sollte eigentlich: app.post("/admin") sein, dass bei Erfolg zu admin/home redirected...!!!

app.post("/admin/home", (req, res) => {
    // check if user is admin and authorized; if not: redirect to '/admin' (with flash message)
    // TODO: if user in DB and PW correct: create Session and admin-rights!!!
    
    // get user inputs
    const enteredUsername = req.body.name;
    const enteredPassword = req.body.password;

    console.log(`${enteredUsername}, ${enteredPassword}`);

    // check if user exists in Database and if password is correct
    // => returns an Object { userInDatabase: true|false, correctPassword: true|false|null }
    const getRegisteredInfo = registerCheck.checkRegistration(enteredUsername, enteredPassword);

    // if user is not in Database:
    if (getRegisteredInfo.userInDatabase === false){
        res.render("admin.ejs", { message: "User is not in Database!" });
    } else if (getRegisteredInfo.userInDatabase === true && getRegisteredInfo.correctPassword == true) {
        res.render("admin-home.ejs", { name: enteredUsername});
    } else {
        res.render("admin.ejs", { message: "Password not correct" });
    }


    // res.render("admin-home.ejs", { name: enteredUsername});
});


// Initialisiere Server:
const server = http.createServer(app);

// Server höre auf Port:
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});