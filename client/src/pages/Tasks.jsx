import { CircularProgress } from "@mui/material";
import React from "react";
import { FaList } from "react-icons/fa";
import Loading from "../components/Loader";

import { MdGridView } from "react-icons/md";
import { useParams } from "react-router-dom";
import Title from "../components/Title";

const Tabs = [
  { title: "Board View", icon: <MdGridView /> },
  { title: "List View", icon: <FaList /> },
];

const Task_type = {
  todo: "bg-blue-600",
  "in progress": "bg-yellow-600",
  completed: "bg-green-600",
};
const Tasks = () => {
  const [selected, setSelected] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const params = useParams();
  const status = params?.status ?? "";

  return loading ? (
    <div className="py-10">
      <Loading />
    </div>
  ) : (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <Title title={status ? `${status} Tasks` : "Tasks"} />
      </div>
    </div>
  );
};

export default Tasks;
