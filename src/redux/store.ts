import { createStore } from "redux";
import { Reducer } from "./Reducer/Reducer";

export const Store = createStore(Reducer);