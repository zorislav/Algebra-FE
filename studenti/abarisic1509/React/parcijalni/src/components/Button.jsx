/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

const Button = ({
	isLink,
	linkHref,
	targetBlank,
	isDisabled,
	handleClick,
	additionalClassname,
	children,
}) => {
	const btnClasses =
		"w-full cursor-pointer bg-slate-800 px-6 py-3 text-2xl font-medium uppercase text-white hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-60";

	if (isLink) {
		return (
			<Link
				to={linkHref}
				target={targetBlank ? "_blank" : "_parent"}
				rel={targetBlank ? "noreferrer" : ""}
				className={`${btnClasses} ${additionalClassname}`}
			>
				{children}
			</Link>
		);
	}
	return (
		<button
			disabled={isDisabled}
			onClick={handleClick}
			className="w-full cursor-pointer bg-slate-800 px-6 py-3 text-2xl font-medium uppercase text-white hover:bg-slate-950 disabled:cursor-not-allowed disabled:opacity-60"
		>
			{children}
		</button>
	);
};

export default Button;
