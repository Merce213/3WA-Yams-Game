import { useState } from "react";
import { useVerifyCredentialsMutation } from "../features/auth";
import { useNavigate } from "react-router-dom";
import StatusMessageModal from "../components/StatusMessageModal";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [verifyCredentials] = useVerifyCredentialsMutation();
	const navigate = useNavigate();
    const [modal, setModal] = useState({ message: "", type: "", visible: false});

	const handleChange = (e) => {
		const { name, value } = e.target;
		if (name === "email") {
			console.log(value)
			setEmail(value);
		} else if (name === "password") {
			setPassword(value);
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log(email, password)
		if (!email || !password) {
			setModal({ message: "Please fill in all fields", type: 'error', visible: true });
			return;
		}

		if (!isEmailValid(email)) {
			setModal({ message: "Please enter a valid email", type: 'error', visible: true });
			return;
		}

		try {
			const response = await verifyCredentials({ email, password });
			if (response.error) {
				setModal({ message: "Login failed, please try again", type: 'error', visible: true });
			} else {
				setModal({ message: "Login successful, redirecting...", type: 'success', visible: true });
				setTimeout(() => {
					navigate('/admin');
				}, 2000);
			}
		} catch (err) {
			console.error(err);
		}
	};

	function isEmailValid(email) {
		const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
		return re.test(email);
	}


	return (
		<main>
			<section className="relative bg-yams-dice h-[100dvh] w-full bg-cover bg-no-repeat overflow-hidden">
				<div className="absolute right-0 top-0 w-full h-full md:w-2/4 bg-[#3F3F3F]/85 bg-left-top">
					<div className="container p-3 flex flex-col pt-16 items-center gap-12 justify-center h-2/3">
						<div className="flex flex-col justify-center items-center">
							<h1 className="text-white font-yams-title text-6xl">
								Yams
							</h1>

							<h2 className="text-white font-yams-body text-base">
								Back-office
							</h2>
						</div>

						<div className="w-full max-w-lg">
							<form
								className="flex flex-col gap-8"
								onSubmit={handleSubmit}
							>
								<div>
									<label
										htmlFor="email"
										className="text-white font-yams-body"
									>
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={email}
										onChange={handleChange}
										className="w-full h-12 px-3 py-2 mt-2 rounded-md border border-[#CFCFCF] bg-transparent text-white font-yams-body focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
									/>
								</div>

								<div>
									<label
										htmlFor="password"
										className="text-white font-yams-body mt-2"
									>
										Password
									</label>
									<input
										type="password"
										id="password"
										name="password"
										value={password}
										onChange={handleChange}
										className="w-full h-12 px-3 py-2 mt-2 rounded-md border border-[#CFCFCF] bg-transparent text-white font-yams-body focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50"
									/>
								</div>

								<button
									type="submit"
									className="flex h-12 animate-background-shine delay-1000 items-center justify-center rounded-md border border-gray-800 bg-[linear-gradient(110deg,#38ACDE,45%,#B1E0FE,55%,#38ACDE)] bg-[length:200%_100%] px-12 py-4 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-gray-50 mt-4"
								>
									Login
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
			{modal.visible && (
				<StatusMessageModal
					message={modal.message}
					type={modal.type}
					visible={modal.visible}
					onClose={() => setModal({ message: "", type: "", visible: false })}
				/>
			)}
		</main>
	);
};

export default Login;
