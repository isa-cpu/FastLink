import React from 'react';
import Slider from '../../components/slider/Slider';
import s from './Main.module.css';
function Main() {
	return (
		<div className={s.main}>
			<Slider />
		</div>
	);
}

export default Main;
