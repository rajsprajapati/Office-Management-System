import Department from "../models/department.js";

export const getDepartment = async (req, res) => {
    try{
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(6);
        let skip = (page - 1) * limit;

        const department = await Department.find().skip(skip).limit(limit);

        const totalDepartments = await Department.countDocuments();
        const totalPages = Math.ceil(totalDepartments / limit);

        res.render('../views/departments/showdep.ejs', { 
            departments: department,
            currentPage: page,
            totalPages,
            limit
        });
    }
    catch (error){
        res.status(500).json({message: 'Error fetching departmnt',error});
    }
};

export const newDepartment = (req, res) => {
    res.render('../views/departments/adddep.ejs');
};
export const createDepartment = async(req, res) => {
    try{
        const department = await Department(req.body);
        await department.save();
        res.redirect('/department');
    } catch (error){
        res.status(500),json({message: "Error creating deprtment", error});
    }
};

export const editDepartment = async(req, res) => {
    try{
        const department = await Department.findById(req.params.id);
        res.render('../views/departments/editdep.ejs', { departments : department });
    } catch (error){
        res.status(500).json({ message: "Error fetching department for edit", error });
    } 
};

export const updatedDepartment = async(req,res) => {
    try{
        const department =  await Department.findByIdAndUpdate(req.params.id, req.body, {new: true });
        // res.json(updatedDepartment);
        res.redirect('/department');
    }catch (error){
        res.status(500).json({ message: "Error udating department", error});
    }
};

export const deleteDepartment = async(req, res) => {
    try{
        await Department.findByIdAndDelete(req.params.id);
        res.redirect('/department');
    }catch (error){
        res.status(500).json({ menubar: "Error deleting department", error});
    }
};

export const searchDepartment = async (req, res) => {
    try {
        let page = parseInt(req.query.page) || 1;
        let limit = parseInt(6);
        let skip = (page - 1) * limit;

        const totalEmployees = 1;
        const totalPages = Math.ceil(totalEmployees / limit);

        const searchTerm = req.query.Search;
        const department = await Department.find({ name: new RegExp(searchTerm, 'i') });
        res.render('../views/departments/showdep.ejs', { 
            departments: department,
            currentPage: page,
            totalPages,
            limit
        });
    } catch (error) {
        res.status(500).json({ message: 'Error searching department', error });
    }
}