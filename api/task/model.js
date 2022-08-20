// build your `Tasks` model here

const db = require("../../data/dbConfig");

async function getAll() {
  const tasks = await db("tasks as t")
    .leftJoin("projects as p", "p.project_id", "t.project_id")
    .select(
      "t.task_id",
      "t.task_description",
      "t.task_notes",
      "t.task_completed",
      "p.project_name",
      "p.project_description"
    );

  return tasks.map((task) => {
    if (task.task_completed === 1) {
      return { ...task, task_completed: true };
    } else return { ...task, task_completed: false };
  });
}

async function create(payload) {
  const newTaskId = await db("tasks").insert(payload);

  const newTask = await db("tasks").where("task_id", newTaskId).first();
  return {
    ...newTask,
    task_completed: newTask.project_completed === 1 ? true : false,
  };
}

module.exports = { getAll, create };

"t.task_id",
  "t.task_description",
  "t.task_notes",
  "t.task_completed",
  "p.project_name",
  "p.project_description";
