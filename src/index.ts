import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  let helloIncubator = "Hello World Tarasius!";
  res.send(helloIncubator);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
