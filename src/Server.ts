import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import profileRoutes from "./routes/ProfileRoutes";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Register routes
app.use("/profiles", profileRoutes);

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
