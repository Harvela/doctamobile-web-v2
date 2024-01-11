import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  const counters = [
    {
      title: 'Feedback Positifs',
      end: 99.0,
      postFix: '.00%',
      desc: 'Des docteurs et des patients',
    },
    {
      title: 'Médecins expérimentés',
      end: 25,
      postFix: '+',
      desc: 'Hautement qualifiés',
    },
    {
      title: 'Patients',
      end: 1100,
      postFix: '+',
      desc: 'Patients enregistrés',
    },
  ];

  return (
    <section className="my-20">
      <div className="m-auto grid w-[80%] rounded-lg bg-white p-8 shadow lg:grid-cols-3">
        {counters.map((counter, key) => (
          <div className="text-center" key={key}>
            <h1 className="mb-4 text-4xl font-bold text-blue">
              <span className="counter-value">
                <CountUp end={counter.end} duration={8} />
              </span>
              {counter.postFix}
            </h1>
            <h5 className="text-md">{counter.title}</h5>
            <p className="text-sm text-blue/80">{counter.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Counter;
