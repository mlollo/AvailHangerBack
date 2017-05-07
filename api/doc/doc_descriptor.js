/**
 * @apiDefine token
 * @apiParam (Query parameters) {String} token API Bearer Token, required for authentication
 */
/**
 * @apiDefine tokenLimitOffset
 * @apiParam (Query parameters) {String} token API Bearer Token, required for authentication
 * @apiParam (Query parameters) {Integer} [limit=50] The number of rows to be fetched
 * @apiParam (Query parameters) {Integer} [offset=0] The offset by which rows will be fetched
 */

/**
 * @api {get} /api/getToken/ Basic Auth


 * @apiVersion 1.0.0
 * @apiGroup 1-Authentication

 * @apiDescription To be able to interact with the API, you need to generate a Bearer Token using the <code>/api/getToken/</code> url
 *
 * Set your HTTP header like so with basic64 encoding : <code>Authorization clientID:clientSecret</code>

 * @apiHeader {String} ClientID Generated application's API credentials
 * @apiHeader {String} ClientSecret Generated application's API credentials

 * @apiSuccess {String} token Bearer Token, required for further API calls

 * @apiError (Error 500) BadAuthorizationHeader There is an invalid or no authorization header
 * @apiError (Error 401) AuthenticationFailed Couldn't match clientID/clientSecret with database
 */

/********************************************
 ********************************************
 * HANGER
 ********************************************
 *******************************************/
/**
 * @api {get} /api/hanger?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>hanger</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup Hanger
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} hangers List of hanger
 * @apiSuccess {Integer} hangers.id <code>id</code> of hanger
 * @apiSuccess {Integer} hangers.version <code>version</code> of hanger
 * @apiSuccess {Integer} hangers.f_barcode <code>f_barcode</code> of hanger
 * @apiSuccess {Integer} hangers.f_occ <code>f_occ</code> of hanger
 * @apiSuccess {Boolean} hangers.f_connected <code>f_connected</code> of hanger
 * @apiSuccess {Integer} hangers.f_rail <code>f_rail</code> of hanger
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for hanger
 */

/**
 * @api {get} /api/hanger/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>hanger</code> with <code>id</code>
 * @apiGroup Hanger
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of hanger to fetch
 * @apiSuccess {Object} hanger Object of hanger
 * @apiSuccess {Integer} hanger.id <code>id</code> of hanger
 * @apiSuccess {Integer} hanger.version <code>version</code> of hanger
 * @apiSuccess {Integer} hanger.f_barcode <code>f_barcode</code> of hanger
 * @apiSuccess {Integer} hanger.f_occ <code>f_occ</code> of hanger
 * @apiSuccess {Boolean} hanger.f_connected <code>f_connected</code> of hanger
 * @apiSuccess {Integer} hanger.f_rail <code>f_rail</code> of hanger
 * @apiError (Error 404) {Object} NotFound No hanger with ID <code>id</code> found
 */

/**
 * @api {post} /api/hanger/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>hanger</code> using values defined in request's <code>body</code>
 * @apiGroup Hanger
 * @apiUse token
 * @apiParam (Body parameters) {Integer} [f_barcode] <code>f_barcode</code> of hanger
 * @apiParam (Body parameters) {Integer} [f_occ] <code>f_occ</code> of hanger
 * @apiParam (Body parameters) {Boolean} [f_connected] <code>f_connected</code> of hanger
 * @apiParam (Body parameters) {Integer} [f_rail] <code>f_rail</code> of hanger
 * @apiSuccess {Object} hanger Created hanger
 * @apiSuccess {Integer} hanger.id <code>id</code> of hanger
 * @apiSuccess {Integer} hanger.f_barcode <code>f_barcode</code> of hanger
 * @apiSuccess {Integer} hanger.f_occ <code>f_occ</code> of hanger
 * @apiSuccess {Boolean} hanger.f_connected <code>f_connected</code> of hanger
 * @apiSuccess {Integer} hanger.f_rail <code>f_rail</code> of hanger
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create hanger
 */

/**
 * @api {put} /api/hanger/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>hanger</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup Hanger
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the hanger to update
 * @apiParam (Body parameters) {Integer} [f_barcode] New value of <code>f_barcode</code> for hanger
 * @apiParam (Body parameters) {Integer} [f_occ] New value of <code>f_occ</code> for hanger
 * @apiParam (Body parameters) {Boolean} [f_connected] New value of <code>f_connected</code> for hanger
 * @apiParam (Body parameters) {Integer} [f_rail] New value of <code>f_rail</code> for hanger
 * @apiSuccess {Object} hanger Updated hanger
 * @apiSuccess {Integer} hanger.id <code>id</code> of hanger
 * @apiSuccess {Integer} hanger.f_barcode <code>f_barcode</code> of hanger
 * @apiSuccess {Integer} hanger.f_occ <code>f_occ</code> of hanger
 * @apiSuccess {Boolean} hanger.f_connected <code>f_connected</code> of hanger
 * @apiSuccess {Integer} hanger.f_rail <code>f_rail</code> of hanger
 * @apiError (Error 404) {Object} NotFound No hanger with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update hanger
 */

/**
 * @api {delete} /api/hanger/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>hanger</code> with <code>id</code>
 * @apiGroup Hanger
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of hanger to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No hanger with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * RAIL
 ********************************************
 *******************************************/
/**
 * @api {get} /api/rail?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>rail</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup Rail
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} rails List of rail
 * @apiSuccess {Integer} rails.id <code>id</code> of rail
 * @apiSuccess {Integer} rails.version <code>version</code> of rail
 * @apiSuccess {Boolean} rails.f_state <code>f_state</code> of rail
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for rail
 */

/**
 * @api {get} /api/rail/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>rail</code> with <code>id</code>
 * @apiGroup Rail
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of rail to fetch
 * @apiSuccess {Object} rail Object of rail
 * @apiSuccess {Integer} rail.id <code>id</code> of rail
 * @apiSuccess {Integer} rail.version <code>version</code> of rail
 * @apiSuccess {Boolean} rail.f_state <code>f_state</code> of rail
 * @apiError (Error 404) {Object} NotFound No rail with ID <code>id</code> found
 */

/**
 * @api {get} /api/rail/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>rail</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup Rail
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the rail to which <code>association</code> is related
 * @apiParam (Params parameters) {String=hanger} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No rail with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/rail/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>rail</code> using values defined in request's <code>body</code>
 * @apiGroup Rail
 * @apiUse token
 * @apiParam (Body parameters) {Boolean} [f_state] <code>f_state</code> of rail
 * @apiParam (Body parameters) {Integer} [f_id_rail] <code>id</code> of entity hanger to associate
 * @apiSuccess {Object} rail Created rail
 * @apiSuccess {Integer} rail.id <code>id</code> of rail
 * @apiSuccess {Boolean} rail.f_state <code>f_state</code> of rail
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create rail
 */

/**
 * @api {put} /api/rail/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>rail</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup Rail
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the rail to update
 * @apiParam (Body parameters) {Boolean} [f_state] New value of <code>f_state</code> for rail
 * @apiParam (Body parameters) {Integer} [f_id_rail] <code>id</code> of entity hanger to associate
 * @apiSuccess {Object} rail Updated rail
 * @apiSuccess {Integer} rail.id <code>id</code> of rail
 * @apiSuccess {Boolean} rail.f_state <code>f_state</code> of rail
 * @apiError (Error 404) {Object} NotFound No rail with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update rail
 */

/**
 * @api {delete} /api/rail/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>rail</code> with <code>id</code>
 * @apiGroup Rail
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of rail to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No rail with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * STOCK
 ********************************************
 *******************************************/
/**
 * @api {get} /api/stock?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>stock</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup Stock
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} stocks List of stock
 * @apiSuccess {Integer} stocks.id <code>id</code> of stock
 * @apiSuccess {Integer} stocks.version <code>version</code> of stock
 * @apiSuccess {Integer} stocks.f_nbhangmisplaced <code>f_nbhangmisplaced</code> of stock
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for stock
 */

/**
 * @api {get} /api/stock/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>stock</code> with <code>id</code>
 * @apiGroup Stock
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of stock to fetch
 * @apiSuccess {Object} stock Object of stock
 * @apiSuccess {Integer} stock.id <code>id</code> of stock
 * @apiSuccess {Integer} stock.version <code>version</code> of stock
 * @apiSuccess {Integer} stock.f_nbhangmisplaced <code>f_nbhangmisplaced</code> of stock
 * @apiError (Error 404) {Object} NotFound No stock with ID <code>id</code> found
 */

/**
 * @api {get} /api/stock/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>stock</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup Stock
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the stock to which <code>association</code> is related
 * @apiParam (Params parameters) {String=rail} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No stock with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/stock/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>stock</code> using values defined in request's <code>body</code>
 * @apiGroup Stock
 * @apiUse token
 * @apiParam (Body parameters) {Integer} [f_nbhangmisplaced] <code>f_nbhangmisplaced</code> of stock
 * @apiParam (Body parameters) {Integer} [f_id_stock] <code>id</code> of entity rail to associate
 * @apiSuccess {Object} stock Created stock
 * @apiSuccess {Integer} stock.id <code>id</code> of stock
 * @apiSuccess {Integer} stock.f_nbhangmisplaced <code>f_nbhangmisplaced</code> of stock
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create stock
 */

/**
 * @api {put} /api/stock/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>stock</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup Stock
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the stock to update
 * @apiParam (Body parameters) {Integer} [f_nbhangmisplaced] New value of <code>f_nbhangmisplaced</code> for stock
 * @apiParam (Body parameters) {Integer} [f_id_stock] <code>id</code> of entity rail to associate
 * @apiSuccess {Object} stock Updated stock
 * @apiSuccess {Integer} stock.id <code>id</code> of stock
 * @apiSuccess {Integer} stock.f_nbhangmisplaced <code>f_nbhangmisplaced</code> of stock
 * @apiError (Error 404) {Object} NotFound No stock with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update stock
 */

/**
 * @api {delete} /api/stock/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>stock</code> with <code>id</code>
 * @apiGroup Stock
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of stock to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No stock with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * USER
 ********************************************
 *******************************************/
/**
 * @api {get} /api/user?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>user</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup User
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} users List of user
 * @apiSuccess {Integer} users.id <code>id</code> of user
 * @apiSuccess {Integer} users.version <code>version</code> of user
 * @apiSuccess {String} users.f_login <code>f_login</code> of user
 * @apiSuccess {String} users.f_password <code>f_password</code> of user
 * @apiSuccess {String} users.f_email <code>f_email</code> of user
 * @apiSuccess {String} users.f_token_password_reset <code>f_token_password_reset</code> of user
 * @apiSuccess {Integer} users.f_enabled <code>f_enabled</code> of user
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for user
 */

/**
 * @api {get} /api/user/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>user</code> with <code>id</code>
 * @apiGroup User
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of user to fetch
 * @apiSuccess {Object} user Object of user
 * @apiSuccess {Integer} user.id <code>id</code> of user
 * @apiSuccess {Integer} user.version <code>version</code> of user
 * @apiSuccess {String} user.f_login <code>f_login</code> of user
 * @apiSuccess {String} user.f_password <code>f_password</code> of user
 * @apiSuccess {String} user.f_email <code>f_email</code> of user
 * @apiSuccess {String} user.f_token_password_reset <code>f_token_password_reset</code> of user
 * @apiSuccess {Integer} user.f_enabled <code>f_enabled</code> of user
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 */

/**
 * @api {get} /api/user/:id/:association?token=TOKEN&limit=10&offset=0 2.a - Find association
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>user</code>'s <code>association</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup User
 * @apiUse tokenLimitOffset
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the user to which <code>association</code> is related
 * @apiParam (Params parameters) {String=role,group} association Name of the related entity
 * @apiSuccess {Object} Object Object of <code>association</code>
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 * @apiError (Error 404) {Object} AssociationNotFound No association with <code>association</code>
 */

/**
 * @api {post} /api/user/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>user</code> using values defined in request's <code>body</code>
 * @apiGroup User
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_login] <code>f_login</code> of user
 * @apiParam (Body parameters) {String} [f_email] <code>f_email</code> of user
 * @apiParam (Body parameters) {Integer} [f_id_role_role] <code>id</code> of entity role to associate
 * @apiParam (Body parameters) {Integer} [f_id_group_group] <code>id</code> of entity group to associate
 * @apiSuccess {Object} user Created user
 * @apiSuccess {Integer} user.id <code>id</code> of user
 * @apiSuccess {String} user.f_login <code>f_login</code> of user
 * @apiSuccess {String} user.f_email <code>f_email</code> of user
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create user
 */

/**
 * @api {put} /api/user/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>user</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup User
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the user to update
 * @apiParam (Body parameters) {String} [f_login] New value of <code>f_login</code> for user
 * @apiParam (Body parameters) {String} [f_email] New value of <code>f_email</code> for user
 * @apiParam (Body parameters) {Integer} [f_id_role_role] <code>id</code> of entity role to associate
 * @apiParam (Body parameters) {Integer} [f_id_group_group] <code>id</code> of entity group to associate
 * @apiSuccess {Object} user Updated user
 * @apiSuccess {Integer} user.id <code>id</code> of user
 * @apiSuccess {String} user.f_login <code>f_login</code> of user
 * @apiSuccess {String} user.f_email <code>f_email</code> of user
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update user
 */

/**
 * @api {delete} /api/user/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>user</code> with <code>id</code>
 * @apiGroup User
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of user to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No user with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * ROLE
 ********************************************
 *******************************************/
/**
 * @api {get} /api/role?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>role</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup Role
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} roles List of role
 * @apiSuccess {Integer} roles.id <code>id</code> of role
 * @apiSuccess {Integer} roles.version <code>version</code> of role
 * @apiSuccess {String} roles.f_label <code>f_label</code> of role
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for role
 */

/**
 * @api {get} /api/role/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>role</code> with <code>id</code>
 * @apiGroup Role
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of role to fetch
 * @apiSuccess {Object} role Object of role
 * @apiSuccess {Integer} role.id <code>id</code> of role
 * @apiSuccess {Integer} role.version <code>version</code> of role
 * @apiSuccess {String} role.f_label <code>f_label</code> of role
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 */

/**
 * @api {post} /api/role/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>role</code> using values defined in request's <code>body</code>
 * @apiGroup Role
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_label] <code>f_label</code> of role
 * @apiSuccess {Object} role Created role
 * @apiSuccess {Integer} role.id <code>id</code> of role
 * @apiSuccess {String} role.f_label <code>f_label</code> of role
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create role
 */

/**
 * @api {put} /api/role/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>role</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup Role
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the role to update
 * @apiParam (Body parameters) {String} [f_label] New value of <code>f_label</code> for role
 * @apiSuccess {Object} role Updated role
 * @apiSuccess {Integer} role.id <code>id</code> of role
 * @apiSuccess {String} role.f_label <code>f_label</code> of role
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update role
 */

/**
 * @api {delete} /api/role/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>role</code> with <code>id</code>
 * @apiGroup Role
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of role to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No role with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * GROUP
 ********************************************
 *******************************************/
/**
 * @api {get} /api/group?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>group</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup Group
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} groups List of group
 * @apiSuccess {Integer} groups.id <code>id</code> of group
 * @apiSuccess {Integer} groups.version <code>version</code> of group
 * @apiSuccess {String} groups.f_label <code>f_label</code> of group
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for group
 */

/**
 * @api {get} /api/group/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>group</code> with <code>id</code>
 * @apiGroup Group
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of group to fetch
 * @apiSuccess {Object} group Object of group
 * @apiSuccess {Integer} group.id <code>id</code> of group
 * @apiSuccess {Integer} group.version <code>version</code> of group
 * @apiSuccess {String} group.f_label <code>f_label</code> of group
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 */

/**
 * @api {post} /api/group/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>group</code> using values defined in request's <code>body</code>
 * @apiGroup Group
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_label] <code>f_label</code> of group
 * @apiSuccess {Object} group Created group
 * @apiSuccess {Integer} group.id <code>id</code> of group
 * @apiSuccess {String} group.f_label <code>f_label</code> of group
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create group
 */

/**
 * @api {put} /api/group/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>group</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup Group
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the group to update
 * @apiParam (Body parameters) {String} [f_label] New value of <code>f_label</code> for group
 * @apiSuccess {Object} group Updated group
 * @apiSuccess {Integer} group.id <code>id</code> of group
 * @apiSuccess {String} group.f_label <code>f_label</code> of group
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update group
 */

/**
 * @api {delete} /api/group/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>group</code> with <code>id</code>
 * @apiGroup Group
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of group to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No group with ID <code>id</code> found
 */



/********************************************
 ********************************************
 * PRODUCT
 ********************************************
 *******************************************/
/**
 * @api {get} /api/product?token=TOKEN&limit=10&offset=0 1 - Find all
 * @apiVersion 1.0.0
 * @apiDescription Fetch records of <code>product</code> from <code>offset</code> until <code>limit</code>
 * @apiGroup Product
 * @apiUse tokenLimitOffset
 * @apiSuccess {Object[]} products List of product
 * @apiSuccess {Integer} products.id <code>id</code> of product
 * @apiSuccess {Integer} products.version <code>version</code> of product
 * @apiSuccess {String} products.f_style <code>f_style</code> of product
 * @apiSuccess {Integer} products.f_barcode <code>f_barcode</code> of product
 * @apiSuccess {String} products.f_sexe <code>f_sexe</code> of product
 * @apiSuccess {String} products.f_size <code>f_size</code> of product
 * @apiSuccess {Integer} limit Limit used to fetch data
 * @apiSuccess {Integer} offset Offset used to fetch data
 * @apiSuccess {Integer} totalCount The total count of records for product
 */

/**
 * @api {get} /api/product/:id?token=TOKEN 2 - Find one
 * @apiVersion 1.0.0
 * @apiDescription Fetch one record of <code>product</code> with <code>id</code>
 * @apiGroup Product
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id The <code>id</code> of product to fetch
 * @apiSuccess {Object} product Object of product
 * @apiSuccess {Integer} product.id <code>id</code> of product
 * @apiSuccess {Integer} product.version <code>version</code> of product
 * @apiSuccess {String} product.f_style <code>f_style</code> of product
 * @apiSuccess {Integer} product.f_barcode <code>f_barcode</code> of product
 * @apiSuccess {String} product.f_sexe <code>f_sexe</code> of product
 * @apiSuccess {String} product.f_size <code>f_size</code> of product
 * @apiError (Error 404) {Object} NotFound No product with ID <code>id</code> found
 */

/**
 * @api {post} /api/product/?token=TOKEN 3 - Create
 * @apiVersion 1.0.0
 * @apiDescription Create a record of <code>product</code> using values defined in request's <code>body</code>
 * @apiGroup Product
 * @apiUse token
 * @apiParam (Body parameters) {String} [f_style] <code>f_style</code> of product
 * @apiParam (Body parameters) {Integer} [f_barcode] <code>f_barcode</code> of product
 * @apiParam (Body parameters) {String} [f_sexe] <code>f_sexe</code> of product
 * @apiParam (Body parameters) {String} [f_size] <code>f_size</code> of product
 * @apiSuccess {Object} product Created product
 * @apiSuccess {Integer} product.id <code>id</code> of product
 * @apiSuccess {String} product.f_style <code>f_style</code> of product
 * @apiSuccess {Integer} product.f_barcode <code>f_barcode</code> of product
 * @apiSuccess {String} product.f_sexe <code>f_sexe</code> of product
 * @apiSuccess {String} product.f_size <code>f_size</code> of product
 * @apiError (Error 500) {Object} ServerError An error occured when trying to create product
 */

/**
 * @api {put} /api/product/:id?token=TOKEN 4 - Update
 * @apiVersion 1.0.0
 * @apiDescription Update record of <code>product</code> with <code>id</code> using values defined in request's <code>body</code>
 * @apiGroup Product
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of the product to update
 * @apiParam (Body parameters) {String} [f_style] New value of <code>f_style</code> for product
 * @apiParam (Body parameters) {Integer} [f_barcode] New value of <code>f_barcode</code> for product
 * @apiParam (Body parameters) {String} [f_sexe] New value of <code>f_sexe</code> for product
 * @apiParam (Body parameters) {String} [f_size] New value of <code>f_size</code> for product
 * @apiSuccess {Object} product Updated product
 * @apiSuccess {Integer} product.id <code>id</code> of product
 * @apiSuccess {String} product.f_style <code>f_style</code> of product
 * @apiSuccess {Integer} product.f_barcode <code>f_barcode</code> of product
 * @apiSuccess {String} product.f_sexe <code>f_sexe</code> of product
 * @apiSuccess {String} product.f_size <code>f_size</code> of product
 * @apiError (Error 404) {Object} NotFound No product with ID <code>id</code> found
 * @apiError (Error 500) {Object} ServerError An error occured when trying to update product
 */

/**
 * @api {delete} /api/product/:id?token=TOKEN 5 - Delete
 * @apiVersion 1.0.0
 * @apiDescription Permanently delete a record of <code>product</code> with <code>id</code>
 * @apiGroup Product
 * @apiUse token
 * @apiParam (Params parameters) {Integer} id <code>id</code> of product to delete
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 * @apiError (Error 404) {Object} NotFound No product with ID <code>id</code> found
 */



