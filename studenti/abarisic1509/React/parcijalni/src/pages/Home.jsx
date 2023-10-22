import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../lib/store/slices/userSlice";

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch()
	const [formData, setformData] = useState({ username: "" });
	const [isFocused, setIsFocused] = useState(false);
	const [error, setError] = useState(null);
	const [submitting, setSubmitting] = useState(false);


	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setformData((prev) => ({ ...prev, [name]: value }));
	};

	const handleInputFocus = () => {
		setIsFocused(true);
	};

	const handleInputBlur = () => {
		setIsFocused(false);
		// for handling username error msg
		if(Object.values(formData).some(value => value === "")) {
			setError("Mandatory fields cannot be empty");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSubmitting(true);
		if(Object.values(formData).some(value => value === "")) {
			setError("Mandatory fields cannot be empty");
		} else {
			try {
				const res = await fetch(
					`https://api.github.com/users/${formData.username}`
				);
				const data = await res.json();
				if (res.ok) {
					dispatch(setUser({
						name: data.name,
						bio: data.bio,
						avatarUrl: data.avatar_url,
						location: data.location
					}))
					// if user exists, navigate to user details page
					navigate(`/${data.login}`);
				} else {
					toast.error(
						"Something went wrong. Pelase refresh teh page and try again"
					);
				}
			} catch (error) {
				console.log("error", error);
				toast.error(
					"Something went wrong. Pelase refresh teh page and try again"
				);
			}

		}

		setSubmitting(false);
	};

	return (
		<main className="flex min-h-screen w-full flex-col items-center justify-center gap-10 px-6 py-10 md:px-10 xl:px-20">
			<h1 className=" text-5xl font-bold leading-snug">
				Search for GitHub users
			</h1>

			<form
				onSubmit={handleSubmit}
				className="flex w-full max-w-2xl flex-col gap-10 border border-slate-900 bg-neutral-200 p-4 md:p-10"
			>
			{error && <p className=" text-xl font-medium text-center text-red-500">{error}</p>}

				<label htmlFor="username" className="flex flex-col gap-1">
					<span>GitHub username</span>
					<input
						type="text"
						id="username"
						name="username"
						value={formData.username}
						onFocus={handleInputFocus}
						onBlur={handleInputBlur}
						onChange={handleInputChange}
						placeholder="e.g. facebook"
						className={`w-full border px-6 py-2 outline-none ${
							isFocused ? "border-green-500" : ""
						}  ${error ? "border-red-500" : ""}`}
					/>
					
				</label>

				<Button isDisabled={submitting}>Go</Button>
			</form>
		</main>
	);
};

export default Home;
