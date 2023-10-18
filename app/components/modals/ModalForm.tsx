"use client";

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";
import {
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "../ui/form";

import { Button } from "../ui/button";
import { Input } from "../ui/input";

export interface LabelProps {
	className?: string;
	htmlFor?: string;
	label: string;
	input: InputProps;
}

interface InputProps {
	id: string;
	variant: "outlined" | "filled" | "text";
	className?: string;
	type: string;
	fieldName: string;
	value?: string;
}

interface ModalProps {
	ActionTrigger?: any;
	Title?: string;
	Description?: string;
	Footer?: string;
	Labels?: LabelProps[];
	OnSubmit?: () => void;
	Form?: any;
	Icon?: any;
}

const ModalForm = (props: ModalProps) => {
	const {
		ActionTrigger,
		Footer,
		Description,
		Title,
		Labels,
		OnSubmit,
		Form,
		Icon,
	} = props;

	return (
		<Dialog  >
			<DialogTrigger asChild>
				<button >{ActionTrigger}</button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px] max-h-[500px]'>
				<DialogHeader className='gap-4'>
					<DialogTitle>{Title}</DialogTitle>
					<DialogDescription>{Description}</DialogDescription>
				</DialogHeader>
				<form className='flex flex-col w-full gap-4'>
					{Labels?.map((label: LabelProps, key: number) => (
						<FormField
							control={Form.control}
							name={label.input.fieldName}
							key={key}
							render={({ field }) => (
								<FormItem>
									<FormLabel
										htmlFor={label.htmlFor}
										className={label.className}
									>
										{label.label}
									</FormLabel>
									<FormControl>
										<Input
											{...field}
											id={label.input.id}
											variant={label.input.variant}
											className={label.input.className}
											type={label.input.type}
											ref={null}
											value={label.input.value}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					))}
				</form>

				<DialogFooter>
					<Button type='submit' onClick={OnSubmit} className='flex gap-2'>
						{Footer}
						{Icon}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default ModalForm;
