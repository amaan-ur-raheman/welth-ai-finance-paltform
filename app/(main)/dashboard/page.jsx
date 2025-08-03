import { Card, CardContent } from "../../../components/ui/card";
import CreateAccountDrawer from "../../../components/CreateAccountDrawer";
import React from "react";
import { Plus } from "lucide-react";
import { getUserAccounts } from "@/actions/dashboard";
import AccountCard from "./_components/AccountCard";

const Dashboard = async () => {
	const accounts = await getUserAccounts();

	return (
		<div className="px-5">
			{/* Budget Progress */}
			{/* Overview */}
			{/* Account grid */}
			<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				<CreateAccountDrawer>
					<Card className="hover:shadow-md transition-shadow cursor-pointer border-dashed">
						<CardContent className="flex flex-col items-center justify-center text-muted-foreground h-full pt-5">
							<Plus className="w-10 h-10" />
							<p className="text-sm font-medium">
								Add New Account
							</p>
						</CardContent>
					</Card>
				</CreateAccountDrawer>

				{accounts.length >= 0 &&
					accounts?.map((account) => <AccountCard key={account.id} account={account} />)}
			</div>
		</div>
	);
};

export default Dashboard;
