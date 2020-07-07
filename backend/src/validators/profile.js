const Joi = require('@hapi/joi');

const { getValidatorError } = require('../helpers/validator');

const options = { abortEarly: false };

const userUpdate = (request, response, next) => {
    const { first_name,
        last_name,
        formation,
        institution,
        genre,
        datebirth,
        document,
        photo,
        curriculum } = request.body;
        const { id } = request.params;

    const schema = Joi.object({
        id: Joi.number().required(),
        first_name: Joi.string().min(3),
        last_name: Joi.string().min(3),
        formation: Joi.string(),
        institution: Joi.string(),
        genre: Joi.string(),
        datebirth: Joi.string(),
        document: Joi.string().pattern(new RegExp('^[a-zA-Z-0-9]{9}$')),
        photo: Joi.string(),
        curriculum: Joi.string()
    });

    const { error } = schema.validate({
        id,
        first_name,
        last_name,
        formation,
        institution,
        genre,
        datebirth,
        document,
        photo,
        curriculum
    }, options);

    if (error) {
        const messages = getValidatorError(error, 'user');
        return response.jsonBadRequest(null, null, { error: messages });
    }

    next();
};

const userDelete = (request, response, next) => {
    const { id } = request.params;

    const schema = Joi.object({ id: Joi.number().required() });


    const { error } = schema.validate({ id }, options);

    if (error) {
        const messages = getValidatorError(error, 'id é obrigatório');
        return response.jsonBadRequest(null, null, { error: messages });
    }

    next();
};

module.exports = { userUpdate, userDelete };