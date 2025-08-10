import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, PenBox, Menu } from "lucide-react";
import { checkUser } from "../lib/checkUser";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "./ui/drawer";

const Header = async () => {
	await checkUser();

	return (
		<div className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
			<nav className="container mx-auto px-4 py-4 flex items-center justify-between">
				<Link href="/">
					<Image
						src={"/logo.png"}
						alt="logo"
						width={200}
						height={60}
						className="h-12 w-auto object-contain"
					/>
				</Link>
				<div className="hidden md:flex items-center space-x-4">
					<SignedIn>
						<Link
							href={"/dashboard"}
							className="text-gray-600 hover:text-blue-400 "
						>
							<Button
								variant={"outline"}
								className={"flex items-center gap-2"}
							>
								<LayoutDashboard size={18} />
								<span className="hidden md:inline">
									Dashboard
								</span>
							</Button>
						</Link>

						<Link href={"/transaction/create"}>
							<Button className="flex items-center gap-2">
								<PenBox size={18} />
								<span className="hidden md:inline">
									Add Transaction
								</span>
							</Button>
						</Link>
					</SignedIn>

					<SignedOut>
						<SignInButton forceRedirectUrl="/dashboard">
							<Button variant={"outline"}>Login</Button>
						</SignInButton>
					</SignedOut>
					<SignedIn>
						<UserButton
							appearance={{
								elements: {
									avatarBox: "w-10 h-10",
								},
							}}
						/>
					</SignedIn>
				</div>
				<div className="md:hidden">
					<Drawer direction="right">
						<DrawerTrigger>
							<Menu />
						</DrawerTrigger>
						<DrawerContent>
							<DrawerHeader>
								<DrawerTitle>Navigation</DrawerTitle>
								<DrawerDescription>
									Select a page to navigate to.
								</DrawerDescription>
							</DrawerHeader>
							<div className="flex flex-col space-y-4 p-4">
								<SignedIn>
									<Link
										href={"/dashboard"}
										className="text-gray-600 hover:text-blue-400 "
									>
										<Button
											variant={"outline"}
											className={"flex items-center gap-2 w-full"}
										>
											<LayoutDashboard size={18} />
											<span>Dashboard</span>
										</Button>
									</Link>

									<Link href={"/transaction/create"}>
										<Button className="flex items-center gap-2 w-full">
											<PenBox size={18} />
											<span>Add Transaction</span>
										</Button>
									</Link>
								</SignedIn>

								<SignedOut>
									<SignInButton forceRedirectUrl="/dashboard">
										<Button variant={"outline"} className="w-full">Login</Button>
									</SignInButton>
								</SignedOut>
								<SignedIn>
									<UserButton
										appearance={{
												elements: {
													avatarBox: "w-10 h-10",
												},
										}}
									/>
								</SignedIn>
							</div>
							<DrawerFooter>
								<DrawerClose>
									<Button variant="outline" className="w-full">Cancel</Button>
								</DrawerClose>
							</DrawerFooter>
						</DrawerContent>
					</Drawer>
				</div>
			</nav>
		</div>
	);
};

export default Header;
