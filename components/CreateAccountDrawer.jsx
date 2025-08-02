"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";

import { accountSchema } from "@/app/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";

import { Input } from "./ui/input";

const CreateAccountDrawer = ({ children }) => {
	const [open, setOpen] = useState(false);

	const {
		register,
		handleSubmit,
		formState: { errors },
		setValue,
		watch,
		reset,
	} = useForm({
		resolver: zodResolver(accountSchema),
		defaultValues: {
			name: "",
			type: "CURRENT",
			balance: "",
			isDefault: false,
		},
	});

	return (
		<Drawer open={open} onOpenChange={setOpen}>
			<DrawerTrigger asChild>{children}</DrawerTrigger>
			<DrawerContent>
				<DrawerHeader>
					<DrawerTitle>Create New Account</DrawerTitle>
				</DrawerHeader>
				<div className="container px-5 pb-5 max-w-7xl mx-auto">
					<form action="" className="space-y-4">
						<div className="space-y-3">
							<label
								htmlFor="name"
								className="text-sm font-medium"
							>
								Account Name
							</label>
							<Input
								id="name"
								placeholder="e.g, Main Checking"
								{...register("name")}
							/>
							{errors.name && (
								<p className="text-sm text-red-500">
									{errors.name.message}
								</p>
							)}
						</div>
						<div className="space-y-3">
							<label
								htmlFor="type"
								className="text-sm font-medium"
							>
								Account Type
							</label>
							<Select>
								<SelectTrigger className="w-[180px]">
									<SelectValue placeholder="Theme" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="light">Light</SelectItem>
									<SelectItem value="dark">Dark</SelectItem>
									<SelectItem value="system">
										System
									</SelectItem>
								</SelectContent>
							</Select>
							{errors.type && (
								<p className="text-sm text-red-500">
									{errors.type.message}
								</p>
							)}
						</div>
					</form>
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default CreateAccountDrawer;
