// import mongoose from 'mongoose';
// const employeeSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     jobTitle: String,
//     department: { type: mongoose.Schema.Types.ObjectId, ref: 'Department' },
//     supervisor: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
//     country: String,
//     state: String,
//     city: String
// });
// const Employee = mongoose.model("Employee", employeeSchema);
// export default Employee;

import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    jobTitle: String,
    department: String, 
    supervisor: String,  
    country: String
});

const Employee = mongoose.model("Employee", employeeSchema);
export default Employee;
