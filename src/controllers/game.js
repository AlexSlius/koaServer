const fs = require('fs');
const path = require('path');
const { add, updateById, deleteById, getById, getAll } = require('../services/game');
const { errorThrowClient, answerSuccessfully } = require('../utils/answer');
const translate = require('../const/translate.json');
const { validateCreateGame, validateUpdateGame } = require('../validation/game');
const { saveFileOne } = require('../utils/files');
const { keyGame } = require('../utils/keys');
const { substitutePicturePath } = require('../utils/images');
const { sortingGamesAndReplacingPictures } = require('../utils/games');

class Game {
    async add(ctx) {
        const { files, body } = ctx.request;

        const { value, errorMessage } = validateCreateGame({
            data: {
                ...body,
                image: files?.image?.mimetype
            }
        });

        if (errorMessage)
            return errorThrowClient({ ctx, errorMessage });

        const nameFile = saveFileOne(files.image);

        const data = (await add({
            ...value,
            key: keyGame(value.name),
            image: nameFile
        })).toJSON();

        answerSuccessfully({
            ctx, data: {
                ...data,
                image: substitutePicturePath(data.image)
            }
        });
    }

    async edit(ctx) {
        if (!ctx.params.id)
            return errorThrowClient({ ctx, errorMessage: translate["need to transfer id"] });

        const { files, body } = ctx.request;
        const { errorMessage } = validateUpdateGame({
            data: {
                ...body,
                image: files?.image?.mimetype
            }
        });

        if (errorMessage)
            return errorThrowClient({ ctx, errorMessage });

        const objNew = {
            ...body
        }

        if (!!files?.image) {
            const nameFile = saveFileOne(files.image);
            objNew['image'] = nameFile;
        }

        let data = await updateById({
            id: ctx.params.id,
            data: objNew
        });

        answerSuccessfully({ ctx, data: !!data[0] });
    }

    async getAll(ctx) {
        const page = parseInt(ctx.query.page) || 1;
        const limit = parseInt(ctx.query.limit) || 5;
        const offset = (page - 1) * limit;

        const { count, rows } = await getAll({ offset, limit });

        answerSuccessfully({
            ctx,
            data: sortingGamesAndReplacingPictures(rows),
            bodyOthe: {
                pagination: {
                    total: count,
                    page: page,
                    limit,
                    totalPages: Math.ceil(count / limit)
                }
            }
        });
    }

    async getOne(ctx) {
        if (!ctx.params.id)
            return errorThrowClient({ ctx, errorMessage: translate["need to transfer id"] });

        const data = (await getById(ctx.params.id))?.toJSON() || null;

        answerSuccessfully({
            ctx, data: {
                ...data,
                image: substitutePicturePath(data.image)
            }
        });
    }

    async remove(ctx) {
        if (!ctx.params.id)
            return errorThrowClient({ ctx, errorMessage: translate["need to transfer id"] });

        const data = await deleteById(ctx.params.id);
        answerSuccessfully({ ctx, data: !!data });
    }
}

module.exports = new Game();