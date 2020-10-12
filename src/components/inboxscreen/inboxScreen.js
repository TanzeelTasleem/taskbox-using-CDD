import React from 'react'
import { useSelector } from 'react-redux'
import { GET_STATE } from '../../features/taskSlice'
import { TaskList } from '../taskList/taskList'

export const InboxScreen = ({error}) => {
    const taskState = useSelector(GET_STATE)
    if(error){
       return <h1>error occurs </h1>
    }
    return (
        <div>
            <h1>Task Box</h1>
             <TaskList tasks={taskState}/>
        </div>
    )
}
