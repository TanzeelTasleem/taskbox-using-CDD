import React, { useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./task.css";

export const Task = ({ pinned, archive, title }) => {
  const [isPinned , setIsPinned] = useState(pinned)
  const [isArchive , setIsArchive] = useState(archive)
  return (
    <div id="main">
      <div className="task-item">
        <input
          disabled={true}
          type="checkbox"
          checked = {isArchive ? true : false}
          onChange = {()=>{setIsArchive(!isArchive)}}
        />
        <label id="label">{title}</label>
      </div>
      {!isArchive && <div>{isPinned ? <StarIcon /> : <StarBorderIcon />}</div>}
    </div>
  );
};
