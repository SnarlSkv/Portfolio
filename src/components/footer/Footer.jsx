import React from 'react'
import './footer.css'

function Footer() {
	return (
		<footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">Serhii</h1>
				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">About</a>
					</li>
					<li>
						<a href="#portfolio" className="footer__link">Projects</a>
					</li>
				</ul>

				<div className="footer__social">
				<a href="" className="footer__social-link" target="_blank">
					<i className="bx bxl-facebook"></i>
				</a>
				<a href="" className="footer__social-link" target="_blank">
					<i className="bx bxl-instagram"></i>
				</a>
				</div>
				<span className="footer__copy">
					&#169; Serhii Kuzub. All rigths reserved
				</span>
			</div>
		</footer>
	)
}

export default Footer
