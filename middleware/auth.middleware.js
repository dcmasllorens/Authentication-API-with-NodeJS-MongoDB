const userRouter = require("../routes/user.route");
const { verifyToken } = require("../service/auth.service");

const middleware = async (req, res, next) => {
    try {
        const token = req.headers.authorization
        const user = await verifyToken(token.replace("Bearer ", ""))
        if (!user) {
            return res.status(401).send('Invalid  token authorization');
        }
    }
    catch {
        return res.status(401).send('Invalid  token authorization');
    }

    next();
};

module.exports = middleware;