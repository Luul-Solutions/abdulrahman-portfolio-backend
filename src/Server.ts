import app from "./App";
import { initDB } from "./config/database";

const PORT = Number(process.env.PORT || 4000);

(async () => {
  await initDB();
  app.listen(PORT, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
})();

