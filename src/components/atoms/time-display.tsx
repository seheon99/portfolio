import React from 'react';

interface TimeDisplayProps {
  datetime: Date;
  year?: boolean;
  month?: boolean;
  day?: boolean;
  hour?: boolean;
  minute?: boolean;
  second?: boolean;
}

export default function TimeDisplay({
  datetime,
  year,
  month,
  day,
  hour,
  minute,
  second,
}: TimeDisplayProps) {
  return (
    <time dateTime={datetime.toISOString()} className="text-gray-500">
      {datetime.toLocaleString('ko-KR', {
        year: year ? 'numeric' : undefined,
        month: month ? 'long' : undefined,
        day: day ? 'numeric' : undefined,
        hour: hour ? 'numeric' : undefined,
        minute: minute ? 'numeric' : undefined,
        second: second ? 'numeric' : undefined,
      })}
    </time>
  );
}
