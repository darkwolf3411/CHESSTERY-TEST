interface ILessons {
    id: string,
    nameOflesson: string,
    countOfExercises: number,
    countIsReadyExercises: number,
    exercises: IExercises[],
}
interface IExercises {
    id: string,
    nameOfexercise: string,
    isUsedSolution: boolean,
    isUsedHints: boolean,
    errors: number,
    inaccuracies: number,
    timeSpent: string,
    terrikoins: number,
}
interface IStudent {
    id: string,
    name: string,
    avatar: string,
    lessons: ILessons[],
}
interface FetchUsersAction {
    type: CabinetActionTypes.FETCH_USERS,
}
interface FetchUsersSuccessAction {
    type: CabinetActionTypes.FETCH_USERS_SUCCESS,
    payload: IStudent[]
}
interface FetchUsersErrorAction {
    type: CabinetActionTypes.FETCH_USERS_ERROR,
    payload: string,
}
interface setSearchValue {
    type: CabinetActionTypes.SET_SEARCH_VALUE,
    payload: string,
}
interface setActiveStudent {
    type: CabinetActionTypes.SET_ACTIVE_STUDENT,
    payload: string,
}
interface setViewingExercieses {
    type: CabinetActionTypes.SET_VIENG_EXERVISES,
}
export interface CabinetState {
    activeStudent: string,
    searchValue: string,
    students: IStudent[]
    loading: boolean,
    error: null | string,
    viewingExercises: boolean,
}
export enum CabinetActionTypes {
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_FETCH_USERS_ERROR',
    SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
    SET_ACTIVE_STUDENT = 'SET_ACTIVE_STUDENT',
    SET_VIENG_EXERVISES = 'SET_VIENG_EXERVISES',
}
export type CabinetAction = FetchUsersAction | FetchUsersErrorAction | FetchUsersSuccessAction | setSearchValue | setActiveStudent | setViewingExercieses