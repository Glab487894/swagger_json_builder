const fsRw = require('../libraries/fs-rw');

function builder(template, buildingParams) {
    console.log(buildingParams);
    let newSwagger = template;

    return({
        message: "building is done",
        newSwagger: newSwagger
    })
}

const builderСomunicator = function (buildingParams) {
    let template = fsRw.getTemplate();
    let builderAnswer = builder(template,buildingParams);
    fsRw.writeNewSwagger(builderAnswer.newSwagger);
    return(builderAnswer.message);


}

module.exports = builderСomunicator;