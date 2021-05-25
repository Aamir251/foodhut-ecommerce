import bcrypt from 'bcryptjs';

const users = [
    {
        name : "Rob",
        email : "rob@gmail.com",
        password : bcrypt.hashSync('123456', 10)
    },
    {
        name : "Aamir",
        email : "aamir@gmail.com",
        password : bcrypt.hashSync('123456', 10),
        isAdmin : true
    },
    {
        name : "David",
        email : "david@gmail.com",
        password : bcrypt.hashSync('123456', 10),
    },
]

export default users;