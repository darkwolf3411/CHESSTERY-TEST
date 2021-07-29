import { CabinetAction, CabinetActionTypes } from './../../type/Cabinet';
import {Dispatch} from "redux";
import axios from "axios";

// export const fetchTodos = () => {
//     return async (dispatch: Dispatch<CabinetAction>) => {
//         try {
//             dispatch({type: CabinetActionTypes.FETCH_USERS})
//             const response = await axios.get('/users')
//             setTimeout(() => {
//                 dispatch({type: CabinetActionTypes.FETCH_USERS_SUCCESS, payload: response.data})
//             }, 500)
//         } catch (e) {
//             dispatch({
//                 type: CabinetActionTypes.FETCH_USERS_ERROR,
//                 payload: 'Произошла ошибка при загрузке списка дел'
//             })
//         }
//     }
// }
export function setActiveStudents(id: string): CabinetAction {
    return {type: CabinetActionTypes.SET_ACTIVE_STUDENT, payload: id}
}
export function setSearchValue(value: string): CabinetAction {
    return {type: CabinetActionTypes.SET_SEARCH_VALUE, payload: value}
}
export function setViewingExercises(): CabinetAction {
    return {type: CabinetActionTypes.SET_VIENG_EXERVISES}
}