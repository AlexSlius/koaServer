export const errorHandling = (dataValid) => {
    const { error, value } = dataValid;

    return {
        errorMessage: error ? error.details[0].message : null,
        value
    }
}