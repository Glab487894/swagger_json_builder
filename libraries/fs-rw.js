const fs = require('fs');
const path = require('path');

//read template
exports.getTemplate = function () {
    let file = fs.readFileSync(path.join(__dirname, '../templates/swagger-mainTempl.json'), 'utf-8');
    let template = JSON.parse(file);
    return template;
}

//write new swagger
exports.writeNewSwagger = function (data) {
    //let newSwagger = JSON.stringify(data);
    fs.writeFileSync(path.join(__dirname, '../building-swagger.json'), JSON.stringify(data, null, 4))
}