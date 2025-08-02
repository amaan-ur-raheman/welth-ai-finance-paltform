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
import { Switch } from "@/components/ui/switch";

import { Input } from "./ui/input";
import { Button } from "./ui/button";

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
						<div className="space-y-2">
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
						<div className="space-y-2">
							<label
								htmlFor="type"
								className="text-sm font-medium"
							>
								Account Type
							</label>
							<Select
								onValueChange={(value) =>
									setValue("type", value)
								}
								defaultValue={watch("type")}
								className="w-full"
							>
								<SelectTrigger
									className="w-full cursor-pointer"
									id="type"
								>
									<SelectValue placeholder="Account Type" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem
										value="CURRENT"
										className={"cursor-pointer"}
									>
										Current
									</SelectItem>
									<SelectItem
										value="SAVINGS"
										className={"cursor-pointer"}
									>
										Savings
									</SelectItem>
								</SelectContent>
							</Select>
							{errors.type && (
								<p className="text-sm text-red-500">
									{errors.type.message}
								</p>
							)}
						</div>
						<div className="space-y-3">
							<label
								htmlFor="balance"
								className="text-sm font-medium"
							>
								Initial Balance
							</label>
							<Input
								id="balance"
								type="number"
								step="0.01"
								placeholder="e.g, 1000"
								{...register("balance")}
							/>
							{errors.balance && (
								<p className="text-sm text-red-500">
									{errors.balance.message}
								</p>
							)}
						</div>
						<div className="flex items-center justify-between rounded-lg border p-3">
							<div className="space-y-0.5">
								<label
									htmlFor="isDefault"
									className="text-sm font-medium cursor-pointer"
								>
									Set as Default
								</label>
								<p className="text-xs text-muted-foreground">
									This account will be selected by default for
									transactions.
								</p>
							</div>
							<Switch
								id="isDefault"
								checked={watch("isDefault")}
								onCheckedChange={(value) =>
									setValue("isDefault", value)
								}
								className="cursor-pointer"
							/>
						</div>
						<div className="gap-2">
							<DrawerClose asChild>
								<Button
									type="button"
									variant="outline"
									className="flex-1"
								>
									Cancel
								</Button>
							</DrawerClose>
							<Button type="submit" className="flex-1 ml-2">
								Create Account
							</Button>
						</div>
					</form>
				</div>
			</DrawerContent>
		</Drawer>
	);
};

export default CreateAccountDrawer;
