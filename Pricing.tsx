import React from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: 999,
      icon: Zap,
      popular: false,
      description: "Perfect for small businesses just getting started with digital marketing",
      features: [
        "SEO Audit & Basic Optimization",
        "Google My Business Setup",
        "Social Media Account Setup",
        "Monthly Performance Report",
        "Email Support",
        "2 Blog Posts per Month",
        "Basic Analytics Setup"
      ]
    },
    {
      name: "Professional",
      price: 2499,
      icon: Star,
      popular: true,
      description: "Comprehensive digital marketing for growing businesses",
      features: [
        "Everything in Starter",
        "Advanced SEO & Content Marketing",
        "PPC Campaign Management",
        "Social Media Management (4 platforms)",
        "Email Marketing Campaigns",
        "Weekly Performance Reports",
        "Phone & Priority Support",
        "8 Blog Posts per Month",
        "Conversion Rate Optimization"
      ]
    },
    {
      name: "Enterprise",
      price: 4999,
      icon: Crown,
      popular: false,
      description: "Full-scale digital marketing for established businesses",
      features: [
        "Everything in Professional",
        "Advanced PPC & Display Advertising",
        "Complete Brand Management",
        "Video Marketing & Production",
        "Marketing Automation",
        "Daily Performance Monitoring",
        "Dedicated Account Manager",
        "Unlimited Content Creation",
        "Custom Landing Pages",
        "Advanced Analytics & Reporting"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Simple <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Choose the perfect plan for your business. All plans include our core digital marketing services 
            with scalable features to match your growth.
          </p>
          
          <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
            <button className="px-6 py-2 bg-white rounded-full text-gray-900 font-semibold shadow-sm">
              Monthly
            </button>
            <button className="px-6 py-2 text-gray-600 font-semibold">
              Yearly <span className="text-green-500 text-sm ml-1">(Save 20%)</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon;
            return (
              <div 
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-500 transform hover:-translate-y-4 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-500 to-purple-500 text-white scale-105 lg:scale-110 shadow-2xl' 
                    : 'bg-white border border-gray-200 hover:border-blue-200 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                    plan.popular ? 'bg-white/20' : 'bg-gradient-to-r from-blue-500 to-purple-500'
                  }`}>
                    <IconComponent className={`w-8 h-8 ${plan.popular ? 'text-white' : 'text-white'}`} />
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                    {plan.name}
                  </h3>
                  
                  <p className={`text-sm mb-4 ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>
                  
                  <div className="mb-2">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                      ${plan.price}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                      /month
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className={`w-5 h-5 mr-3 mt-0.5 flex-shrink-0 ${
                        plan.popular ? 'text-white' : 'text-green-500'
                      }`} />
                      <span className={`${plan.popular ? 'text-blue-50' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 ${
                  plan.popular 
                    ? 'bg-white text-blue-600 hover:bg-gray-50' 
                    : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600'
                }`}>
                  Get Started Now
                </button>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            Need a custom solution? We offer tailored packages for unique business requirements.
          </p>
          <button className="text-blue-600 hover:text-purple-600 font-semibold transition-colors">
            Contact us for enterprise pricing →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;