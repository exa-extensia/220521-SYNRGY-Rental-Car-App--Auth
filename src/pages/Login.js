import CoverCarImg from "../assets/img/img_car_2.png";
import { Link } from "react-router-dom";

export default function Login() {
	return (
		<>
			<div className="wrapper">
				<div className="section__left">
					<img className="cover__img" src={CoverCarImg} alt="Cover Car" />
				</div>
				<div className="section__right">
					<div className="right__wrapper">
						<h1 className="right__title">Welcome!</h1>
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
						<button className="landing__btn">Sign In</button>
						<button className="google__btn">Login with Google</button>
						<Link to={`/`}>
							<p className="redirect">or register here</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
