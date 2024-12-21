const router = require("express").Router();
const userModel = require ("../model/user.model");

router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            const createUser = new userModel({ name, email, password });
            await createUser.save();
            res.json({status:true, success:"User registered successfully"});
        }else{
            res.json({status:false, success:"User already exists"});
        }
    } catch (error) {
        console.log(error);
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email, password });
        if (user) {

            res.json({status:true,success: user});
        }else{
            res.json({status:false, success:"email or password is incorrect"});
        }
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;