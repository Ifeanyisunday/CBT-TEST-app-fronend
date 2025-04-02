import React from 'react';
import img1 from '../assets/girl1.jpg'
import img2 from '../assets/girl2.jpg'
import img3 from '../assets/guy1.jpg'
import img4 from '../assets/girl3.jpg'
import img5 from '../assets/girl4.jpg'

const FeaturesGrid = () => {
  const features = [
    {
      title: 'Real-time Exam Results',
      description: 'Get instant feedback on your exam performance with detailed scores.',
      image: img1,
    },
    {
      title: 'Interactive Question Interface',
      description: 'Answer multiple-choice, true/false, and short-answer questions with ease.',
      image: img2
    },
    {
      title: 'Secure Exam Environment',
      description: 'Our platform ensures secure and cheating-free exam sessions with monitoring.',
      image: img3
    },
    {
      title: 'Time Management Tools',
      description: 'Track your exam time with countdowns, and manage your time effectively.',
      image: img4
    },
    {
      title: 'Customizable Exams',
      description: 'Create personalized exams with a variety of question types and difficulty levels.',
      image: img5
    },
    {
      title: 'Mobile-Friendly',
      description: 'Take exams anytime, anywhere using your mobile device with full compatibility.',
      image: 'https://via.placeholder.com/150?text=Mobile',
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-12">
          Features of Our Online-Test Application
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-32 h-32 object-cover mx-auto mb-4 rounded-full"
              />
              <h3 className="text-xl font-semibold text-center text-gray-800">{feature.title}</h3>
              <p className="mt-2 text-gray-600 text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesGrid;
