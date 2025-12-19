const userService = require("../service/user.service");

const signup = async (req, res) => {
try {
    const user = await userService.signup(req.body);
    res.status(201).json({
    message: "Signup successful",
    user
    });
} catch (error) {
    res.status(400).json({ error: error.message });
}
};

const signin = async (req, res) => {
try {
    const { emailId, password } = req.body;
    const user = await userService.signin(emailId, password);
    res.json({
    message: "Signin successful",
    user
    });
} catch (error) {
    res.status(401).json({ error: error.message });
}
};

module.exports = {
signup,
signin
};
