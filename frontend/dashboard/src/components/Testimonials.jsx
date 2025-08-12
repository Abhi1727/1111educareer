import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rohan Sharma',
      college: 'IIT Bombay',
      testimonial: '1111educareer helped me get into my dream college. The counselors were very supportive and guided me through the entire process.',
      avatar: 'https://placehold.co/100x100?text=Rohan'
    },
    {
      name: 'Priya Singh',
      college: 'IIM Ahmedabad',
      testimonial: 'The team at 1111educareer is very professional and knowledgeable. They helped me choose the right course and college for my career goals.',
      avatar: 'https://placehold.co/100x100?text=Priya'
    },
    {
      name: 'Amit Patel',
      college: 'Delhi University',
      testimonial: 'I am grateful to 1111educareer for their guidance and support. They made the admission process so much easier for me.',
      avatar: 'https://placehold.co/100x100?text=Amit'
    },
  ];

  return (
    <section className="py-24 bg-neutral">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-text-primary">What Our Students Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-center mb-5">
                <img src={testimonial.avatar} alt={testimonial.name} className="w-20 h-20 rounded-full mr-5" />
                <div>
                  <h4 className="text-xl font-semibold text-text-primary">{testimonial.name}</h4>
                  <p className="text-text-secondary">{testimonial.college}</p>
                </div>
              </div>
              <p className="text-text-secondary italic">"{testimonial.testimonial}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
