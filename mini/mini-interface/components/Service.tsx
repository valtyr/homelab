import React from "react";
import Image from "next/image";

const Service: React.FC<{
  name: string;
  icon: string;
  path: string;
  description: string;
}> = ({ name, icon, path, description }) => {
  return (
    <a href={path} className="block">
      <div
        className="
      flex space-x-4 p-4 border rounded-md
      items-center shadow-sm cursor-pointer
      hover:shadow-md transition-shadow"
      >
        <Image src={icon} alt={`Icon for ${name}`} width={42} height={42} />
        <div>
          <div className="font-medium text-lg">{name}</div>
          <div className="text-sm text-gray-500">{description}</div>
        </div>
      </div>
    </a>
  );
};

export default Service;
