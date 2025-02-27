import { Check, X } from "lucide-react";

// eslint-disable-next-line 
const PasswordCriteria = ({ password }) => {
	const criteria = [
		{ label: "At least 6 characters", met: password.length >= 6 },
		{ label: "Contains uppercase letter", met: /[A-Z]/.test(password) },
		{ label: "Contains lowercase letter", met: /[a-z]/.test(password) },
		{ label: "Contains a number", met: /\d/.test(password) },
		{ label: "Contains special character", met: /[^A-Za-z0-9]/.test(password) },
	];

	return (
		<div className='mt-2 sm:mt-3 grid grid-cols-2 space-y-1'>
			{criteria.map((item) => (
				<div key={item.label} className='flex items-center sm:text-[10px] text-[8px]'>
					{item.met ? (
						<Check className='sm:size-4 size-3 text-green-500 mr-1' />
					) : (
						<X className='sm:size-4 size-3 text-gray-500 mr-1' />
					)}
					<span className={item.met ? "text-green-500" : "text-gray-400"}>{item.label}</span>
				</div>
			))}
		</div>
	);
};

const PasswordStrengthMeter = ({ password }) => {
	const getStrength = (pass) => {
		let strength = 0;
		if (pass.length >= 6) strength++;
		if (pass.match(/[a-z]/) && pass.match(/[A-Z]/)) strength++;
		if (pass.match(/\d/)) strength++;
		if (pass.match(/[^a-zA-Z\d]/)) strength++;
		return strength;
	};
	const strength = getStrength(password);

	const getColor = (strength) => {
		if (strength === 0) return "bg-red-500";
		if (strength === 1) return "bg-red-400";
		if (strength === 2) return "bg-orange-500";
		if (strength === 3) return "bg-yellow-400";
		return "bg-green-500";
	};

    const getTextColor = (strength) => {
        if (strength === 0) return "text-red-500";
        if (strength === 1) return "text-red-400";
        if (strength === 2) return "text-orange-500";
        if (strength === 3) return "text-yellow-400";
        return "text-green-500";
    }

	const getStrengthText = (strength) => {
		if (strength === 0) return "Very Weak";
		if (strength === 1) return "Weak";
		if (strength === 2) return "Fair";
		if (strength === 3) return "Good";
		return "Strong";
	};

	return (
		<div className='mt-5'>
			<div className='flex justify-between items-center mb-1'>
				<span className='sm:text-xs text-[10px] text-gray-400'>Password strength</span>
				<span className={`sm:text-xs text-[10px] ${getTextColor(strength)} `}>{getStrengthText(strength)}</span>
			</div>

			<div className='flex space-x-1'>
				{[...Array(4)].map((_, index) => (
					<div
						key={index}
						className={`h-1 w-1/4 rounded-full transition-colors duration-300 
                        ${index < strength ? getColor(strength) : "bg-gray-600"}
                        `}
					/>
				))}
			</div>
			<PasswordCriteria password={password} />
		</div>
	);
};
export default PasswordStrengthMeter;