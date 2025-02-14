import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import HomePage from "@/components/Dashboard/Home";

export const metadata: Metadata = {
  title:
    "TAI CHATBOTS",
  description: "Powered by Tubayo",
};

export default function Home() {
  return (
    <>
      <DefaultLayout>
        <HomePage />
      </DefaultLayout>
    </>
  );
}
