const mongoose = require('mongoose')

// We can use Short id to get unique code
const shortId = require('shortid')

// Function To Generate Short Urls

function getrandom()
{
    var text = "";
    var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for(var i =0; i < 6; i++)
    {
        text+= characters.charAt(Math.floor(Math.random()* characters.length));
        
    }
    return text;
}

// var a = getrandom(6)

// var uniq = shortId.generate
// uniq = uniq().slice(0, 6)


const shortUrlSchema = new mongoose.Schema({
    full: {
        type: String,
        required: true
    },

    short: {
        type: String,
        required: true,
        default: getrandom
    }
})


module.exports = mongoose.model('ShortUrl', shortUrlSchema)
// shortId.generate