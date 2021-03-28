const { User, Record  } = require('./models');
const { Op } = require("sequelize");

/******************************CREATE USER************************************/
async function createUser(email, username, password) {

    let user = await User.create({
        username: username,
        password: password,
        email: email
    })

    let record = await Record.create({
        wins: 0,
        ties: 0,
        losses: 0,
        userId: user.toJSON().id
    })

    return user.toJSON()

};


/******************************DELETE USER************************************/
async function deleteUser(username) {

    let user = await User.findOne({
        where: {username}
    })

    user.destroy();

    return true

};


/******************************USER EXISTS************************************/
async function userExists(username) {

    let user = await User.findOne({
        where: {username}
    })

    if (user){return true}
    else {return false}
};

async function emailExists(email) {

    let user = await User.findOne({
        where: {email}
    })

    if (user){return true}
    else {return false}
};



/******************************LOOKUP USER'S RECORD************************************/
async function lookUpRecord(username) {

    let user = await User.findOne({
        where: {
            [Op.or]: [
                {username},
                {email:username}
            ]
        },
        include: Record
    })

    return user.toJSON();
};


/******************************UPDATE USER'S RECORD************************************/
async function updateUserRecord(username, record) {

    let user = await User.findOne({
        where: {username}
    })

    let newRecord =  await Record.update(
        {wins: record.wins, ties: record.ties, losses:record.losses},
        {where: {userId: user.toJSON().id}}
    )

};

module.exports = {
    createUser,
    deleteUser,
    userExists,
    emailExists,
    lookUpRecord,
    updateUserRecord
}