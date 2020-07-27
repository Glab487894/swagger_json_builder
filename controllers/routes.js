const builder = require('../new-swagger-builder/builder');

module.exports = {
    async create(req, res, next) {
        let buildingParams = {
            method: req.body.method,
            url: req.body.url,
            parameters: req.body.parameters
        };

        const builderAnswer =  await builder(buildingParams);
        res.status(200).send(builderAnswer);
    },
}
