import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface LabelProps {
	className?: string;
	htmlFor?: string;
	label: string;
}

interface InputProps {
	id: string;
	variant: "outlined" | "filled" | "text";
	className: string;
}

interface ModalProps {
	TextButton?: string;
	Title?: string;
	Description?: string;
	Footer?: string;
	Labels?: LabelProps[];
	Inputs?: InputProps[];
}

export function Modal(props: ModalProps) {
	const { TextButton, Footer, Description, Title, Labels, Inputs } = props;

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant='outlined'>{TextButton}</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>{Title}</DialogTitle>
					<DialogDescription>{Description}</DialogDescription>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						{Labels?.map((label: LabelProps, key: number) => (
							<Label
								htmlFor={label.htmlFor}
								className={label.className}
								key={key}
							>
								{label.label}
							</Label>
						))}
						{Inputs?.map((input: InputProps, key: number) => (
							<Input
								key={key}
								id={input.id}
								variant={input.variant}
								className={input.className}
							/>
						))}
					</div>
				</div>

				<DialogFooter>
					<Button type='submit'>{Footer}</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
