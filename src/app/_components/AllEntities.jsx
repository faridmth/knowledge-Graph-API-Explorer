'use client'
import Link from "next/link";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

const AllEntities = ({ allEntities }) => {
  const [chosenEntity, setChosenEntity] = useState();

  return (
    <div className="flex flex-col gap-5 ml-10">
      {allEntities.map(e => (
        <Link
          className={`${chosenEntity === e.EntityId ? 'text-blue-500 font-medium' : ''}`}
          href={`/historique/${encodeURIComponent(e.EntityId)}`}
          key={e.EntityId}
          onClick={() => setChosenEntity(e.EntityId)}
        >
          {e.EntityName}
          <FiExternalLink className="inline ml-1" />
        </Link>
      ))}
    </div>
  );
};

export default AllEntities;
