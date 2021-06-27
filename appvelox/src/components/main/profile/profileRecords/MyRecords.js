import React from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import ru from "@fullcalendar/core/locales/ru";
import Record from '../record/Record';
import './myrecords.scss'
import MainTemplate from '../../mainTemplate/MainTemplate';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const MyRecords = ({records}) => {
    const nowDate = new Date()

    const dateClick = (arg) => {
        console.log(arg, 1);
    }

    return (
        <MainTemplate title="Мой профиль" >
            <div className="myrecords-wrapper">
                <div className="records-main">
                    <div className="nav">
                        <Link to="/profile" className="back"><img src="./../img/icon/profile/arrow-back.svg" alt="Назад"/>&nbsp;Мои записи</Link>
                        <span className="massage">{true ? null: 'Показать все записи'}</span>
                    </div>
                    <ul className="record-list">
                        {records.map(item => <Record info={item} />)}
                    </ul>
                </div>
                <div className="calendar">
                    <FullCalendar
                        plugins={[ dayGridPlugin, interactionPlugin ]}
                        initialView="dayGridMonth"
                        events={[
                            {date: nowDate, title: 2}
                        ]}
                        dateClick={dateClick}
                        locale={ru}
                        validRange={
                            {
                                start: nowDate,
                            }
                        }
                        height={700}
                        headerToolbar={
                            {
                                start: 'prev',
                                center: 'title',
                                end: 'next',
                            }
                        }
                    />
                </div>
            </div>
        </MainTemplate>
    );
};

const mapStateToProps = (state) => {
    return {
        records: state.records.records,
    };
}

export default connect(mapStateToProps, null)(MyRecords);