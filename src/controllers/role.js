const { getAll, add, deleteById } = require('../services/role');
const { answerSuccessfully, errorThrowClient } = require('../utils/answer');
const { transliteratedText } = require('../utils/transliteration');
const { validateRole } = require('../validation/role');

class Role {
    async getAll(ctx) {
        const data = await getAll();
        answerSuccessfully({ ctx, data });
    }

    async add(ctx) {
        const { errorMessage, value } = validateRole({ data: ctx.request.body });

        if (errorMessage)
            return errorThrowClient({ ctx, errorMessage });

        const data = await add({
            ...value,
            keyName: transliteratedText(value.name)
        });

        answerSuccessfully({ ctx, data: data });
    }

    async remove(ctx) {
        const data = await deleteById(ctx.params.id);
        answerSuccessfully({ ctx, data: !!data });
    }
}

module.exports = new Role();