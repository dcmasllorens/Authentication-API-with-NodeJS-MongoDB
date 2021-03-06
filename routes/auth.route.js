const express = require("express");
const { login } = require("../service/auth.service")

const authRouter = express.Router();

authRouter.post('/', async (req, res) => {

    const username = req.sanitize(req.body.username)
    const password = req.sanitize(req.body.password)

    const token = await login(username, password)

    if (token) {
        return res.send({ token })
    }
    return res.status(400).send('Invalid username or password')

})

module.exports = authRouter
