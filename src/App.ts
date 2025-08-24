// src/app.ts
import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/database";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOptions from "./swaggerDef"; // <- your centralized Swagger file
import profileRoutes from "./routes/ProfileRoutes"; // make sure this exists

dotenv.config();

const app = express();
app.use(express.json());

// Use routes
app.use("/", profileRoutes);

// Generate Swagger spec from your centralized file
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Mount Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Start DB and server
const PORT = process.env.PORT || 5001;

sequelize
  .sync()
  .then(() => {
    console.log("✅ Database connected");
   
  })
  .catch((err: Error) => console.error("❌ Unable to connect to DB:", err));

export default app;
