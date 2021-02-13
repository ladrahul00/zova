export const swaggerJson={
    "swagger": "2.0",
    "info": {
        "title": "ZOVA",
        "version": "0.0.1"
    },
    "consumes": [
        "application/json"
    ],
    "produces": [
        "application/json"
    ],
    "tags": [
        {
            "name": "User",
            "description": "Everything about users"
        },
    ],
    "paths":{
        "/users":{
            "get":{
                "tags":[
                    "User"
                ],
                "operationId": "getAllUsers",
                "summary": "List all users",
                "description": "Lists all users and their accounts.\n",
                "produces": [
                    "application/json"
                ],
                "responses": {
                    "200": {
                        "description": "200 response",
                        "examples": {
                            "application/json": ""
                        }
                    }
                }
            },
            "post":{
                "tags": [
                    "User"
                ],
                "operationId": "createUser",
                "summary": "Add a new user",
                "description": "Creates a new user\n",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                    {
                        "name": "newUser",
                        "in": "body",
                        "schema": {
                            "type": "object",
                            "required": [
                                "firstName",
                                "age"
                            ],
                            "properties": {
                                "firstName": {
                                    "type": "string"
                                },
                                "lastName": {
                                    "type": "string"
                                },
                                "age": {
                                    "type": "integer"
                                }
                            }
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "200 response",
                        "examples": {
                            "application/json": ""
                        }
                    }
                }            
            }
        },
        "/users/{id}":{
            "get":{
                "tags":[
                    "User"
                ],
                "operationId": "getSingleUsers",
                "summary": "List single users",
                "description": "List single user\n",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                  {
                    "name": "id",
                    "description": "ID of user that needs to be fetched",
                    "required": true,
                    "type": "integer",
                    "in": "path"
                  }
                ],
                "responses": {
                    "200": {
                        "description": "200 response",
                        "examples": {
                            "application/json": ""
                        }
                    }
                }
            },
            "delete":{
                "tags":[
                    "User"
                ],
                "operationId": "deleteSingleUsers",
                "summary": "delete single users",
                "description": "delete single user\n",
                "produces": [
                    "application/json"
                ],
                "parameters": [
                  {
                    "name": "id",
                    "description": "ID of user that needs to be fetched",
                    "required": true,
                    "type": "integer",
                    "in": "path"
                  }
                ],
                "responses": {
                    "200": {
                        "description": "200 response",
                        "examples": {
                            "application/json": ""
                        }
                    }
                }
            }
        }
    }
};