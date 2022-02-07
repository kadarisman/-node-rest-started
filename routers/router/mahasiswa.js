const router = require('express').Router();
const {viewMahasiswa, createMahasiswa, updateMahasiswa, deleteMahasiswa} = require('../../controllers/MahasiswaController');
const { 
    validationCreateMahasiswa,
    validationUpdateMahasiswa,
    validationDeleteMahasiswa
    } = require('../../validations/Mahasiswa.validation');
    
const middleware = require('../../middleware/Auth');    

router.get('/', viewMahasiswa);
router.post('/create', middleware.isSuperAdmin, validationCreateMahasiswa, createMahasiswa);
router.put('/update/:nim', middleware.isSuperAdmin, validationUpdateMahasiswa, updateMahasiswa);
router.delete('/delete/:nim',  middleware.isSuperAdmin, validationDeleteMahasiswa, deleteMahasiswa);

module.exports = router;
