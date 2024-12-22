import React from 'react';

const Stats = () => {
  const stats = [
    { number: '25+', label: 'Trips' },
    { number: '100+', label: 'Customers' }
  ];

  return (
    <div className="py-16 bg-orange-50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-lg text-orange-500 mb-8">
          We're dedicated to making travel seamless and memorable.<br />
          Here's a quick glimpse of what we've accomplished so far.
        </p>
        <div className="flex justify-center gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-orange-500">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;