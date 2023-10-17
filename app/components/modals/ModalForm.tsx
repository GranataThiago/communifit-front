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
}

interface ModalProps {
	TextButton?: string;
	Title?: string;
	Description?: string;
	Footer?: string;
	Labels?: LabelProps[];
	OnSubmit?: () => void;
	Form?: any;
}

const Modal = (props: ModalProps) => {
	const { TextButton, Footer, Description, Title, Labels, OnSubmit, Form } =
		props;

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outlined' className='bg-primary text-white'>
					{TextButton}
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>{Title}</DialogTitle>
					<DialogDescription>{Description}</DialogDescription>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<form className='grid grid-cols-4 items-center gap-4'>
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
											/>
										</FormControl>
										<FormMessage />
									</FormItem>
								)}
							/>
						))}
					</form>
				</div>

				<DialogFooter>
					<Button type='submit' onSubmit={OnSubmit}>
						{Footer}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default Modal;
