import React, { useState, useEffect, useRef } from 'react';
import { Users, Briefcase, DollarSign, Award } from 'lucide-react';

const Counters = () => {
  const [inView, setInView] = useState(false);
  const [clients, setClients] = useState(0);
  const [projects, setProjects] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [awards, setAwards] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const counters = [
    { icon: Users, label: "Happy Clients", value: 500, current: clients, setter: setClients, suffix: "+" },
    { icon: Briefcase, label: "Projects Completed", value: 1250, current: projects, setter: setProjects, suffix: "+" },
    { icon: DollarSign, label: "Revenue Generated", value: 10, current: revenue, setter: setRevenue, prefix: "$", suffix: "M+" },
    { icon: Award, label: "Awards Won", value: 25, current: awards, setter: setAwards, suffix: "+" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !inView) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [inView]);

  useEffect(() => {
    if (!inView) return;

    counters.forEach(({ value, setter }) => {
      let start = 0;
      const increment = value / 100;
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setter(value);
          clearInterval(timer);
        } else {
          setter(Math.floor(start));
        }
      }, 30);
    });
  }, [inView]);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            These numbers represent real businesses transformed, goals achieved, and dreams realized through our strategic digital marketing approach.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {counters.map((counter, index) => {
            const IconComponent = counter.icon;
            return (
              <div 
                key={index}
                className="text-center group hover:scale-110 transition-transform duration-300"
              >
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors border border-white/20">
                  <IconComponent className="w-10 h-10 text-white" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {counter.prefix}{counter.current.toLocaleString()}{counter.suffix}
                </div>
                
                <div className="text-blue-100 text-lg font-medium">
                  {counter.label}
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-md rounded-full px-8 py-4 border border-white/20">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white font-semibold">Growing every day - Join our success story</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counters;