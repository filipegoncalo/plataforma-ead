const Joi = require('@hapi/joi');

const { getValidatorError } = require('../helpers/validator');

const options = { abortEarly: false };

const disciplineCreate = (request, response, next) => {
    const { name, institution, description } = request.body;

    const schema = Joi.object({
        name: Joi.string().required(),
        institution: Joi.string().required(),
        description: Joi.string()
    });

    const { error } = schema.validate({ name, institution, description }, options);

    if (error) {
        const messages = getValidatorError(error, 'user');
        return response.jsonBadRequest(null, null, { error: messages });
    }

    next();
};

const disciplineUpdate = (request, response, next) => {
    const { name, institution, description } = request.body;
    const { id } = request.params;

    const schema = Joi.object({ 
        id: Joi.number().required(),
        name: Joi.string(),
        institution: Joi.string(),
        description: Joi.string()
     });

    const { error } = schema.validate({ id, name, institution, description}, options);

    if (error) {
        const messages = getValidatorError(error, 'user');
        return response.jsonBadRequest(null, null, { error: messages });
    }

    next();
};

const disciplineDelete = (request, response, next) => {
    const { id } = request.params;

    const schema = Joi.object({ id: Joi.number().required() });


    const { error } = schema.validate({ id }, options);

    if (error) {
        const messages = getValidatorError(error, 'id é obrigatório');
        return response.jsonBadRequest(null, null, { error: messages });
    }

    next();
};

module.exports = { disciplineCreate, disciplineUpdate, disciplineDelete };