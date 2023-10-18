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
import InputSkeleton from "../skeletons/InputSkeleton";

export interface LabelProps {
	key: string;
	className?: string;
	htmlFor?: string;
	label: string;
	input: any;
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
			<DialogContent className='sm:max-w-[425px] min-h-[320px] max-h-[450px] sm:max-h-[300px]'>
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
									{
										label.input.value ? 
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
									: <InputSkeleton parentContainerStyles="h-10"/>
									}
									
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
