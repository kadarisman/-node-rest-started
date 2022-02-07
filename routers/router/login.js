const router = require('express').Router();
// const screet = 'kfjweifuwefjwjskdfjwedjwqdj';
// const jwt    = require('jsonwebtoken');
const { login } = require('../../controllers/LoginController');
const { validationLogin } = require('../../validations/Login.validation');



// router.get('/login', (req, res) => {
//     const token = jwt.sign({id_user : 1, username : 'user', email : 'hasjdhj@gmail.com'}, screet);
//     res.json({token : token});
// });

router.post('/login', validationLogin, login);

module.exports=router;