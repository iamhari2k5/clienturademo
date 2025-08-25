import React from 'react';
import { Search, Megaphone, Mail, BarChart3, Smartphone, Video, Share2, Globe, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Boost your organic visibility with comprehensive SEO strategies that drive qualified traffic and improve search rankings.",
      features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"]
    },
    {
      icon: Megaphone,
      title: "PPC Advertising",
      description: "Maximize ROI with targeted pay-per-click campaigns across Google Ads, Facebook, and other premium platforms.",
      features: ["Campaign Strategy", "Ad Creation", "Bid Management", "Performance Tracking"]
    },
    {
      icon: Share2,
      title: "Social Media Marketing",
      description: "Build brand awareness and engage your audience across all major social media platforms with compelling content.",
      features: ["Content Strategy", "Community Management", "Paid Social", "Analytics & Reporting"]
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "Nurture leads and retain customers with personalized email campaigns that convert prospects into loyal buyers.",
      features: ["Campaign Design", "Automation", "Segmentation", "A/B Testing"]
    },
    {
      icon: Palette,
      title: "Customized Website Designing",
      description: "Create stunning, user-friendly websites tailored to your brand identity and business objectives with modern design principles.",
      features: ["Custom UI/UX Design", "Responsive Development", "Brand Integration", "Performance Optimization"]
    },
    {
      icon: Video,
      title: "Content Marketing",
      description: "Create valuable, relevant content that attracts and retains your target audience while driving profitable actions.",
      features: ["Content Strategy", "Video Production", "Blog Writing", "Infographics"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Make data-driven decisions with comprehensive analytics and custom reporting dashboards.",
      features: ["Performance Tracking", "Custom Dashboards", "ROI Analysis", "Competitive Intelligence"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions designed to accelerate your business growth 
            and establish market leadership in your industry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className="mt-6 text-blue-600 font-semibold hover:text-purple-600 transition-colors group-hover:translate-x-2 transform duration-300 flex items-center">
                    Learn More 
                    <div className="ml-2 w-5 h-5 border-2 border-current rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 border-t-2 border-r-2 border-current transform rotate-45"></div>
                    </div>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;