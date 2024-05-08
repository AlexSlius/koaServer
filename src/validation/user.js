import { errorHandling } from "../utils/validation.js";
import { schemaCreateUser } from "./schemes/user.js";

export const validateCreateUser = ({ data }) => {
    return errorHandling(schemaCreateUser.validate(data));
}