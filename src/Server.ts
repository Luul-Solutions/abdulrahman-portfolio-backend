import app from "./App";
import { sequelize } from "./config/database";

const PORT = process.env.PORT || 5000;

async function start() {
  try {
    await sequelize.sync();
    console.log("✅ Database connected");

     app.listen(PORT, () => {
       console.log(`🚀 Server running at http://localhost:${PORT}`);
       console.log(
         `📘 Swagger docs available at http://localhost:${PORT}/api-docs`
       );
     });

   
  } catch (error) {
    console.error("❌ Unable to start server:", error);
  }
}

start();
