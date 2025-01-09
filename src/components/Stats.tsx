import React from 'react';
import CountUp from 'react-countup';

const Stats = () => {
  const stats = [
    { number: 75, label: 'Trips' },
    { number: 1500, label: 'Customers' }
  ];


  return (
    <div className="py-16 bg-orange-50">
      <div className="container mx-auto px-4 text-center">
        <p className="text-body text-orange-500 mb-8">
          We're dedicated to making travel seamless and memorable.<br />
          Here's a quick glimpse of what we've accomplished so far.
        </p>
        <div className="flex justify-center gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-h2 font-bold text-orange-500">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2.5}
                  suffix="+"
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </div>
              <div className="text-body text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Stats;
