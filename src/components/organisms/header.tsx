import React from 'react';

import Text from '@/components/atoms/text';
import LinkList from '@/components/molecules/link-list';
import StatsList from '@/components/molecules/stats-list';

interface Props {
  id: string;
  aboutMe: string[];
  links: { name: string; href: string }[];
  stats: { name: string; value: string }[];
}

export default function Header({ id, links, stats, aboutMe }: Props) {
  return (
    <div
      id={id}
      className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32"
    >
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <div className="sm:flex sm:gap-x-6">
            <Text typograph="h2" className="text-white">
              안녕하세요
            </Text>
            <Text typograph="h2" className="text-white">
              유세헌입니다
            </Text>
          </div>
          <Text typograph="p" className="mt-6 leading-8 text-gray-300">
            {aboutMe.join(' ')}
          </Text>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <LinkList links={links} />
          <StatsList stats={stats} />
        </div>
      </div>
    </div>
  );
}
