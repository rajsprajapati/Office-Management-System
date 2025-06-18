import express from "express";
import { getEmployees, editemployee, searchEmployee, addnewemployee, createEmployee, updateEmployee, deleteEmployee } from "../controllers/employeeController.js";

const router = express.Router();

// Get all employees
router.get("/", getEmployees);
router.get("/new", addnewemployee); // This route is for rendering the edit form, not handled by the controller
router.post("/add", createEmployee);
router.get("/:id/edit", editemployee); // This route is for rendering the edit form, not handled by the controller
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);
router.get('/search',searchEmployee);

export default router;
