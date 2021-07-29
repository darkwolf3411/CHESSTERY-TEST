import React, { FC } from 'react'
import './CabinetPage.scss'
import avatar from './assets/mad-scientist.svg'
const CabinetPage: FC = () => {
    const students = [
        {
            id: 1,
            name: 'Алексей',
            avatar: avatar
        },
        {
            id: 2,
            name: 'Константин',
            avatar: avatar
        },
        {
            id: 3,
            name: 'Александр',
            avatar: avatar
        },
        {
            id: 4,
            name: 'Ирина',
            avatar: avatar
        },
        {
            id: 5,
            name: 'Илья',
            avatar: avatar
        },
        {
            id: 6,
            name: 'Никита',
            avatar: avatar
        },
        {
            id: 7,
            name: 'Артур',
            avatar: avatar
        },
        {
            id: 8,
            name: 'Никита',
            avatar: avatar
        },
        {
            id: 9,
            name: 'Ирина',
            avatar: avatar
        },
    ]
    const sortArrStudents = students.sort((a, b) => a.name.localeCompare(b.name))
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
                            {sortArrStudents.slice(0, 8).map(student => {
                                return (
                                    <div key={student.id} className='control-panel__student-wrapper'>
                                        <img src={student.avatar} alt="avatar" />
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
                                <li className='progress-section__button-item'>Успеваемость</li>
                            </ul>
                            <div className='progress-section__divider' />
                        </div>
                        {/* Сделать выпдающий список */}
                        {/* <nav>
                        <div className='progress-section__lessonsList-wrapper'>
                            <ul className='progress-section__lessonsList'>
                                <li className='progress-section__list-item'>Все упражнения</li>
                                <li className='progress-section__list-item'>Классные упражнения</li>
                                <li className='progress-section__list-item'>Домашние упражнения</li>
                            </ul>
                            <img src={require('./assets/Arrow.svg').default} alt="" />
                        </div>
                    </nav> */}
                        <div className='progress-section__search-wrapper'>
                            <img className='progress-section__search-wrapper__avatar' src={sortArrStudents[0].avatar} alt="student-avatar" />
                            <input className='progress-section__search-wrapper__search' value={sortArrStudents[0].name} type="text" />
                            <img className='progress-section__arrow' src={require('./assets/Arrow.svg').default} alt="" />
                        </div>
                    </nav>
                    <table className="iksweb">
                        <thead>
                            <tr>
                                <td>№</td>
                                <td>Название урока</td>
                                <td>Упражнений в уроке</td>
                                <td>Упражнений выполнено</td>
                                <td>Ошибок</td>
                                <td>Неточности</td>
                                <td>Потречаенное время</td>
                                <td>Заработано террикоинов</td>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CabinetPage
