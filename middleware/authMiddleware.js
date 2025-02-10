
const validTokens = new Set();

export const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers['x-device-token'];
        if (!token || !validTokens.has(token)) {
            return res.status(401).json({
                success:false,
                message:"User not Authencticatd.."
            })
        }
        next();
        
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Internal Server Errro"
        })
    }
};