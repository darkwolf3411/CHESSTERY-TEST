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
    type: CabinetActionTypes.FETCH_PROGRESS,
}
interface FetchUsersSuccessAction {
    type: CabinetActionTypes.FETCH_PROGRESS_SUCCESS,
    payload: IStudent[]
}
interface FetchUsersErrorAction {
    type: CabinetActionTypes.FETCH_PROGRESS_ERROR,
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
interface setViewingExerciesesLessonNumber {
    type: CabinetActionTypes.SET_VIENG_EXERVISES_LESSON_NUMBER,
    payload: number
}
interface clearSearchValue {
    type: CabinetActionTypes.CLEAR_SEARCH_VALUE,
}
export interface CabinetState {
    activeStudent: string,
    searchValue: string,
    students: IStudent[]
    loading: boolean,
    error: null | string,
    viewingExercisesLessonNumber: number;
    isViewingExercises: boolean,
    filtredSearchStudentsArr: IStudent[];
}
export enum CabinetActionTypes {
    FETCH_PROGRESS = 'FETCH_PROGRESS',
    FETCH_PROGRESS_SUCCESS = 'FETCH_PROGRESS_SUCCESS',
    FETCH_PROGRESS_ERROR = 'FETCH_PROGRESS_FETCH_PROGRESS_ERROR',
    SET_SEARCH_VALUE = 'SET_SEARCH_VALUE',
    CLEAR_SEARCH_VALUE = 'CLEAR_SEARCH_VALUE',
    SET_ACTIVE_STUDENT = 'SET_ACTIVE_STUDENT',
    SET_VIENG_EXERVISES = 'SET_VIENG_EXERVISES',
    SET_VIENG_EXERVISES_LESSON_NUMBER = 'SET_VIENG_EXERVISES_LESSON_NUMBER',
}
export type CabinetAction = FetchUsersAction |
    FetchUsersErrorAction |
    FetchUsersSuccessAction |
    setSearchValue |
    setActiveStudent |
    setViewingExercieses |
    setViewingExerciesesLessonNumber | 
    clearSearchValue