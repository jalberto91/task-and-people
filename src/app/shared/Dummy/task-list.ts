import { TaskItem } from "../models/task.model";

export const dummyTasks: TaskItem[] = [
  {
    id: "1",
    name: "Task 1",
    status: 2,
    deadline: new Date("2024-10-01T00:00:00.000Z"),
    persons: [
      {
        id: "1",
        fullName: "John Doe",
        age: 30,
        skills: ["Developer"],
      },
      {
        id: "2",
        fullName: "Jane Smith",
        age: 28,
        skills: ["Designer"],
      },
    ],
  },
  {
    id: "2",
    name: "Task 2",
    status: 1,
    deadline: new Date("2024-10-05T00:00:00.000Z"),
    persons: [
      {
        id: "3",
        fullName: "Alice Johnson",
        age: 35,
        skills: ["Manager"],
      },
    ],
  },
  {
    id: "3",
    name: "Task 3",
    status: 2,
    deadline: new Date("2024-10-10T00:00:00.000Z"),
    persons: [
      {
        id: "4",
        fullName: "Bob Brown",
        age: 40,
        skills: ["Tester"],
      },
      {
        id: "5",
        fullName: "Charlie Davis",
        age: 25,
        skills: ["Developer"],
      },
    ],
  },
];
