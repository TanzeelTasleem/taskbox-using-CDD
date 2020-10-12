import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    task: [
      {
        id: "1",
        title: "Task",
        pinned: false,
        archive: false,
      },
      {
        id: "1",
        title: "Task",
        pinned: false,
        archive: false,
      },
      {
        id: "1",
        title: "Task(archive)",
        pinned: false,
        archive: true,
      },
      {
        id: "1",
        title: "Task (pinned)",
        pinned: true,
        archive: false,
      },
    ],
    loading: false,
  },
  reducers: {
    isPinned: (state, action) => {
      state.task[action.payload.index].pinned = true;
    },
    isArchived: (state, action) => {
      state.task[action.payload.index].archive = true;
    },
    unPinned: (state, action) => {
      state.task[action.payload.index].pinned = false;
    },
    unArchive: (state, action) => {
      state.task[action.payload.index].archive = false;
    },
  },
});
export const { isPinned, isArchived, unPinned, unArchive } = taskSlice.actions;
export default taskSlice.reducer;
export const GET_STATE = (state) => state