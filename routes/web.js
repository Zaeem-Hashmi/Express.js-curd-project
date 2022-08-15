import  Express  from "express";
import multer from 'multer';
import path from 'path';
import { join } from "path";
const router = Express.Router();
import StudentController from '../controller/studentController.js'
router.get('/',StudentController.getAllDoc)
router.post('/',StudentController.createDoc)
router.get('/edit/:id',StudentController.editDoc)
router.post('/update/:id',StudentController.updateDocById)
router.post('/delete/:id',StudentController.deleteDocById)

export default router