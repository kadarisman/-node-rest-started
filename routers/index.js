const router = require ('express').Router();
const mahasiswa = require('./router/mahasiswa');
const dosen = require('./router/dosen');
const user = require('./router/user');
const login = require('./router/login');

const middleware = require('./../middleware/Auth');

router.use('/auth', login);
router.use('/mahasiswa', middleware.isAuth, mahasiswa);
router.use('/dosen', middleware.isAuth, dosen);
router.use('/user', middleware.isAuth, user);

module.exports = router;