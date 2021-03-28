const express = require("express");
const path = require("path");
const axios = require("axios");
const bodyParser = require("body-parser");

const {createUser, deleteUser, userExists, emailExists, lookUpRecord, updateUserRecord} = require('./public/database/query.js')

const app = express();
app.use(bodyParser.json());
app.use(express.static(__dirname+'/public'));
app.use('/home/:username',express.static(__dirname+'/public/home'))
app.use('/game/:username',express.static(__dirname+'/public/game'))

const port = 3000;

// app.get(express.static(__dirname + '/public'));

app.post("/user/create", async (req, res) => {
    const email = req.body.email
    const username = req.body.username;
    const password = req.body.password

    if(!await userExists(username)){
        createUser(email, username, password)
        res.json({username})
    } else {
        res.status(409).send({ message: 'Error: User Exists' });
    }
});

app.post("/user/login", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password

    if(await userExists(username) || await emailExists(username)){
        let user  = await lookUpRecord(username)
        if (user.password===password){
            res.json({username})
        } else {
            res.status(401).send({ message: 'Error: Incorrect Password' });
        }
    } else {
        res.status(409).send({ message: 'Error: User/Email Does Not Exist' });
    }
});

app.post("/home/user", async (req, res) => {
    let username = req.body.username

    if(await userExists(username)){
        let user  = await lookUpRecord(username)
        res.json({user})
    } else {
        res.status(409).send({ message: 'Error: User/Email Does Not Exist' });
    }
});

app.post("/game/record", async (req, res) => {
    let username = req.body.username

    if(await userExists(username)){
        let user  = await lookUpRecord(username)
        let record = user.Records[0]
        res.json({record})
    } else {
        res.status(409).send({ message: 'Error: User Does Not Exist' });
    }
});

app.post("/game/update-record", async (req, res) => {
    let username = req.body.username
    let record = req.body.record

    if(await userExists(username)){
        let currRecord  = await updateUserRecord(username, record)
        res.json({currRecord})
    } else {
        res.status(409).send({ message: 'Error: User Does Not Exist' });
    }
});

// app.get("/game", (req, res) => {
//   // res.sendFile(path.join(__dirname + '/game/games.html'));
// });

// app.get("/kitten/image", (req, res) => {
//   try {
//     generateRandomError();
//     axios
//       .get("https://api.thecatapi.com/v1/images/search?size=small")
//       .then(image => {
//         kitten.score = 0;
//         kitten.comments = [];
//         kitten.src = image.data[0].url;
//         res.json(kitten);
//       });
//   } catch (e) {
//     res.status(503).send({ message: e.message });
//   }
// });

// app.patch("/kitten/upvote", (req, res) => {
//   kitten.score += 1;
//   res.json({ score: kitten.score });
// });

// app.patch("/kitten/downvote", (req, res) => {
//   kitten.score -= 1;
//   res.json({ score: kitten.score });
// });

// app.post("/kitten/comments", (req, res) => {
//   const comment = req.body.comment;
//   kitten.comments = [...kitten.comments, comment];
//   res.json({ comments: kitten.comments });
// });

// app.delete("/kitten/comments/:id", (req, res) => {
//   const updatedComments = kitten.comments.filter((_, i) => i != req.params.id);
//   kitten.comments = updatedComments;
//   res.json({ comments: kitten.comments });
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
