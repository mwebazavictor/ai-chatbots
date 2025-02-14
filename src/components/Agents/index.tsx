"use client";

import { useRouter } from "next/navigation";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";

type Agent = {
  id:number;
  name: string;
  description: string;
  image: string;

};

const defaultAgents: Agent[] = [
  {
    id:1,
    name: "Customer Support Suite",
    description:
      "Friendly experts resolving inquiries, troubleshooting issues, and ensuring customer satisfaction.",
    image:
      "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    id:2,
    name: "CFO Suite",
    description: "Financial strategists driving profitability with accurate fiscal management.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    id:3,
    name: "Operations Suite",
    description: "Efficiency experts streamlining processes and maximizing productivity.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    id:4,
    name: "Business Analytics Suite",
    description: "Data-driven analysts uncovering insights for smarter decisions.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
];



type OwnedAgentsProps = {
  agents?: Agent[];
};
const OwnedAgents: React.FC<OwnedAgentsProps> = ({agents= defaultAgents}) => {
  const router = useRouter();
  const handleClick = (id:number) => {
    router.push(`/${id}`)
  };
  return (
    <div className="mx-auto max-w-7xl p-4">
      <Breadcrumb pageName="Owned Agents" />
      <div className="w-full max-h-full rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {agents.length > 0 ? (
            agents.map((agent, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:bg-gray-800 dark:border-gray-700"
              >
                <div className="relative">
                  <img 
                    className="w-full h-48 object-cover" 
                    src={agent.image} 
                    alt={`${agent.name} illustration`}
                  />
                  {/* Gradient overlay for better text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-3 text-gray-900 dark:text-white">
                    {agent.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                    {agent.description}
                  </p>
                  <div className="flex justify-center">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95" onClick={()=>handleClick(agent.id)}>
                      Manage Agent
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No agents available at the moment
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OwnedAgents;
