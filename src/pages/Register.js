import CoverCarImg from "../assets/img/img_car_2.png";
import { Link } from "react-router-dom";

export default function Register() {
	return (
		<>
			<div className="wrapper">
				<div className="section__left">
					<img className="cover__img" src={CoverCarImg} alt="Cover Car" />
				</div>
				<div className="section__right">
					<div className="right__wrapper">
						<h1 className="right__title">Create New Account</h1>
						<form className="form__wrapper">
							<div className="onelabelinput__wrapper">
								<label className="label--custom">Email</label>
								<input className="input--custom" type="email" />
							</div>
							<div className="onelabelinput__wrapper">
								<label className="label--custom">Password</label>
								<input className="input--custom" type="password" />
							</div>
						</form>
						<button className="landing__btn">Sign Up</button>
						<Link to={`/login`}>
							<p className="redirect">Already have an account?</p>
							<p className="redirect">
								Login or register with Google Account here
							</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
