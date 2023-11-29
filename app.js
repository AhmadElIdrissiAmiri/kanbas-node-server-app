import express from "express";
import session from "express-session";
import Hello from "./hello.js";
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import "dotenv/config";
import mongoose from "mongoose";
import UserRoutes from "./users/routes.js";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING ||'mongodb://127.0.0.1:27017/kanbas' 
mongoose.connect(CONNECTION_STRING);


const app = express();
app.use(cors(
    {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    }
));

const sessionOptions = {
    secret: "g#r8n8zQ8D*5sP!2c@r$t1o0nG",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  
  app.use(
    session(sessionOptions)
  );
  
app.use(express.json());
UserRoutes(app);
CourseRoutes(app);
Lab5(app);
Hello(app);
AssignmentRoutes(app);
ModuleRoutes(app);

app.listen(process.env.PORT || 4000);
