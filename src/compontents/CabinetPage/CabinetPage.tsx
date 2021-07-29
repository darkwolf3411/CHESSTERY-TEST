import React, { FC } from 'react'
import './CabinetPage.scss'
import { useTypedSelector } from '../../hooks/useTypedSelector'
import { useActions } from '../../hooks/useActions'

interface Student {
    id: string;
    name: string;
    avatar: string;
}

const CabinetPage: FC = () => {
    const { students,
        activeStudent,
        isViewingExercises,
        viewingExercisesLessonNumber,
        filtredSearchStudentsArr,
        searchValue } = useTypedSelector(store => store.cabinet)
    const { setActiveStudents,
        setisViewingExercises,
        setViewingExercisesLessonNumber,
        setFiltredArr,
        clearSearchValue,
    } = useActions()
    const setActiveStudentHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as Element;
        setActiveStudents(target.id)
        // onBlur={()=>clearSearchValue()}
        clearSearchValue()
    }
    const lessonClickHundler = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement;
        setisViewingExercises()
        setViewingExercisesLessonNumber(Number(target.id)) /// почему-то возвращает пустую стрку вместо id урока
    }
    const changeViewvingHandler = () => {
        if (isViewingExercises) {
            return setisViewingExercises()
        }
    }
    const searchHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchFilterArr: Student[] = filtredSearchStudentsArr
        setFiltredArr(e.target.value)
        if (e.target.value === '') {
            return setFiltredArr('')
        }
    }
    return (
        <div>
            <div className='cabinet-wrapper'>
                <div className='my-students__wrapper'>
                    <h1 className='my-students__title'>Мои ученики</h1>
                    <ul className='my-students__button-list'>
                        <li className='my-students__button-item'>Ученики</li>
                        <li className='my-students__button-item'>Группы</li>
                    </ul>
                    <div className='my-students__divider' />
                    <div className='control-panel__wrapper'>
                        <div className='control-panel__button-list'>
                            <button className='control-panel__button-add'>
                                <img src={require('./assets/Add-pupil-button-icon.svg').default} alt="add-student" />
                                <span className='control-panel__button-add__title'>Добавить ученика</span>
                            </button>
                            <button className='control-panel__button-add button-pink'>
                                <img src={require('./assets/Add-pupil-button-icon-pink.svg').default} alt="add-group" />
                                <span className='control-panel__button-add__title button-pink__title'>Создать группу</span>
                            </button>
                        </div>
                        <div className='control-panel__students-list'>
                            {students.slice(0, 8).map(student => {
                                return (
                                    <div
                                        key={student.id}
                                        className={activeStudent == student.id ?
                                            `control-panel__student-wrapper active-student` :
                                            `control-panel__student-wrapper`
                                        }>
                                        <img
                                            src={student.avatar}
                                            alt="avatar"
                                            onClick={setActiveStudentHandler}
                                            id={student.id} />
                                        <span>{student.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="control-panel__button-next">
                            <img src={require(`./assets/Vector.svg`).default} alt="button-next" />
                        </div>
                    </div>
                </div>
                <div className='progress-section__wrapper'>
                    <nav className='progress-section__navigatopn-panel-wrapper'>
                        <div className='progress-section__navigation-wrapper'>
                            <ul className='progress-section__button-list'>
                                <li className='progress-section__button-item'>Расписание</li>
                                <li onClick={changeViewvingHandler} className='progress-section__button-item'>Успеваемость</li>
                            </ul>
                            <div className='progress-section__divider' />
                        </div>
                        {isViewingExercises ?
                            <div className='progress-section__lesson-wrapper'>
                                <img src={require('./assets/Arrow-pink-right.svg').default} alt="arrow-right" />
                                <span>Урок {viewingExercisesLessonNumber + 1}</span>
                            </div>
                            : null}
                        {/* Доделать выпдающий список */}
                        {/* <nav>
                            <div className='progress-section__lessonsList-wrapper'>
                                <ul className='progress-section__lessonsList'>
                                    <li className='progress-section__list-item'>
                                        <img src={require('./assets/Homework-indication.svg').default} alt="Homework-indication" />
                                        <span>Домашние упражнения</span>
                                    </li>
                                    <li className='progress-section__list-item'>
                                        <img src={require('./assets/Homework-indication.svg').default} alt="Homework-indication" />
                                        <span>Все упражнения</span>
                                    </li>
                                    <li className='progress-section__list-item'>
                                        <img src={require('./assets/Homework-indication.svg').default} alt="Homework-indication" />
                                        <span>Классные упражнения</span>
                                    </li>
                                    <li className='progress-section__list-item'>
                                        <img src={require('./assets/Homework-indication.svg').default} alt="Homework-indication" />
                                        <span>Домашние упражнения</span>
                                    </li>
                                </ul>
                                <img src={require('./assets/Arrow.svg').default} alt="" />
                            </div>
                        </nav> */}
                        <div className='progress-section__search-wrapper'>
                            <img className='progress-section__search-wrapper__avatar' src={students[Number(activeStudent)].avatar} alt="student-avatar" />
                            <input className='progress-section__search-wrapper__search' value={searchValue} onFocus={searchHendler} onChange={searchHendler} placeholder={students[Number(activeStudent)].name} type="text" />
                            <img className={filtredSearchStudentsArr === [] ?
                                `progress-section__arrow` :
                                `progress-section arrow-active`} src={require('./assets/Arrow.svg').default} alt="" />
                        </div>
                        {filtredSearchStudentsArr !== [] ?
                            <div className='progress-section__filterd-list'>
                                {filtredSearchStudentsArr.map(el => {
                                    return (
                                        <div key={el.id} className='progress-section__filtred-element'>
                                            <img className='progress-section__search-wrapper__avatar' src={el.avatar} alt="student-avatar" />
                                            <span id={el.id} onClick={setActiveStudentHandler}>{el.name}</span>
                                        </div>
                                    )
                                })}
                            </div>
                            : null}
                    </nav>
                    <div className="progress-section__table">
                        {isViewingExercises ?
                            <table className="progress-section__table-wrapper">
                                <thead>
                                    <tr className="progress-section__table-head">
                                        <th>№</th>
                                        <th>Название упражнения</th>
                                        <th>Пользовался решением</th>
                                        <th>Брал подсказку</th>
                                        <th>Ошибок</th>
                                        <th>Неточности</th>
                                        <th>Потречаенное время</th>
                                        <th>Заработано террикоинов</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students[Number(activeStudent)].lessons[viewingExercisesLessonNumber].exercises.map(exercise => {
                                        return (
                                            <tr key={exercise.id} className="progress-section__table-body">
                                                <td>{Number(exercise.id) + 1}</td>
                                                <td>{exercise.nameOfexercise}</td>
                                                <td>{exercise.isUsedSolution ? 'да' : 'нет'}</td>
                                                <td>{exercise.isUsedHints ? 'да' : 'нет'}</td>
                                                <td>{exercise.errors}</td>
                                                <td>{exercise.inaccuracies}</td>
                                                <td>{exercise.timeSpent}</td>
                                                <td>{exercise.terrikoins}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table> :
                            <table className="progress-section__table-wrapper">
                                <thead>
                                    <tr className="progress-section__table-head">
                                        <th>№</th>
                                        <th>Название урока</th>
                                        <th>Упражнений в уроке</th>
                                        <th>Упражнений выполнено</th>
                                        <th>Ошибок</th>
                                        <th>Неточности</th>
                                        <th>Потречаенное время</th>
                                        <th>Заработано террикоинов</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students[Number(activeStudent)].lessons.map(lesson => {
                                        const numb = 0
                                        return (
                                            <tr key={lesson.id} id={lesson.id} onClick={lessonClickHundler} className="progress-section__table-body">
                                                <td>{Number(lesson.id) + 1}</td>
                                                <td>{lesson.nameOflesson}</td>
                                                <td>{lesson.countOfExercises}</td>
                                                <td>{lesson.countIsReadyExercises}</td>
                                                <td>{lesson.exercises[numb].errors}</td>
                                                <td>{lesson.exercises[numb].inaccuracies}</td>
                                                <td>{lesson.exercises[numb].timeSpent}</td>
                                                <td>{lesson.exercises[numb].terrikoins}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CabinetPage
