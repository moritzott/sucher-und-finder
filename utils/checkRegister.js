const db = require("better-sqlite3")("./db/sucher-und-finder.db");
const cryptoPart = require("./encryption");

// function to check if a user is in the DB
// and if the PW is correct
function checkRegistration(enteredUsername, enteredPassword){
    // prepare statement:
    const statement = db.prepare("SELECT * FROM nutzertabelle WHERE nutzername = ?");

    try {
        // check if user is in Database:
        if (statement.get(enteredUsername) === undefined){
            return { userInDatabase: false, correctPassword: null };
        } else {
            // ok, user is in Database. so let's look if he entered the right password
            // get the row of that user:
            const userData = statement.get(enteredUsername);

            // get encrypted password from the Database:
            const encryptedPassword = userData.passphrase;

            // and get the salted passage:
            const salt = encryptedPassword.slice(0, 32);

            // encrypt entered password with the salt of the stored password:
            const encryptedEnteredPassword = cryptoPart.createHash(enteredPassword, salt);

            // then finally compare this with the stored hashed password from the database:
            if (encryptedEnteredPassword === userData.passphrase) {
                return { userInDatabase: true, correctPassword: true};
            } else {
                return { userInDatabase: true, correctPassword: false };
            }
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    checkRegistration
};