import app from "./app.js";
import { loadEnv } from "./config/env.js";

loadEnv();

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`🚀 ALIS Backend running on port ${PORT}`);
});
