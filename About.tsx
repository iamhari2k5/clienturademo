import React from 'react';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We develop data-driven strategies that align with your business objectives and market opportunities."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our certified professionals bring years of experience across all digital marketing channels."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Award-winning campaigns that have helped businesses achieve exceptional growth and recognition."
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description: "We stay ahead of trends and technologies to ensure your business remains competitive."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Clientura</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2018, we've been at the forefront of digital transformation, helping businesses 
            navigate the complex digital landscape and achieve sustainable growth through innovative marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              We believe every business deserves to thrive in the digital age. Our mission is to democratize 
              digital marketing excellence by providing world-class strategies and execution that were once 
              only available to enterprise-level companies.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Through cutting-edge technology, creative innovation, and unwavering dedication to our clients' 
              success, we transform ambitious goals into measurable results.
            </p>
          </div>
          
          <div className="relative">
            <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl p-1">
              <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <p className="text-gray-600 font-semibold">Driving Digital Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;