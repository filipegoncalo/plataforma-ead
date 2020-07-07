const { verifyJwt } = require('../helpers/jwt');

const checkJwt = (request, response, next) => {
    const { url: path } = request;

    const excludedPaths = ['/auth/sign-in', '/auth/sign-up'];
    const isExcluded = !!excludedPaths.find((p) => p.startsWith(path));

    if(isExcluded) return next();

    let token = request.headers.authorization;
    token = token ? token.slice(7, token.length) : null;

    if (!token) return response.jsonUnauthorized(null, 'Invalid token');

    try {

        const decoded = verifyJwt(token);
        request.userId = decoded.id;
        next();

    } catch (error) {
        return response.jsonUnauthorized(null, 'Invalid token');
    }  
};


module.exports = checkJwt;