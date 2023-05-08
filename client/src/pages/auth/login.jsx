import { useState } from "react";
import { login } from "../../api/auth";
import JWTToken from "../../lib/token";
import { fetchRole } from "../../api/roles";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { resolver } from "../../lib/validation/auth";

function Login() {
	// const [email, setEmail] = useState("");
	// const [password, setPassword] = useState("");
	const [rememberMe, setRememberMe] = useState(false);
	const [err, setErr] = useState(null);

	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting },
	} = useForm({
		resolver: resolver,
	});

	const handleEmailChange = (event) => {
		// setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		// setPassword(event.target.value);
	};

	const handleRememberMeChange = (event) => {
		setRememberMe(event.target.checked);
	};

	// const handleLogin = (event) => {
	// 	event.preventDefault();
	// 	console.log("ooooooooooooooo");
	// 	console.log({ register });
	// 	// TODO: implement login logic
	// };
	const redirect = (roleId) => {
		const role = fetchRole(roleId)
		const roleName = role.data?.roleName
		switch (roleId) {
			case 1:
			  // code to be executed if expression === value1
			  break;
			case 2:
			  // code to be executed if expression === value2
			  break;
			case 3:
			// code to be executed if expression === value2
			break;

			case 4:
			// code to be executed if expression === value2
			break;

			case 5:
			// code to be executed if expression === value2
			break;
			
			default:
			  // code to be executed if none of the above cases are true
		  }
	}

	const onSubmit = async (inputs) => {
		console.log("try to submit");
		const { data, error } = await login(inputs);

		if (data) {
			JWTToken.store(data.token);
			return navigate("/home");
		}
		if (error || !data) {
			setErr(error);
			return;
		}
	};

	return (
		<div className="bg-slate-50 flex justify-center items-center h-screen">
			<form className="" onSubmit={handleSubmit(onSubmit)}>
				<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
					<div className="mb-4">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="email"
						>
							Email
						</label>
						<input
							name="email"
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="email"
							type="email"
							placeholder="Enter your email"
							// value={email}
							// onChange={()=>{console.log({"error":errors.email?.message });}}
							// register={register}
							{...register("email")}
							error={errors.email?.message}
						/>
						{errors.email && (
							<p className="text-red-500">
								{errors.email.message}
							</p>
						)}
					</div>

					<div className="mb-6">
						<label
							className="block text-gray-700 font-bold mb-2"
							htmlFor="password"
						>
							Password
						</label>
						<input
							className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
							id="password"
							type="password"
							placeholder="Enter your password"
							name="password"
							// register={register}
							{...register("password")}
							error={errors.password?.message}
						/>
						{errors.password && (
							<p className="text-red-500">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="mb-6">
						<input
							className="accent-yellow-400 mr-2 leading-tight"
							id="rememberMe"
							type="checkbox"
							checked={rememberMe}
							onChange={handleRememberMeChange}
						/>
						<label
							className="text-gray-700 font-bold"
							htmlFor="rememberMe"
						>
							Remember me
						</label>
					</div>

					<div className="flex items-center justify-center">
						<button
							className="bg-amber-400 hover:bg-amber-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							// onClick={handleLogin}
						>
							Login
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}

export default Login;
