import express, { Application, Request, Response } from "express";
import fs from "fs";
import path from "path";

const app: Application = express();
// filepath
const filepath = path.join(__dirname, "../db/todo.json");

// ToDo Home
app.get("/", (req: Request, res: Response) => {
  res.send("I am learning express with TypeScript");
});

// GET All ToDos
app.get("/todos", (req: Request, res: Response) => {
  const data = fs.readFileSync(filepath, { encoding: "utf-8" });
  console.log(data);
  res.json(data);
});

// POST ToDo
app.post("/todos/create-todo", (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.send("create todo");
});

// [app]-[express.json()]-[todosRouter]-[Root Route "/"]-[GET "/todos"]-[POST Create ToDo]
//[todosRouter]-[get all todos /todos GET]-[create todo /todos/create-todo POST todo]

export default app;

/**
 * Basic File Structure
 * server - server handling like - starting, closing, error handling of server. only related to server
 * app file - routing handle, middleware, route related error
 * app folder - app business logic handling like create read update delete, database related works
 */
