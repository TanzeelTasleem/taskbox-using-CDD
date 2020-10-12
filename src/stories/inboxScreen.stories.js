import React from 'react'
import { Provider } from 'react-redux'
import { store } from '../app/store'
import {InboxScreen} from '../components/inboxscreen/inboxScreen'

export default {
    component : InboxScreen,
    title  : "inboxScreen",
    decorators: [story => <Provider store={store}>{story()}</Provider>], 
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
   loading : false ,
   error : false , 
}
export const InboxScreenStory=()=>{
    return <InboxScreen taskState={defaultargs}/>
}