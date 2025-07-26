import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://virenbhai-backend-485558705416.us-central1.run.app/api/home-data/'); // Assuming your Django backend is running on the same host/port
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-white text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center py-20">Error: {error.message}</div>;
  }

  return (
    <div className="relative bg-gray-900 text-white py-20">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold leading-tight mb-4">{data.message}</h1>
        <p className="text-xl text-gray-300 mb-8">
          We provide expert consulting services to help your business thrive in a dynamic market.
        </p>
        <h2 className="text-3xl font-bold leading-tight mb-4">Items:</h2>
        <ul className="list-disc list-inside mx-auto w-fit">
          {data.items.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
