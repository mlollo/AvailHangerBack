define({ "api": [
  {
    "type": "get",
    "url": "/api/getToken/",
    "title": "Basic Auth",
    "version": "1.0.0",
    "group": "1_Authentication",
    "description": "<p>To be able to interact with the API, you need to generate a Bearer Token using the <code>/api/getToken/</code> url</p> <p>Set your HTTP header like so with basic64 encoding : <code>Authorization clientID:clientSecret</code></p>",
    "header": {
      "fields": {
        "Header": [
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ClientID",
            "description": "<p>Generated application's API credentials</p>"
          },
          {
            "group": "Header",
            "type": "String",
            "optional": false,
            "field": "ClientSecret",
            "description": "<p>Generated application's API credentials</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Bearer Token, required for further API calls</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "optional": false,
            "field": "BadAuthorizationHeader",
            "description": "<p>There is an invalid or no authorization header</p>"
          }
        ],
        "Error 401": [
          {
            "group": "Error 401",
            "optional": false,
            "field": "AuthenticationFailed",
            "description": "<p>Couldn't match clientID/clientSecret with database</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "1_Authentication",
    "name": "GetApiGettoken"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/website/main.js",
    "group": "C__Users_mlollo_Documents_git_newmips_dev_workspace_4_api_doc_website_main_js",
    "groupTitle": "C__Users_mlollo_Documents_git_newmips_dev_workspace_4_api_doc_website_main_js",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/api/group/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>group</code> with <code>id</code></p>",
    "group": "Group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of group to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "DeleteApiGroupIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/group/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>group</code> with <code>id</code></p>",
    "group": "Group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of group to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Object of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.version",
            "description": "<p><code>version</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "GetApiGroupIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/group?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>group</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "Group",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "groups",
            "description": "<p>List of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "groups.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "groups.version",
            "description": "<p><code>version</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "groups.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for group</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "GetApiGroupTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/group/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>group</code> using values defined in request's <code>body</code></p>",
    "group": "Group",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Created group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create group</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "PostApiGroupTokenToken"
  },
  {
    "type": "put",
    "url": "/api/group/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>group</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "Group",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the group to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p>New value of <code>f_label</code> for group</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "group",
            "description": "<p>Updated group</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "group.id",
            "description": "<p><code>id</code> of group</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "group.f_label",
            "description": "<p><code>f_label</code> of group</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No group with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update group</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Group",
    "name": "PutApiGroupIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/hanger/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>hanger</code> with <code>id</code></p>",
    "group": "Hanger",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of hanger to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No hanger with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Hanger",
    "name": "DeleteApiHangerIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/hanger/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>hanger</code> with <code>id</code></p>",
    "group": "Hanger",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of hanger to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hanger",
            "description": "<p>Object of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.id",
            "description": "<p><code>id</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.version",
            "description": "<p><code>version</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.f_barcode",
            "description": "<p><code>f_barcode</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.f_occ",
            "description": "<p><code>f_occ</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.f_railid",
            "description": "<p><code>f_railid</code> of hanger</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No hanger with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Hanger",
    "name": "GetApiHangerIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/hanger?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>hanger</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "Hanger",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "hangers",
            "description": "<p>List of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hangers.id",
            "description": "<p><code>id</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hangers.version",
            "description": "<p><code>version</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hangers.f_barcode",
            "description": "<p><code>f_barcode</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hangers.f_occ",
            "description": "<p><code>f_occ</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hangers.f_railid",
            "description": "<p><code>f_railid</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for hanger</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Hanger",
    "name": "GetApiHangerTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/hanger/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>hanger</code> using values defined in request's <code>body</code></p>",
    "group": "Hanger",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_barcode",
            "description": "<p><code>f_barcode</code> of hanger</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_occ",
            "description": "<p><code>f_occ</code> of hanger</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_railid",
            "description": "<p><code>f_railid</code> of hanger</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hanger",
            "description": "<p>Created hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.id",
            "description": "<p><code>id</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.f_barcode",
            "description": "<p><code>f_barcode</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.f_occ",
            "description": "<p><code>f_occ</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.f_railid",
            "description": "<p><code>f_railid</code> of hanger</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create hanger</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Hanger",
    "name": "PostApiHangerTokenToken"
  },
  {
    "type": "put",
    "url": "/api/hanger/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>hanger</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "Hanger",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the hanger to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_barcode",
            "description": "<p>New value of <code>f_barcode</code> for hanger</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_occ",
            "description": "<p>New value of <code>f_occ</code> for hanger</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_railid",
            "description": "<p>New value of <code>f_railid</code> for hanger</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "hanger",
            "description": "<p>Updated hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.id",
            "description": "<p><code>id</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.f_barcode",
            "description": "<p><code>f_barcode</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.f_occ",
            "description": "<p><code>f_occ</code> of hanger</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "hanger.f_railid",
            "description": "<p><code>f_railid</code> of hanger</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No hanger with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update hanger</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Hanger",
    "name": "PutApiHangerIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/product/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>product</code> with <code>id</code></p>",
    "group": "Product",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of product to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No product with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Product",
    "name": "DeleteApiProductIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/product/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>product</code> with <code>id</code></p>",
    "group": "Product",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of product to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "product",
            "description": "<p>Object of product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product.id",
            "description": "<p><code>id</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product.version",
            "description": "<p><code>version</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.f_style",
            "description": "<p><code>f_style</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product.f_barcode",
            "description": "<p><code>f_barcode</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.f_sexe",
            "description": "<p><code>f_sexe</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.f_size",
            "description": "<p><code>f_size</code> of product</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No product with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Product",
    "name": "GetApiProductIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/product?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>product</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "Product",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "products",
            "description": "<p>List of product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "products.id",
            "description": "<p><code>id</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "products.version",
            "description": "<p><code>version</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.f_style",
            "description": "<p><code>f_style</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "products.f_barcode",
            "description": "<p><code>f_barcode</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.f_sexe",
            "description": "<p><code>f_sexe</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "products.f_size",
            "description": "<p><code>f_size</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for product</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Product",
    "name": "GetApiProductTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/product/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>product</code> using values defined in request's <code>body</code></p>",
    "group": "Product",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_style",
            "description": "<p><code>f_style</code> of product</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_barcode",
            "description": "<p><code>f_barcode</code> of product</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_sexe",
            "description": "<p><code>f_sexe</code> of product</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_size",
            "description": "<p><code>f_size</code> of product</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "product",
            "description": "<p>Created product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product.id",
            "description": "<p><code>id</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.f_style",
            "description": "<p><code>f_style</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product.f_barcode",
            "description": "<p><code>f_barcode</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.f_sexe",
            "description": "<p><code>f_sexe</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.f_size",
            "description": "<p><code>f_size</code> of product</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create product</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Product",
    "name": "PostApiProductTokenToken"
  },
  {
    "type": "put",
    "url": "/api/product/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>product</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "Product",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the product to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_style",
            "description": "<p>New value of <code>f_style</code> for product</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_barcode",
            "description": "<p>New value of <code>f_barcode</code> for product</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_sexe",
            "description": "<p>New value of <code>f_sexe</code> for product</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_size",
            "description": "<p>New value of <code>f_size</code> for product</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "product",
            "description": "<p>Updated product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product.id",
            "description": "<p><code>id</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.f_style",
            "description": "<p><code>f_style</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product.f_barcode",
            "description": "<p><code>f_barcode</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.f_sexe",
            "description": "<p><code>f_sexe</code> of product</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "product.f_size",
            "description": "<p><code>f_size</code> of product</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No product with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update product</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Product",
    "name": "PutApiProductIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/rail/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>rail</code> with <code>id</code></p>",
    "group": "Rail",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of rail to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No rail with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Rail",
    "name": "DeleteApiRailIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/rail/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>rail</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "Rail",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the rail to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "hanger"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No rail with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Rail",
    "name": "GetApiRailIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/rail/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>rail</code> with <code>id</code></p>",
    "group": "Rail",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of rail to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "rail",
            "description": "<p>Object of rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "rail.id",
            "description": "<p><code>id</code> of rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "rail.version",
            "description": "<p><code>version</code> of rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "rail.f_state",
            "description": "<p><code>f_state</code> of rail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No rail with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Rail",
    "name": "GetApiRailIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/rail?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>rail</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "Rail",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "rails",
            "description": "<p>List of rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "rails.id",
            "description": "<p><code>id</code> of rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "rails.version",
            "description": "<p><code>version</code> of rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "rails.f_state",
            "description": "<p><code>f_state</code> of rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for rail</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Rail",
    "name": "GetApiRailTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/rail/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>rail</code> using values defined in request's <code>body</code></p>",
    "group": "Rail",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_state",
            "description": "<p><code>f_state</code> of rail</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_id_rail",
            "description": "<p><code>id</code> of entity hanger to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "rail",
            "description": "<p>Created rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "rail.id",
            "description": "<p><code>id</code> of rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "rail.f_state",
            "description": "<p><code>f_state</code> of rail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create rail</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Rail",
    "name": "PostApiRailTokenToken"
  },
  {
    "type": "put",
    "url": "/api/rail/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>rail</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "Rail",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the rail to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Boolean",
            "optional": true,
            "field": "f_state",
            "description": "<p>New value of <code>f_state</code> for rail</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_id_rail",
            "description": "<p><code>id</code> of entity hanger to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "rail",
            "description": "<p>Updated rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "rail.id",
            "description": "<p><code>id</code> of rail</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "rail.f_state",
            "description": "<p><code>f_state</code> of rail</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No rail with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update rail</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Rail",
    "name": "PutApiRailIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/role/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>role</code> with <code>id</code></p>",
    "group": "Role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of role to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "DeleteApiRoleIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/role/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>role</code> with <code>id</code></p>",
    "group": "Role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of role to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>Object of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.version",
            "description": "<p><code>version</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "GetApiRoleIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/role?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>role</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "Role",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "roles",
            "description": "<p>List of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roles.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "roles.version",
            "description": "<p><code>version</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "roles.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for role</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "GetApiRoleTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/role/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>role</code> using values defined in request's <code>body</code></p>",
    "group": "Role",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>Created role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create role</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "PostApiRoleTokenToken"
  },
  {
    "type": "put",
    "url": "/api/role/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>role</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "Role",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the role to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_label",
            "description": "<p>New value of <code>f_label</code> for role</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "role",
            "description": "<p>Updated role</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "role.id",
            "description": "<p><code>id</code> of role</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "role.f_label",
            "description": "<p><code>f_label</code> of role</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No role with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update role</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Role",
    "name": "PutApiRoleIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/stock/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>stock</code> with <code>id</code></p>",
    "group": "Stock",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of stock to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No stock with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Stock",
    "name": "DeleteApiStockIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/stock/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>stock</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "Stock",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the stock to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "rail"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No stock with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Stock",
    "name": "GetApiStockIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/stock/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>stock</code> with <code>id</code></p>",
    "group": "Stock",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of stock to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stock",
            "description": "<p>Object of stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stock.id",
            "description": "<p><code>id</code> of stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stock.version",
            "description": "<p><code>version</code> of stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stock.f_nbhangmisplaced",
            "description": "<p><code>f_nbhangmisplaced</code> of stock</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No stock with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Stock",
    "name": "GetApiStockIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/stock?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>stock</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "Stock",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "stocks",
            "description": "<p>List of stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stocks.id",
            "description": "<p><code>id</code> of stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stocks.version",
            "description": "<p><code>version</code> of stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stocks.f_nbhangmisplaced",
            "description": "<p><code>f_nbhangmisplaced</code> of stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for stock</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Stock",
    "name": "GetApiStockTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/stock/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>stock</code> using values defined in request's <code>body</code></p>",
    "group": "Stock",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_nbhangmisplaced",
            "description": "<p><code>f_nbhangmisplaced</code> of stock</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_id_stock",
            "description": "<p><code>id</code> of entity rail to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stock",
            "description": "<p>Created stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stock.id",
            "description": "<p><code>id</code> of stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stock.f_nbhangmisplaced",
            "description": "<p><code>f_nbhangmisplaced</code> of stock</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create stock</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Stock",
    "name": "PostApiStockTokenToken"
  },
  {
    "type": "put",
    "url": "/api/stock/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>stock</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "Stock",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the stock to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_nbhangmisplaced",
            "description": "<p>New value of <code>f_nbhangmisplaced</code> for stock</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_id_stock",
            "description": "<p><code>id</code> of entity rail to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "stock",
            "description": "<p>Updated stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stock.id",
            "description": "<p><code>id</code> of stock</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "stock.f_nbhangmisplaced",
            "description": "<p><code>f_nbhangmisplaced</code> of stock</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No stock with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update stock</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "Stock",
    "name": "PutApiStockIdTokenToken"
  },
  {
    "type": "delete",
    "url": "/api/user/:id?token=TOKEN",
    "title": "5 - Delete",
    "version": "1.0.0",
    "description": "<p>Permanently delete a record of <code>user</code> with <code>id</code></p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of user to delete</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "DeleteApiUserIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/user/:id/:association?token=TOKEN&limit=10&offset=0",
    "title": "2.a - Find association",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>user</code>'s <code>association</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the user to which <code>association</code> is related</p>"
          },
          {
            "group": "Params parameters",
            "type": "String",
            "allowedValues": [
              "role",
              "group"
            ],
            "optional": false,
            "field": "association",
            "description": "<p>Name of the related entity</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "Object",
            "description": "<p>Object of <code>association</code></p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          },
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "AssociationNotFound",
            "description": "<p>No association with <code>association</code></p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "GetApiUserIdAssociationTokenTokenLimit10Offset0"
  },
  {
    "type": "get",
    "url": "/api/user/:id?token=TOKEN",
    "title": "2 - Find one",
    "version": "1.0.0",
    "description": "<p>Fetch one record of <code>user</code> with <code>id</code></p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>The <code>id</code> of user to fetch</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Object of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.version",
            "description": "<p><code>version</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_password",
            "description": "<p><code>f_password</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_token_password_reset",
            "description": "<p><code>f_token_password_reset</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.f_enabled",
            "description": "<p><code>f_enabled</code> of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "GetApiUserIdTokenToken"
  },
  {
    "type": "get",
    "url": "/api/user?token=TOKEN&limit=10&offset=0",
    "title": "1 - Find all",
    "version": "1.0.0",
    "description": "<p>Fetch records of <code>user</code> from <code>offset</code> until <code>limit</code></p>",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "users",
            "description": "<p>List of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.version",
            "description": "<p><code>version</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_password",
            "description": "<p><code>f_password</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "users.f_token_password_reset",
            "description": "<p><code>f_token_password_reset</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "users.f_enabled",
            "description": "<p><code>f_enabled</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Limit used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset used to fetch data</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "totalCount",
            "description": "<p>The total count of records for user</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "GetApiUserTokenTokenLimit10Offset0",
    "parameter": {
      "fields": {
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "limit",
            "defaultValue": "50",
            "description": "<p>The number of rows to be fetched</p>"
          },
          {
            "group": "Query parameters",
            "type": "Integer",
            "optional": true,
            "field": "offset",
            "defaultValue": "0",
            "description": "<p>The offset by which rows will be fetched</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/api/user/?token=TOKEN",
    "title": "3 - Create",
    "version": "1.0.0",
    "description": "<p>Create a record of <code>user</code> using values defined in request's <code>body</code></p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_email",
            "description": "<p><code>f_email</code> of user</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_id_role_role",
            "description": "<p><code>id</code> of entity role to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_id_group_group",
            "description": "<p><code>id</code> of entity group to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Created user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to create user</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "PostApiUserTokenToken"
  },
  {
    "type": "put",
    "url": "/api/user/:id?token=TOKEN",
    "title": "4 - Update",
    "version": "1.0.0",
    "description": "<p>Update record of <code>user</code> with <code>id</code> using values defined in request's <code>body</code></p>",
    "group": "User",
    "parameter": {
      "fields": {
        "Params parameters": [
          {
            "group": "Params parameters",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p><code>id</code> of the user to update</p>"
          }
        ],
        "Body parameters": [
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_login",
            "description": "<p>New value of <code>f_login</code> for user</p>"
          },
          {
            "group": "Body parameters",
            "type": "String",
            "optional": true,
            "field": "f_email",
            "description": "<p>New value of <code>f_email</code> for user</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_id_role_role",
            "description": "<p><code>id</code> of entity role to associate</p>"
          },
          {
            "group": "Body parameters",
            "type": "Integer",
            "optional": true,
            "field": "f_id_group_group",
            "description": "<p><code>id</code> of entity group to associate</p>"
          }
        ],
        "Query parameters": [
          {
            "group": "Query parameters",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>API Bearer Token, required for authentication</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Updated user</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user.id",
            "description": "<p><code>id</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_login",
            "description": "<p><code>f_login</code> of user</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "user.f_email",
            "description": "<p><code>f_email</code> of user</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 404": [
          {
            "group": "Error 404",
            "type": "Object",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No user with ID <code>id</code> found</p>"
          }
        ],
        "Error 500": [
          {
            "group": "Error 500",
            "type": "Object",
            "optional": false,
            "field": "ServerError",
            "description": "<p>An error occured when trying to update user</p>"
          }
        ]
      }
    },
    "filename": "C:/Users/mlollo/Documents/git/newmips-dev/workspace/4/api/doc/doc_descriptor.js",
    "groupTitle": "User",
    "name": "PutApiUserIdTokenToken"
  }
] });
