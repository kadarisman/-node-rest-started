const router = require('express').Router();
const {viewUser, createUser, updateUser, deleteUser} = require('../../controllers/UserController');
const { 
    validationCreateUser,
    validationUpdateUser,
    validationDeleteUser
    } = require('../../validations/User.validation');
    
const middleware = require('../../middleware/Auth');    

router.get('/',  middleware.isSuperAdmin, viewUser);
router.post('/create', middleware.isSuperAdmin, validationCreateUser, createUser);
router.put('/update/:nid', middleware.isSuperAdmin, validationUpdateUser, updateUser);
router.delete('/delete/:nid',  middleware.isSuperAdmin, validationDeleteUser, deleteUser);

module.exports = router;
