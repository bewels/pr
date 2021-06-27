import React, { useEffect, useCallback } from 'react';
import MainTemplate from './../mainTemplate/MainTemplate';
import { connect } from 'react-redux';
import { doctorsSucces } from './../../../redux/actions/doctorsAction';
import Doctor from './doctor/doctor';
import './doctors.scss';
import useHttp from '../../../hook/http.hook';


const Doctors = ({doctorsSucces, doctors}) => {

	const {loading, error, response} = useHttp();

	useEffect(useCallback(() => {

		const res = response('/doctor');

		res.then(res => doctorsSucces(res));

	}), [doctorsSucces]);

	const createRecord = (e, date, doctorId) => {

		e.preventDefault();

		const newDate = new Date(date);

		const data = {date: newDate, doctorId};

		response('/createrecord', 'POST', data);
	}
	
	if(loading) {
		return <h1>Загрузка...</h1>
	}

	if(error) {
		return <h1>{error}</h1>
	}

	return (
		<MainTemplate title={'Врачи и клиники'}>
			<div className="doctors-wrapper">
				<ul className="doctors-list">
					{doctors.map(item => <Doctor createRecord={createRecord} key={item._id} info={item} />)}
				</ul>
			</div>
		</MainTemplate>
	);
};

const mapStateToProps = (state) => {

	return {
		doctors: state.doctors.doctors
	};

};

const mapDispathToProps = {
    doctorsSucces,
};

export default connect(mapStateToProps, mapDispathToProps)(Doctors);