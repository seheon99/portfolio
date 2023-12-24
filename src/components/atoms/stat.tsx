import React from 'react';

interface StatProps {
  name: string;
  value: string;
}

export default function Stat({ name, value }: StatProps) {
  return (
    <div className="flex flex-col-reverse ">
      <dt className="text-base leading-7 text-gray-300">{name}</dt>
      <dd className="text-2xl font-bold leading-9 tracking-tight text-white">
        {value}
      </dd>
    </div>
  );
}
