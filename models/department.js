import mongoose from 'mongoose';

const departmentsSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  }
});

const Department = mongoose.model('Department', departmentsSchema);
export default Department;
