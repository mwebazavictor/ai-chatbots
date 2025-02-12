import Breadcrumb from "../Breadcrumbs/Breadcrumb";

type Agent = {
  name: string;
  description: string;
  image: string;
};

const defaultAgents: Agent[] = [
  {
    name: "Customer Support Suite",
    description:
      "Friendly experts resolving inquiries, troubleshooting issues, and ensuring customer satisfaction.",
    image:
      "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    name: "CFO Suite",
    description: "Financial strategists driving profitability with accurate fiscal management.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    name: "Sales Suite",
    description: "Dynamic team boosting revenues and capturing new clients.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    name: "HR Suite",
    description: "People-focused experts nurturing talent and organizational culture.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    name: "IT Support Suite",
    description: "Tech gurus solving problems quickly and optimizing systems.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    name: "Marketing Suite",
    description: "Creative minds driving brand awareness and market growth.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    name: "Product Development Suite",
    description: "Innovative creators designing products that exceed customer expectations.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    name: "Legal Suite",
    description: "Sharp legal experts ensuring compliance and mitigating risks.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCQ1FJ3NuVBOIGSjJyXiJdsrBgE8Gc8iU4Mg&s",
  },
  {
    name: "Operations Suite",
    description: "Efficiency experts streamlining processes and maximizing productivity.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
  {
    name: "Business Analytics Suite",
    description: "Data-driven analysts uncovering insights for smarter decisions.",
    image: "https://miro.medium.com/v2/resize:fit:1024/1*ofjqKOuf20ND76gWIudh_w.jpeg",
  },
];

type OwnedAgentsProps = {
  agents?: Agent[];
};
const OwnedAgents: React.FC<OwnedAgentsProps> = ({agents= defaultAgents}) => {
  return (
    <div className="mx-auto max-w-7xl p-4">
      <Breadcrumb pageName="Owned Agents" />

      {/* Owned Agents List */}
      {/* <div className="w-full max-h rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {agents.length > 0?(agents.map((agent,index) => (
            <div key = {index} className="bg-gray-100 p-4 text-center">
              <img className="w-full" src={agent.image} alt="Tubayo AI image" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{agent.name}</div>
        <p className="text-gray-700 text-base">
        {agent.description}
        </p>
        <div className="">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Details
        </button>
        </div>
      </div>
          </div>))):('No agents Available at the moment')}
        </div>
      </div> */}
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
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95">
                      View Details
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
