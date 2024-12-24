// Step 1: Import libraries
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";

// Step 3: Import routes
import product from "./routes/product.js";
import auth from "./routes/auth.js";


// Step 4: Middleware
const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.use('/api',product);
app.use('/api',auth);

// Step 2: Start the server
app.listen(5000, () => console.log("Server is running on port 5000"));
