import React from 'react'
import { Task } from '../components/task/task'
import { withKnobs, object } from '@storybook/addon-knobs';
export default {
    component: Task,
    title: 'task',
    decorators :[withKnobs]
}

const task = {
        id: "1",
        title  : "Task",
        pinned: false,
        archive: false
}

export const defaultTask = () => {
    return <Task {...task} />
}

export const pinnedTask = () => {
    const pinnedArgs = {
        ...task ,
        pinned  : true 
    }
    return <Task {...pinnedArgs} />
}

export const ArchiveTask = () => {
    const archiveArgs = {
            ...task,
            archive : true 
    }
    return <Task {...archiveArgs} />
}
export const longTitle =()=>{
    const longTitle = object("task" , {...task , title : "gfyegfewgfyewjgfuwegfjwegfjehgfjegfefehfehjgfewjfgejwhgfejhgfehjgfejyhfdusygfefw"})
    return <Task {...longTitle} />
}


