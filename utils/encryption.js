"use-strict";
// hash and salt:
const { scryptSync, randomBytes } = require("crypto");

// creating a secure hash with salt
// input is the word to be encryted and the salt value.
// it returns the salt and hashedword with a ':' as a string
function createHash(word, salt){
    const hashedWord = scryptSync(word, salt, 64).toString("hex");
    return `${salt}:${hashedWord}`; // regain salt-part: String.slice(0, 32);
};

// creating a random salt and return it
function createSalt(){
    return randomBytes(16).toString("hex");
}

module.exports = {
    createHash,
    createSalt
};