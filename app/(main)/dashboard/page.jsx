import { Card, CardContent } from "../../../components/ui/card";
import CreateAccountDrawer from "../../../components/CreateAccountDrawer";
import React, { Suspense } from "react";
import { Plus } from "lucide-react";
import { getDashboardData, getUserAccounts } from "@/actions/dashboard";
import AccountCard from "./_components/AccountCard";
import { getCurrentBudget } from "@/actions/budget";
import { BudgetProgress } from "./_components/BudgetProgress";
import DashboardOverview from "./_components/DashboardOverview";

const Dashboard = async () => {
	const accounts = await getUserAccounts();
	const defaultAccount = accounts?.find((account) => account.isDefault);

	let budgetData = null;

	if (defaultAccount) {
		budgetData = await getCurrentBudget(defaultAccount.id);
	}

	const transactions = await getDashboardData();

	return (
		<div className="px-5">
			{/* Budget Progress */}
			{defaultAccount && (
				<BudgetProgress
					initialBudget={budgetData?.budget}
					currentExpenses={budgetData?.currentExpenses || 0}
				/>
			)}

			{/* Overview */}
			<Suspense fallback={"Loading overview...."}>
				<DashboardOverview
					accounts={accounts}
					transactions={transactions || []}
				/>
			</Suspense>

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
					accounts?.map((account) => (
						<AccountCard key={account.id} account={account} />
					))}
			</div>
		</div>
	);
};

export default Dashboard;
