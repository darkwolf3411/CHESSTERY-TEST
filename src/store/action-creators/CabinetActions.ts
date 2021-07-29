import { CabinetAction, CabinetActionTypes } from './../../type/Cabinet';
import {Dispatch} from "redux";
import axios from "axios";

// export const fetchProgress = () => {
//     return async (dispatch: Dispatch<CabinetAction>) => {
//         try {
//             dispatch({type: CabinetActionTypes.FETCH_PROGRESS})
//             const response = await axios.get('/users')
//             setTimeout(() => {
//                 dispatch({type: CabinetActionTypes.FETCH_PROGRESS_SUCCESS, payload: response.data})
//             }, 500)
//         } catch (e) {
//             dispatch({
//                 type: CabinetActionTypes.FETCH_PROGRESS_ERROR,
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
export function setisViewingExercises(): CabinetAction {
    return {type: CabinetActionTypes.SET_VIENG_EXERVISES}
}
export function setViewingExercisesLessonNumber(number: number): CabinetAction {
    return {type: CabinetActionTypes.SET_VIENG_EXERVISES_LESSON_NUMBER, payload: number}
}
export function setFiltredArr(name: string): CabinetAction {
    return {type: CabinetActionTypes.SET_SEARCH_VALUE, payload: name}
}
export function clearSearchValue(): CabinetAction {
    return {type: CabinetActionTypes.CLEAR_SEARCH_VALUE}
}