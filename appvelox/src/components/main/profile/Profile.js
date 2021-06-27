import React, { useEffect } from 'react';
import MainTemplate from '../mainTemplate/MainTemplate';
import Record from './record/Record';
import './profile.scss';
import ElectronicCard from './electronicCard/ElectronicCard';
import { Link } from 'react-router-dom';
import useHttp from '../../../hook/http.hook';
import { connect } from 'react-redux';
import { recordsSucces } from './../../../redux/actions/recordsAction';

const Profile = ({records, recordsSucces}) => {

    const {loading, error, response} = useHttp();

    useEffect(() => {
        
        response('/getrecords').then(res => recordsSucces(res))
        
    }, [])

    return (
        <MainTemplate title="Мой профиль">
            <div className="profile-section">
                <div className="record">
                    <Link to="/profile/myrecords" className="title">Записи на прием</Link>
                    <ul className="record-list">
                        {records.map((item, i) => i < 3 ? <Record key={item._id} info={item}/> : null)}
                        <span className="massage">{records.length >= 3 ? `Еще ${records.length - 3}`: 'Все'} записи <Link to="/profile/myrecords">Подробнее</Link></span>
                    </ul>
                </div>
                
                <ElectronicCard />
            </div>
        </MainTemplate>
    );
};

const mapStateToProps = (state) => {
    return {
        records: state.records.records,
    };
}

const mapDispathToProps = {
    recordsSucces,
}

export default connect(mapStateToProps, mapDispathToProps)(Profile);