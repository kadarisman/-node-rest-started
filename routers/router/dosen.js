const router = require('express').Router();
const { viewDosen, createDosen, updateDosen, deleteDosen } = require('../../controllers/DosenController');
const { 
    validationCreateDosen,
    validationUpdateDosen,
    validationDeleteDosen
    } = require('../../validations/Dosen.validation');


const middleware = require('../../middleware/Auth');

router.get('/', middleware.isSuperAdmin, viewDosen);
router.post('/create', middleware.isSuperAdmin, validationCreateDosen, createDosen);
router.put('/update/:id_user', middleware.isSuperAdmin, validationUpdateDosen, updateDosen);
router.delete('/delete/:id_user',  middleware.isSuperAdmin, validationDeleteDosen, deleteDosen);


module.exports = router;