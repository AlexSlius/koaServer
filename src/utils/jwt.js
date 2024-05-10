import jsonwebtoken from "jsonwebtoken";

const options = {
    expiresIn: '366d'
};

export const tokenSign = (data) => jsonwebtoken.sign(data, process.env.SECRET_KEY, options);

export const tokenVerify = (token) => {
    try {
        return jsonwebtoken.verify(token, process.env.SECRET_KEY);
    } catch (error) {
        throw new Error('Token verification failed / Invalid token');
    }
}