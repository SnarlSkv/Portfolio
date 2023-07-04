import React from 'react'

function Info() {
	return (
		<div className="about__info grid">
			<div className="about__box">
				<i className="bx bx-award about__icon"></i>
				<h3 className="about__title">Experians</h3>
				<span className="about__subtitle">1 years study</span>
			</div>

			<div className="about__box">
				<i className='bx bx-briefcase-alt about__icon'></i>
				<h3 className="about__title">Completed</h3>
				<span className="about__subtitle">3 + projects</span>
			</div>

			<div className="about__box">
				<i className='bx bx-support about__icon'></i>
				<h3 className="about__title">I dont know</h3>
				<span className="about__subtitle">Lorem ipsum dolor</span>
			</div>
		</div>
	)
}

export default Info
