const express = require('express');
const path = require('path');

const user = require('./server/models/user');
const app = express();

const fetch = require('node-fetch');

const api = require('./server/api');
const db = require('./server/db');

const { body, validationResult } = require('express-validator');
const { response } = require('express');
const { findById } = require('./server/models/user');

//Configure .env
require('dotenv').config();

//Set port as process.env.PORT if it is present otherwise set it to 4000
const port = process.env.PORT || 4000;

//Initiate connection with database
db.connect({
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
}).then(() => {
    app.use('/api', api);
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'build')));
    // app.get('*', function (req, res) {
    //     res.sendFile(path.join(__dirname, 'build', 'index.html'));
    // });
    app.post(
        '/adddata',
        [
            body('githubid', 'Github id cant be empty').isLength({ min: 1 }),
            body('codeforcesid', 'Codeforces id cant be empty').isLength({ min: 1 }),
        ],
        async (req, res) => {
            try {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    console.log(req.body.codeforcesid);
                    return res.send({ errors: errors.array() });
                }
                const id = req.body.githubid;
                let githubdata = await fetch(`https://api.github.com/users/${id}`);
                githubdata = await githubdata.json();
                let cfdata = await fetch(` https://codeforces.com/api/user.info?handles=${req.body.codeforcesid}`);
                cfdata = await cfdata.json();
                console.log(githubdata);
                console.log(cfdata.result[0]);
                let data=await user.find({githubid:req.body.githubid});
                let x=data.length;
                if(data.length!=0)
                {
                    return res.status(401).send("User already exist");
                }
                let newuser = await user.create({
                    githubid: githubdata.login,
                    githubpublicrepos: githubdata.public_repos,
                    githubfollowers: githubdata.followers,
                    githubfollowing: githubdata.following,
                    codeforcesid: req.body.codeforcesid,
                    codeforcesrating: cfdata.result[0].rating,
                    codechefid: '',
                    Linkedin: '',
                });
                return res.send(newuser);
            } catch (error) {
                console.log('error occured', error);
            }
        },
    );
    app.get('/fetchdata', async (req, res) => {
        try {
            let data = await user.find();
            console.log(data);
            return res.send(data);
        } catch (error) {
            res.status(401).send('Internal server error');
        }
    });
    app.delete('/deletedata/:id', async (req, res) => {
        try {
            let data = user.findById(req.params.id);
            if (!data) {
                res.status(401).send('Bad request');
            }
            let deldata = await user.findByIdAndDelete(req.params.id);
            res.send(deldata);
        } catch (error) {
            return res.send({ errors: error });
        }
    });
    app.listen(port, () => {
        console.log(`Server listening at port: ${port}`);
    });
});
