import { list, check, todo, home, userx } from "./icons";

const menu = [
  {
    id: 1,
    title: "All Tasks",
    icon: home,
    link: "/",
  },
  {
    id: 2,
    title: "Important!",
    icon: list,
    link: "/important",
  },
    {
    id: 3,
    title: "In Progress",
    icon: todo,
    link: "/incomplete",
  },
  {
    id: 4,
    title: "Unassigned",
    icon: userx,
    link: "/unassigned",
  },
  {
    id: 5,
    title: "Completed!",
    icon: check,
    link: "/completed",
  },
];

export default menu;