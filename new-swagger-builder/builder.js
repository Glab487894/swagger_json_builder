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
    // let template = fsRw.getTemplate();
    // let builderAnswer = builder(template,buildingParams);

    console.log(456, buildingParams);

    const newSwagger = {
        // "swagger": "2.0",
        // "info": {
        //     "description": "routes of SJB",
        //     "version": "1.0.0",
        //     "title": "swagger json builder",
        //     "termsOfService": "http://swagger.io/terms/",
        //     "contact": {
        //         "email": "artemstrigkov@gmail.com"
        //     },
        //     "license": {
        //         "url": "http://localhost"
        //     }
        // },
        // "host": "localhost:3000",
        // "basePath": "/api",
        "tags": [

        ],
        "schemes": [
            "http"
        ],
        "paths": {
            "/main/route": {
                "post": {
                    "tags": [
                        "CRUD USER"
                    ],
                    "summary": "Create user",
                    "description": "Create user",
                    "operationId": "createUser",
                    "consumes": [
                        "application/json"
                    ],
                    "produces": [
                        "application/json",
                        "application/xml"
                    ],
                    "parameters": [
                        {
                            "in": "body",
                            "name": "body",
                            "description": "Created user object",
                            "required": true,
                            "schema": {
                                "$ref": "#/definitions/mainRoute"
                            }
                        }
                    ],
                    "responses": {
                        "default": {
                            "description": "successful operation"
                        }
                    }
                }
            }
        },
        "securityDefinitions": {
            "api_key": {
                "type": "apiKey",
                "name": "api_key",
                "in": "header"
            },
            "petstore_auth": {
                "type": "oauth2",
                "authorizationUrl": "https://petstore.swagger.io/oauth/authorize",
                "flow": "implicit",
                "scopes": {
                    "read:pets": "read your pets",
                    "write:pets": "modify pets in your account"
                }
            }
        },
        "definitions": {
            "mainRoute": {
                "type": "object",
                "properties": {
                    "firstName": {
                        "type": "string",
                        "example": "Artem"
                    }
                },
                "xml": {
                    "name": "mainRoute"
                }
            }
        },
        "externalDocs": {
            "description": "Find out more about Swagger",
            "url": "http://swagger.io"
        }
    }

    const info = {
        "description": "routes of SJB",
            "version": "1.0.0",
            "title": "swagger json builder",
            "termsOfService": "http://swagger.io/terms/",
            "contact": {
            "email": "artemstrigkov@gmail.com"
        },
        "license": {
            "url": "http://localhost"
        }
    };

    const detailSwagger = {};
    detailSwagger["swagger"] = "2.0";
    detailSwagger["info"] = info;
    detailSwagger["host"] = buildingParams.url || "localhost:3000";
    detailSwagger["basePath"] = "/api";

    console.log(777, detailSwagger);




    // fsRw.writeNewSwagger(builderAnswer.newSwagger);
    fsRw.writeNewSwagger(newSwagger);
    return("SUCCESS");

}

module.exports = builderСomunicator;
