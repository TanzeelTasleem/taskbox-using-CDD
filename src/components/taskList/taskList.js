import React from "react";
import { Task } from "../task/task";
import Skeleton from "@material-ui/lab/Skeleton";
import { Box } from "@material-ui/core";

export const TaskList = ({ tasks: { task, loading } }) => {
  const taskitems  = [
      ...task.filter((item)=> item.pinned === true),
      ...task.filter((item)=> item.pinned === false),
  ]
  if (loading) {
    return (
      <div>
        <Skeleton />
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    );
  }
  if (task.length == 0 ){
       return (
           <Box display="flex" fontSize="25px" justifyContent="center" alignItems="center">
               no task in taskbox
           </Box>
       )
  }
  return (
    <div>
      {taskitems.map((obj) => {
        return <Task {...obj} />;
      })}
    </div>
  );
};
