import express from 'express';
import {getDepartment, editDepartment, searchDepartment, newDepartment, createDepartment, updatedDepartment, deleteDepartment} from "../controllers/departmentController.js"

const router = express.Router();

router.get("/",getDepartment);
router.get("/new", newDepartment); 
router.post('/add',createDepartment);
router.get("/:id/edit", editDepartment);
router.put('/:id',updatedDepartment);
router.delete('/:id',deleteDepartment);
router.get('/search',searchDepartment);

export default router;