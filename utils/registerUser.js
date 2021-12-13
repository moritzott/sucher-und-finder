"use-strict";
const cryptoPart = require("./encryption");
const db = require("better-sqlite3")("./db/sucher-und-finder.db");

function registerNewUser(username, email, password){
    // encrypt password: 
    const encryptedPassword = cryptoPart.createHash(password, cryptoPart.createSalt());

    try {
            // connect to Database:
            // wichtig: Spaltennamen dürfen kein '-' enthalten!! 
            const statement = "INSERT INTO nutzertabelle " +
                "(nutzername, email, darfSuchen, istAdmin, passphrase)" + 
                " VALUES (?, ?, ?, ?, ?)";

            const preparedStatement = db.prepare(statement);

            const info = preparedStatement.run(username, email, "false", "false", encryptedPassword);

            console.log(info.changes); // => bei Erfolg: 1 => Anzahl der Reihen, die eingefügt wurden

    } catch(error) {
        console.log(error);
    }


};

module.exports = {
    registerNewUser
}