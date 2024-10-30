import React from "react";
import { FaList } from "react-icons/fa";
import Loading from "../components/Loader";

import { MdGridView } from "react-icons/md";
import { useParams } from "react-router-dom";
import Title from "../components/Title";
import Button from "../components/Button";
import { IoMdAdd } from "react-icons/io";
import Tabs from "../components/Tabs";
import TaskTitle from "../components/TaskTitle";
import BoardView from "../components/BoardView";
import { tasks } from "../assets/data";

const TABS = [
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
  const status = params?.status || "";

  return loading ? (
    <div className="py-10">
      <Loading />
    </div>
  ) : (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <Title title={status ? `${status} Tasks` : "Tasks"} />

        {status === "" && (
          <Button
            onClick={() => setOpen(true)}
            label="Create Task"
            icon={<IoMdAdd className="text-lg" />}
            className="flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5"
          />
        )}
      </div>

      <div>
        <Tabs tabs={TABS} setSelected={setSelected}>
          {!status && (
            <div className="w-full flex justify-between gap-4 md:gap-x-12 py-4 ">
              <TaskTitle label="A fazer " className={Task_type.todo} />
              <TaskTitle
                label="Em progresso"
                className={Task_type["in progress"]}
              />
              <TaskTitle label="Completadas" className={Task_type.completed} />
            </div>
          )}

          {selected === 0 ? <BoardView tasks={tasks} /> : <div></div>}
        </Tabs>
      </div>
    </div>
  );
};

export default Tasks;
