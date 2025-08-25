import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc",
      company: "Technology Startup",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "DigitalPro transformed our online presence completely. Within 6 months, our organic traffic increased by 300% and our conversion rate doubled. Their strategic approach and attention to detail is unmatched.",
      results: "300% traffic increase, 2x conversion rate"
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, RetailPlus",
      company: "E-commerce",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The ROI we've achieved with Clientura's PPC campaigns is incredible. They don't just run ads - they build comprehensive strategies that align with our business goals. Our ROAS improved by 250%.",
      results: "250% ROAS improvement, $2M+ revenue generated"
    },
    {
      name: "Emma Rodriguez",
      position: "Founder, GreenLife Wellness",
      company: "Health & Wellness",
      image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Working with Clientura has been a game-changer. Their content marketing strategy helped us become thought leaders in our industry. We've seen consistent growth month over month.",
      results: "500% social media growth, industry leadership"
    },
    {
      name: "David Park",
      position: "COO, InnovateCorp",
      company: "B2B Services",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The team's expertise in B2B marketing is exceptional. They helped us refine our messaging and reach decision-makers more effectively. Our lead quality has improved dramatically.",
      results: "400% qualified leads, 60% shorter sales cycle"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Client <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients say about their transformation 
            journey with our digital marketing expertise.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              <div className="flex items-center justify-between mb-8">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-6 h-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <Quote className="w-12 h-12 text-blue-500 opacity-20" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-6 font-medium">
                    "{testimonials[currentIndex].text}"
                  </blockquote>
                  
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-4 mb-6">
                    <div className="text-sm text-gray-600 font-semibold mb-1">Key Results:</div>
                    <div className="text-lg font-bold text-gray-900">{testimonials[currentIndex].results}</div>
                  </div>
                </div>

                <div className="text-center lg:text-left">
                  <div className="inline-block relative mb-4">
                    <img 
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name}
                      className="w-24 h-24 rounded-full object-cover mx-auto lg:mx-0"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-bold text-xl text-gray-900 mb-1">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="text-blue-600 font-semibold mb-1">
                      {testimonials[currentIndex].position}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button 
              onClick={prevTestimonial}
              className="group w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-white" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-blue-500 w-8' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button 
              onClick={nextTestimonial}
              className="group w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-500 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-white" />
            </button>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join our success stories?
          </p>
          <button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            Start Your Success Story
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;