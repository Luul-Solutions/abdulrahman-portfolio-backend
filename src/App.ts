import express from "express";
import helmet from "helmet";
import cors from "cors";
import * as dotenv from "dotenv";
import profileRoutes from "./routes/ProfileRoutes";
import { errorHandler } from "./middleware/errorHandler";

dotenv.config();
const app = express();
app.listen(3000, () => console.log("Server running on port 5000"));


app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) =>
  res.json({ message: "Developer Portfolio API is running" })
);

app.use("/api/profiles", profileRoutes);

app.use(errorHandler);

export default app;
