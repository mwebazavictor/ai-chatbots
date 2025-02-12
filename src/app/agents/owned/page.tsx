import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import OwnedAgents from "@/components/Agents";

export const metadata: Metadata = {
  title: "Agents",
  description:
    "These are the agents that you own"
};

const AgentsPage = () => {
  return (
    <DefaultLayout>
        <OwnedAgents />
    </DefaultLayout>
  );
};

export default AgentsPage;