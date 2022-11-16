const Exports = require('express');

const router = Express.Router();


// intan ayaan ku daray  
const doctorController = require('../Controllers/DoctorControlers')

// GET ALL WAXAAN KALA IMI DOCTOR CONTROLL
router.get('./', doctorController.getAllDoctors)



module.exports=router;