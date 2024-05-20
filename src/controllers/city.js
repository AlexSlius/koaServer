const { getAll, add, deleteById } = require('../services/city');
const { answerSuccessfully, errorThrowClient } = require('../utils/answer');
const { validateCity } = require('../validation/city');
const { transliteratedText } = require('../utils/transliteration');

class City {
    async getAll(ctx) {
        const data = await getAll();
        answerSuccessfully({ ctx, data: data });
    }

    async add(ctx) {
        const { errorMessage, value } = validateCity({ data: ctx.request.body });

        if (errorMessage)
            return errorThrowClient({ ctx, errorMessage });

        const data = await add({
            ...value,
            key: transliteratedText(value.name)
        });

        answerSuccessfully({ ctx, data: data });
    }

    async remove(ctx) {
        const data = await deleteById(ctx.params.id);
        answerSuccessfully({ ctx, data: !!data });
    }
}

module.exports = new City();