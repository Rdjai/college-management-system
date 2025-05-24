const jwt = require("jsonwebtoken")
const { verifyToken } = require("../config/jwt")
const authMiddleware = async (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(" ")[1];
    if (!token) res.status(401).json({
        message: 'Access denied. No token provided.'
    })

    try {
        const decoded = await verifyToken(token);
        req.user = decoded;
        next();

    } catch (error) {
        return res.status(403).json({ message: 'Invalid or expired token.' });

    }
}

module.exports = authMiddleware;
