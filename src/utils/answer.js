const errorThrowServer = ({ ctx, error }) => {
    ctx.status = 500;
    ctx.body = {
        error: true,
        message: error.message || 'Server error'
    }
}

const errorThrowClient = ({ ctx, status = 400, errorMessage }) => {
    ctx.status = status;
    ctx.body = {
        error: true,
        message: errorMessage || 'Client Error '
    };
}

const answerSuccessfully = ({ ctx, status = 200, data = {}, bodyOthe = {} }) => {
    ctx.status = status;
    ctx.body = {
        data,
        ...bodyOthe
    };
}

module.exports = {
    errorThrowServer,
    errorThrowClient,
    answerSuccessfully
}