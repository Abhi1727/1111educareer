import React from 'react';

const InstitutesCarousel = () => {
  const institutes = [
    { name: 'IIT Delhi', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100' },
    { name: 'IIM Bangalore', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100' },
    { name: 'BITS Pilani', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100' },
    { name: 'VIT Vellore', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100' },
    { name: 'SRM University', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100' },
    { name: 'Amity University', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100' },
    { name: 'Manipal University', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100' },
    { name: 'Lovely Professional University', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100' },
    { name: 'Delhi University', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100' },
    { name: 'Jawaharlal Nehru University', logo: 'https://images.unsplash.com/photo-1562774053-701939374585?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1NzQ5NDJ8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nb3xlbnwwfHx8fDE3MDk4OTQ0MDB8MA&ixlib=rb-4.0.3&q=80&w=100' }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Learn From Top Ranked Institutes & Universities</h2>
        <div className="relative w-full overflow-hidden py-4">
          <div className="flex animate-marquee whitespace-nowrap">
            {institutes.map((institute, index) => (
              <div key={index} className="flex-shrink-0 mx-8">
                <img src={institute.logo} alt={`${institute.name} Logo`} className="h-12 object-contain" />
              </div>
            ))}
            {/* Duplicate content to create seamless loop */}
            {institutes.map((institute, index) => (
              <div key={`${index}-duplicate`} className="flex-shrink-0 mx-8">
                <img src={institute.logo} alt={`${institute.name} Logo`} className="h-12 object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstitutesCarousel;
