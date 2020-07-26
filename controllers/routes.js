const fs = require('fs');
const path = require('path');

const template = {
    "swagger": "2.0",
    "info": {
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
    },
    "host": "localhost:3000",
    "basePath": "/api",
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
                },
                "lastName": {
                    "type": "string",
                    "example": "Strizhkov"
                },
                "language": {
                    "type": "string",
                    "example": "EN"
                },
                "phone": {
                    "type": "string",
                    "example": "0667777777"
                },
                "email": {
                    "type": "string",
                    "example": "test@gmail.com"
                },
                "status": {
                    "type": "string",
                    "example": "active"
                },
                "network": {
                    "type": "string",
                    "example": "telegram"
                },
                "networkId": {
                    "type": "string",
                    "example": "3644274532256358"
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

const writeJson = (template) => {
    fs.writeFileSync(path.join(__dirname, '../building-swagger.json'), JSON.stringify(template, null, 4))
}
module.exports = {
    async create(req, res, next) {

        // let data = JSON.stringify(template);

        await writeJson(template);
        res.status(200).send('Hallo World ! ! !');
    },
}