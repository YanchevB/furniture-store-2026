import { userSchema } from "../schemas/userSchema";
import { userService } from "../services";
import { generateAuthToken } from "../utils/tokenUtils";

export async function register(req, res) {
    try {
        const userData = await userSchema.parseAsync(req.body);
        const user = await userService.register(userData);
        const token = generateAuthToken(user);

        res.json({
            _id: user.id, 
            email: user.email,
            accessToken: token
        });
    } catch (err) {
        res.status(400).json({
            err: err.message,
        });
    }
    
}

export async function login(req, res) {
    const { email, password } = req.body
    try {
        const user = await userService.login(email, password);
        const token = generateAuthToken(user);

        res.json({
            _id: user.id,
            email: user.email,
            accessToken: token
        });

    } catch(err) {
        res.status(400).json({ err: err.message });
    }


     
}

export async function logout(req, res) {
    res.json({ message: "Logged out successfully"});
}