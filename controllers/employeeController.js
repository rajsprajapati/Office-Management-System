import Employee from "../models/employee.js";
import Department from "../models/department.js";
import axios from "axios";

// Get all employees
export const getEmployees = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(6);
        let skip = (page - 1) * limit;

        const employees = await Employee.find().skip(skip).limit(limit);
        const totalEmployees = await Employee.countDocuments(); // For pagination logic
        const departments = await Department.find();

        const totalPages = Math.ceil(totalEmployees / limit);

        res.render('../views/employees/showemp.ejs', {
            employees,
            departments,
            currentPage: page,
            totalPages,
            limit
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching employees", error });
    }
};

export const addnewemployee = async (req, res) => {
    try {
        const employees = await Employee.find();
        const departments = await Department.find();
        const response = await axios.get('https://countriesnow.space/api/v0.1/countries/positions');
        res.render('../views/employees/addemp.ejs', { employees: employees, departments: departments, countries: response.data.data });
    } catch (error) {
        res.status(500).json({ message: "Error fetching employee", error });
    }
};

// Create an employee
export const createEmployee = async (req, res) => {
    try {
        const employee = new Employee(req.body);
        await employee.save();
        res.redirect('/employees'); // Redirect to employees list after creation
    } catch (error) {
        res.status(500).json({ message: "Error creating employee", error });
    }
};

export const editemployee = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        const departments = await Department.find(); // Assuming you have a Department model
        const supervisors = await Employee.find({ _id: { $ne: req.params.id } }); // Exclude current employee from supervisors
        res.render('../views/employees/editemp.ejs', { employee: employee, departments: departments, supervisors: supervisors });
    } catch (error) {
        res.status(500).json({ message: "Error fetching employee for edit", error });
    }
};

// Update an employee
export const updateEmployee = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.redirect('/employees'); // Redirect to employees list after creation
    } catch (error) {
        res.status(500).json({ message: "Error updating employee", error });
    }
};

// Delete an employee
export const deleteEmployee = async (req, res) => {
    try {
        await Employee.findByIdAndDelete(req.params.id);
        res.redirect('/employees'); // Redirect to employees list after deletion
    } catch (error) {
        res.status(500).json({ message: "Error deleting employee", error });
    }
};

export const searchEmployee = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(6);
        let skip = (page - 1) * limit;

        const departments = await Department.find();

        const searchTerm = req.query.Search;
        const searchField = req.query.filter;
        let query = {};

        if (searchTerm) {
        query.name = new RegExp('^' + searchTerm, 'i');
        }

        if (searchField) {
        query.department = new RegExp('^' + searchField + '$', 'i');
        }

        let employee = await Employee.find(query);
        if (employee.length === 0) {
            query = {};
            if (searchTerm) {
            query.email = new RegExp('^' + searchTerm, 'i');
            }

            if (searchField) {
            query.department = new RegExp('^' + searchField + '$', 'i');
            }
            employee = await Employee.find(query).skip(skip).limit(limit);
        }
        const totalEmployees = await Employee.countDocuments(query);
        const totalPages = Math.ceil(totalEmployees / limit);

        res.render('../views/employees/showemp.ejs', { 
            employees: employee,
            departments,
            currentPage: page,
            totalPages,
            limit
        });
    } catch (error) {
        res.status(500).json({ message: 'Error searching department', error });
    }
}