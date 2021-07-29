import { CabinetState, CabinetAction, CabinetActionTypes } from './../../type/Cabinet';


const initialState: CabinetState = {
    students: [
        {
            id: '0',
            avatar: (require('../../compontents/CabinetPage/assets/mad-scientist.svg').default),
            name: 'Константин',
            lessons: [
                {
                    id: '0',
                    nameOflesson: 'Урок 1',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '1',
                    nameOflesson: 'Урок 2',
                    countOfExercises: 30,
                    countIsReadyExercises: 25,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '2',
                    nameOflesson: 'Урок 3',
                    countOfExercises: 60,
                    countIsReadyExercises: 14,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '3',
                    nameOflesson: 'Урок 4',
                    countOfExercises: 58,
                    countIsReadyExercises: 58,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '4',
                    nameOflesson: 'Урок 5',
                    countOfExercises: 42,
                    countIsReadyExercises: 21,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '5',
                    nameOflesson: 'Урок 6',
                    countOfExercises: 99,
                    countIsReadyExercises: 24,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '6',
                    nameOflesson: 'Урок 7',
                    countOfExercises: 53,
                    countIsReadyExercises: 32,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
            ],
        },
        {
            id: '1',
            avatar: (require('../../compontents/CabinetPage/assets/mad-scientist.svg').default),
            name: 'Алексей',
            lessons: [
                {
                    id: '0',
                    nameOflesson: 'Урок 1',
                    countOfExercises: 52,
                    countIsReadyExercises: 42,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 13,
                            inaccuracies: 4,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 32,
                            inaccuracies: 43,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 23,
                            inaccuracies: 21,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 65,
                            inaccuracies: 43,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 65,
                            inaccuracies: 43,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '1',
                    nameOflesson: 'Урок 2',
                    countOfExercises: 213,
                    countIsReadyExercises: 23,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '2',
                    nameOflesson: 'Урок 3',
                    countOfExercises: 40,
                    countIsReadyExercises: 20,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '3',
                    nameOflesson: 'Урок 4',
                    countOfExercises: 30,
                    countIsReadyExercises: 10,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '4',
                    nameOflesson: 'Урок 5',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '5',
                    nameOflesson: 'Урок 6',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '6',
                    nameOflesson: 'Урок 7',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
            ],
        },
        {
            id: '2',
            avatar: (require('../../compontents/CabinetPage/assets/mad-scientist.svg').default),
            name: 'Ирина',
            lessons: [
                {
                    id: '0',
                    nameOflesson: 'Урок 1',
                    countOfExercises: 50,
                    countIsReadyExercises: 30,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 31,
                            inaccuracies: 32,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 23,
                            inaccuracies: 12,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 21,
                            inaccuracies: 24,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 24,
                            inaccuracies: 12,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '1',
                    nameOflesson: 'Урок 2',
                    countOfExercises: 64,
                    countIsReadyExercises: 43,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '2',
                    nameOflesson: 'Урок 3',
                    countOfExercises: 21,
                    countIsReadyExercises: 10,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '3',
                    nameOflesson: 'Урок 4',
                    countOfExercises: 53,
                    countIsReadyExercises: 23,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '4',
                    nameOflesson: 'Урок 5',
                    countOfExercises: 87,
                    countIsReadyExercises: 54,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '5',
                    nameOflesson: 'Урок 6',
                    countOfExercises: 43,
                    countIsReadyExercises: 32,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '6',
                    nameOflesson: 'Урок 7',
                    countOfExercises: 98,
                    countIsReadyExercises: 65,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
            ],
        },
        {
            id: '3',
            avatar: (require('../../compontents/CabinetPage/assets/mad-scientist.svg').default),
            name: 'Александр',
            lessons: [
                {
                    id: '0',
                    nameOflesson: 'Урок 1',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '1',
                    nameOflesson: 'Урок 2',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '2',
                    nameOflesson: 'Урок 3',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '3',
                    nameOflesson: 'Урок 4',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '4',
                    nameOflesson: 'Урок 5',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '5',
                    nameOflesson: 'Урок 6',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '6',
                    nameOflesson: 'Урок 7',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
            ],
        },
        {
            id: '4',
            avatar: (require('../../compontents/CabinetPage/assets/mad-scientist.svg').default),
            name: 'Илья',
            lessons: [
                {
                    id: '0',
                    nameOflesson: 'Урок 1',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '1',
                    nameOflesson: 'Урок 2',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '2',
                    nameOflesson: 'Урок 3',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '3',
                    nameOflesson: 'Урок 4',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '4',
                    nameOflesson: 'Урок 5',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '5',
                    nameOflesson: 'Урок 6',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '6',
                    nameOflesson: 'Урок 7',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
            ],
        },
        {
            id: '5',
            avatar: (require('../../compontents/CabinetPage/assets/mad-scientist.svg').default),
            name: 'Никита',
            lessons: [
                {
                    id: '0',
                    nameOflesson: 'Урок 1',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '1',
                    nameOflesson: 'Урок 2',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '2',
                    nameOflesson: 'Урок 3',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '3',
                    nameOflesson: 'Урок 4',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '4',
                    nameOflesson: 'Урок 5',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '5',
                    nameOflesson: 'Урок 6',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '6',
                    nameOflesson: 'Урок 7',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
            ],
        },
        {
            id: '6',
            avatar: (require('../../compontents/CabinetPage/assets/mad-scientist.svg').default),
            name: 'Артур',
            lessons: [
                {
                    id: '0',
                    nameOflesson: 'Урок 1',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '1',
                    nameOflesson: 'Урок 2',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '2',
                    nameOflesson: 'Урок 3',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '3',
                    nameOflesson: 'Урок 4',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '4',
                    nameOflesson: 'Урок 5',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '5',
                    nameOflesson: 'Урок 6',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '6',
                    nameOflesson: 'Урок 7',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
            ],
        },
        {
            id: '7',
            avatar: (require('../../compontents/CabinetPage/assets/mad-scientist.svg').default),
            name: 'Никита',
            lessons: [
                {
                    id: '0',
                    nameOflesson: 'Урок 1',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '1',
                    nameOflesson: 'Урок 2',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '2',
                    nameOflesson: 'Урок 3',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '3',
                    nameOflesson: 'Урок 4',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '4',
                    nameOflesson: 'Урок 5',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '5',
                    nameOflesson: 'Урок 6',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '6',
                    nameOflesson: 'Урок 7',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
            ],
        },
        {
            id: '8',
            avatar: (require('../../compontents/CabinetPage/assets/mad-scientist.svg').default),
            name: 'Артур',
            lessons: [
                {
                    id: '0',
                    nameOflesson: 'Урок 1',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '1',
                    nameOflesson: 'Урок 2',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '2',
                    nameOflesson: 'Урок 3',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '3',
                    nameOflesson: 'Урок 4',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '4',
                    nameOflesson: 'Урок 5',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '5',
                    nameOflesson: 'Урок 6',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
                {
                    id: '6',
                    nameOflesson: 'Урок 7',
                    countOfExercises: 100,
                    countIsReadyExercises: 90,
                    exercises: [
                        {
                            id: '0',
                            nameOfexercise: 'Упражнение 1',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '1',
                            nameOfexercise: 'Упражнение 2',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '2',
                            nameOfexercise: 'Упражнение 3',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                        {
                            id: '3',
                            nameOfexercise: 'Упражнение 4',
                            isUsedSolution: false,
                            isUsedHints: true,
                            errors: 33,
                            inaccuracies: 16,
                            timeSpent: '100 мин',
                            terrikoins: 1000
                        },
                    ]
                },
            ],
        },
    ],
    error: null,
    loading: false,
    activeStudent: '0',
    searchValue: '',
    isViewingExercises: false,
    viewingExercisesLessonNumber: 0,
    filtredSearchStudentsArr: [],
}

export const cabinetReducer = (state = initialState, action: CabinetAction): CabinetState => {
    switch (action.type) {
        case CabinetActionTypes.FETCH_PROGRESS:
            return{
                ...state,
                loading: true
            }
        case CabinetActionTypes.FETCH_PROGRESS_SUCCESS:
            return{
                ...state,
                loading: false,
                students: action.payload
            }
        case CabinetActionTypes.FETCH_PROGRESS_ERROR:
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        case CabinetActionTypes.SET_VIENG_EXERVISES:
            return{
                ...state,
                isViewingExercises: !state.isViewingExercises
            }
        case CabinetActionTypes.SET_SEARCH_VALUE:
            return{
                ...state,
                searchValue: action.payload,
                filtredSearchStudentsArr: state.students.filter(student => student.name.includes(action.payload))
            }
            case CabinetActionTypes.CLEAR_SEARCH_VALUE:
                return{
                    ...state,
                    searchValue: '',
                    filtredSearchStudentsArr: [],
                }
        case CabinetActionTypes.SET_ACTIVE_STUDENT:
            return{
                ...state,
                activeStudent: action.payload
            }
        case CabinetActionTypes.SET_SEARCH_VALUE:
            return{
                ...state,
                searchValue: action.payload
            }
        default:
            return state;
    }
}