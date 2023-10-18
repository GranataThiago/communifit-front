"use client";

import Modal, { LabelProps } from "./ModalForm";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const WorkoutModal = () => {
	const formSchema = z.object({
		name: z.string().min(1, {
			message: "Name is required.",
		}),
		quantity: z.string().min(1, {
			message: "Quantity is required.",
		}),
		weight: z.string().min(1, {
			message: "Weight is required.",
		}),
		observations: z.string().min(1, {
			message: "Observations is required.",
		}),
	});

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			quantity: "",
			weight: "50lbs",
			observations: "",
		},
	});

	/* const labels: LabelProps[] = [
		{
			label: "Name",
			input: {
				variant: "outlined",
				id: "name",
				type: "text",
				fieldName: "name",
			},
		},
		{
			label: "Sets/Reps",
			input: {
				variant: "outlined",
				id: "quantity",
				type: "text",
				fieldName: "quantity",
			},
		},
		{
			label: "Observations",
			input: {
				variant: "outlined",
				id: "observations",
				type: "text",
				fieldName: "observations",
			},
		},
	]; */

	return (
		<Modal
			Title='Exercise Details'
			Footer='Add'
			/* Labels={labels} */
			Form={form}
			/* TextButton='Add' */
		/>
	);
};

export default WorkoutModal;
