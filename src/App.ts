// src/app.ts
import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerOptions from "./swaggerDef";
import profileRoutes from "./routes/ProfileRoutes";

const app = express();
app.use(express.json());

// API routes
app.use("/profiles", profileRoutes);

// Swagger setup
const specs = swaggerJsdoc(swaggerOptions);

// Serve Swagger JSON at /api-docs.json
app.get("/api-docs.json", (_req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(specs);
});

// Swagger UI
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, {
    swaggerUrl: "/api-docs.json", // point Swagger UI to JSON spec
  })
);

// Optional redirect from trailing slash
app.get("/api-docs/", (_req, res) => res.redirect("/api-docs"));

app.get("/", (_req, res) => res.send("API is running"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
