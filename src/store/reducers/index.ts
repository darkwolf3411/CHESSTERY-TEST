import {combineReducers} from "redux";
import { cabinetReducer } from "./cabinetReducer";



export const rootReducer = combineReducers({
    cabinet: cabinetReducer 
})

export type RootState = ReturnType<typeof rootReducer>