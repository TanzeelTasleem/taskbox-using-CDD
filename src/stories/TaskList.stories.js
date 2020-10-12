import React from 'react'
import {withKnobs , object} from '@storybook/addon-knobs'
import {TaskList} from '../components/taskList/taskList'
export default {
    component : TaskList, 
    title : "TaskList",
    decorators: [withKnobs] 
}

const defaultargs = {
    task:[{
        id: "1",
        title  : "Task",
        pinned: false,
        archive: false
    },
    {
        id: "1",
        title  : "Task",
        pinned: false,
        archive: false
    },
    {
        id: "1",
        title  : "Task",
        pinned: false,
        archive: false
    },
    {
        id: "1",
        title  : "Task",
        pinned: false,
        archive: false
    }
],
   loading : false 
}

export const Tasklist = () =>{
 return <TaskList tasks={defaultargs} />
}
export const pinnedTaskList=()=>{
    const pinnedArgs = {
         task :[
             ...defaultargs.task.slice(0,3),
             {title : "Task" , id : "4" ,pinned : true , archive : false }
         ],
         ...defaultargs.loading
    }
    return <TaskList tasks={pinnedArgs}/>
}

export const archiveTaskList =()=>{
    const archiveArgs = {
        task : [
            ...defaultargs.task.slice(0,3),
            {title : "Task Archive" , id :"4" , pinned:false , archive : true}
        ],
        ...defaultargs.loading
    }
    return <TaskList tasks={archiveArgs} />
}

export const loadingList=()=>{
    const loadingArgs = {
         task :[...defaultargs.task],
         loading : true
    }
    return <TaskList tasks={loadingArgs} />
}
export const empthyList=()=>{
    const empthyArgs={
        task : [],
        loading : false ,
    }
    return <TaskList tasks={empthyArgs}/>
}