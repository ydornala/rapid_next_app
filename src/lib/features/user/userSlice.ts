import { createSlice } from "@reduxjs/toolkit";
import { userData } from "./constants";

let initialState = {};

const userSlice = createSlice({
  name: "user",
  reducers: {},
  initialState: initialState,
});

export const {} = userSlice.actions;

export default userSlice;
