import cors from "cors";
import express from "express";

const port = 9000;

const app = express();
app.use(cors(), express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
