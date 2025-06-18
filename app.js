import express from "express";
import bodyParser from "body-parser";
import path from "path"; // ✅ MISSING IMPORT
import { fileURLToPath } from "url";
import methodOverride from 'method-override';

import connectDB from "./db.js";
import employeeRoutes from "./routes/employees.js";
import departmentRoutes from "./routes/departments.js";
import authRoute from "./routes/authRoute.js";

const app = express();

// Static and View Setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(methodOverride('_method')); // ✅ enables ?_method=DELETE support
app.use(express.static(path.join(__dirname, "public"))); // ✅ Serve CSS/JS/Images

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to MongoDB
connectDB();

// Routes
app.use("/", authRoute);
app.use("/employees", employeeRoutes);
app.use("/department", departmentRoutes);

// Start Server
app.listen(3500, () => console.log("✅ Server running on http://localhost:3500"));
