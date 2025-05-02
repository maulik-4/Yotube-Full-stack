const express= require('express');
const userSignup = require('../Controllers/user');
const auth = require('../middlewares/authentication');
const isAdmin = require('../middlewares/isAdmin');

const router = express.Router();
//Routes
router.post('/signup' ,userSignup.userSignup);
router.post('/login' , userSignup.userSignin);
router.get('/logout' , userSignup.userLogout);


//admin
router.put('/block/:id', auth, userSignup.blockUser);     
router.put('/unblock/:id', auth, userSignup.unblockUser);  
router.get('/all-users', auth, isAdmin, async (req, res) => {
    try {
        const users = await require('../Modals/user').find({});
        res.status(200).json({ users });
    } catch (err) {
        console.error("Error fetching users:", err);
        res.status(500).json({ message: "Error fetching users" });
    }
});


module.exports = router;