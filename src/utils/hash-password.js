import bcryptjs from "bcryptjs";

export const hasPassword = async (password) => {
    let salt = await bcryptjs.genSalt(+process.env.SALT_ROUNDS_LINGTH);
    return bcryptjs.hash(password, salt);
}

export const compareHasPassword = async ({ password, hashDb }) => {
    return bcryptjs.compare(password, hashDb);
}