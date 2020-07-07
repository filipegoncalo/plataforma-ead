const Joi = require('@hapi/joi');

const { getValidatorError } = require('../helpers/validator');

const rules = {
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().pattern(new RegExp('^[a-zA-Z-0-9]{8,30}$')).required(),
    password_confirmation: Joi.string().valid(Joi.ref('password')).required(),
};

const options = { abortEarly: false };

const authSignIn = (request, response, next) => {
    const { email, password } = request.body;

    const schema = Joi.object({
        email: rules.email,
        password: rules.password,
    });

    const { error } = schema.validate({ email, password }, options);

    if (error) {
        const messages = getValidatorError(error, 'auth.signin');
        return response.jsonBadRequest(null, null, { error: messages });
    }

    next();
};

const authSignUp = (request, response, next) => {
    const { first_name, last_name, email, password, password_confirmation } = request.body;

    const schema = Joi.object({
        first_name: rules.first_name,
        last_name: rules.last_name,
        email: rules.email,
        password: rules.password,
        password_confirmation: rules.password_confirmation,
    });


    const { error } = schema.validate({ first_name, last_name, email, password, password_confirmation }, options);

    if (error) {
        const messages = getValidatorError(error, 'auth.signup');
        return response.jsonBadRequest(null, null, { error: messages });
    }

    next();
};

module.exports = { authSignUp, authSignIn };