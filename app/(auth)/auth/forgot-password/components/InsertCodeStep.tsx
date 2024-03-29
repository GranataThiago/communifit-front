import { Button } from "../../../../components/ui/button";
import React, { useEffect, useRef, useState } from "react";
import { recoverPassword } from "../../../../../services/users/recoverPassword";

const InsertCodeStep = ({
	code,
	setCode,
	getValues,
}: {
	code: string[];
	setCode: any;
	getValues: any;
}) => {

  	const inputRefs = useRef<HTMLInputElement[] | null >([]);

	useEffect(() => {
		if(inputRefs && Array.isArray(inputRefs.current)){
			inputRefs.current = inputRefs.current.slice(0, code.length);
		}
	}, [code]);

	
	const handlePaste = (e: any) => {
		e.preventDefault();
		const clipboardData = e.clipboardData.getData("text");
		const digits = clipboardData.substring(0, 4);

		let newCode = [...code];
		digits.split("").forEach((digit: string, index: number) => {
			if (!Number(digit) && Number(digit) !== 0 && digit !== "") {
				return;
			}
			if (index < 4) {
				newCode[index] = digit;
			}
		});
		setCode(newCode);
		

	};

	const handleChangeCode = (index: number, newValue: string) => {
		if(!inputRefs && !Array.isArray(inputRefs)) return;
		if (newValue.length >= 1) {
			newValue = newValue.slice(0, 1);
		}
		if (!Number(newValue) && Number(newValue) !== 0 && newValue !== "") {
			return;
		}
		let newCode = [...code];
		newCode[index] = newValue;
		setCode(newCode);

		 if (newValue === '') {
			if (index > 0) {
			  inputRefs.current![index - 1].focus();
			}
		  } else {
			if (index < code.length - 1) {
			  inputRefs.current![index + 1].focus();
			}
		  }

	};

	const onResendEmail = async () => {
		await recoverPassword({ email: getValues("email").toLowerCase().trim() });
	};

	return (
		<>
			<div className='flex flex-row w-full items-center justify-center gap-3'>
				{code.map((value, index) => (
					<div
						key={index}
						className='flex items-center justify-center text-center'
						tabIndex={index}

					>
						<input
							ref={(ref) => (inputRefs.current![index] = ref as HTMLInputElement)}
							type='text'
							className='w-[80px] h-[80px] text-5xl rounded-xl border-2 border-gray-300 text-center'
							value={value}
							onPaste={handlePaste}
							onChange={(e) => handleChangeCode(index, e.target.value)}
							onInput={(e) =>
								handleChangeCode(index, (e.target as HTMLInputElement).value)
							}
						/>
					</div>
				))}
			</div>

			<Button
				variant='text'
				className='relative self-end'
				aria-label={"Resend verification code"}
				onClick={onResendEmail}
			>
				Didn't received the code? Resend.
			</Button>
		</>
	);
};

export default InsertCodeStep;
