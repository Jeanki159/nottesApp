const userCrtl={}
const User=require("../models/User");

userCrtl.getUser= async (req, res) => {
    const users = await User.find();
    res.json(users)
};
userCrtl.createUser= async (req, res) => {
    const {username} = req.body;
    const newUser = new User({username});
    await newUser.save();
    res.json('User created');
};

userCrtl.deleteUser= async (req, res) => {
    await User.findByIdAndDelete(req.params.id);
    res.json( 'User delete');
};
module.exports=userCrtl;