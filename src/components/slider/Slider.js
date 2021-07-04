import React, { useState } from 'react';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import s from './Slider.module.css';
function Slider() {
	let [slideInd, setSlideInd] = useState(1);
	const nextSlide = (index) => {
		if (slideInd !== 5) {
			setSlideInd(index);
		} else if (slideInd === 5) {
			setSlideInd(1);
		}
	};
	const prevSlide = (index) => {
		if (slideInd !== 1) {
			setSlideInd(index);
		} else if (slideInd === 1) {
			setSlideInd(5);
		}
	};
	const moveDot = (index) => {
		setSlideInd(index);
	};
	return (
		<div className={s.container}>
			<div className={s.imageContainer}>
				{Array.from({ length: 5 }).map((obj, index) => (
					<div className={slideInd === index + 1 ? `${s.slide} ${s.active_slide}` : s.slide} key={index}>
						<img src={process.env.PUBLIC_URL + `Imgs/img${index + 1}.jpg`} alt="rass" className={s.img} />
						<div className={`${s.r_icon} ${s.right}`} onClick={() => nextSlide(slideInd + 1)}>
							<HiArrowNarrowRight size={19} />
						</div>
						<div className={`${s.r_icon} ${s.left}`} onClick={() => prevSlide(slideInd - 1)}>
							<HiArrowNarrowLeft size={19} />
						</div>
						<div className={s.dotContainer}>
							{Array.from({ length: 5 }).map((obj, index) => (
								<div
									key={index}
									onClick={() => moveDot(index + 1)}
									className={slideInd === index + 1 ? `${s.dot} ${s.active}` : s.dot}
								></div>
							))}
						</div>
					</div>
				))}
			</div>
			<div className={s.rightImage}>
				<img src="https://frankotrading.com/img/cms/delivery%20.jpg" alt="saldk" />
				<img src="https://frankotrading.com/img/cms/Desktop-nd-Tablet_1.jpg" alt="saldk" />
			</div>
		</div>
	);
}

export default Slider;
