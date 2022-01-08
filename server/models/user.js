const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    githubid: {
        type: String,
        require: true,
    },
    githubrepos: {
        type: String,
        require: true,
    },
    githubfollowers: {
        type: Number,
        require: true,
    },
    githubfollowing: {
        type: Number,
        require: true,
    },
    codeforcesid: {
        type: String,
        require: true,
    },
    codeforcesrating: {
        type: Number,
        require: true,
    },
    codechefid: {
        type: String,
        require: true,
    },
    Linkedin: {
        type: String,
        require: true,
    },
});
module.exports = mongoose.model('user', userSchema);
