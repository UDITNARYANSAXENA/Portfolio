import React from "react";
import educational from "../../public/educational.jpg";
import alarm from "../../public/alarm.jpg";
import weather from "../../public/weather.jpg";
import temperature from "../../public/temperature.png";
import food from "../../public/food.jpg";
import calculator from "../../public/calculator.jpg";
import random from "../../public/random.png";

function Projects() {
  const cardItems = [
    {
      id: 1,
      logo: weather,
      name: "Weather Using React",
      demo: "https://weather-using-react-gamma.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Weather-using-react",
    },
    {
      id: 2,
      logo: temperature,
      name: "Temperature Convertor",
      demo: "https://temperatureconvertor-gamma.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/temperatureconvertor",
    },
    {
      id: 3,
      logo: food,
      name: "Food Ordering Site",
      demo: "https://food-junction.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Food-junction",
    },
    {
      id: 4,
      logo: calculator,
      name: "Calculator",
      demo: "https://calculator-indol-phi-13.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/calculator",
    },
    {
      id: 5,
      logo: alarm,
      name: "Alarm",
      demo: "https://alarm-theta.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Alarm",
    },
    {
      id: 6,
      logo: educational,
      name: "Online Education Website",
      demo: "https://educational-jet.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/educational",
    },
    
    {
      id: 7,
      logo: random,
      name: "Random Image Generator",
      demo: "https://random-image-xi.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Random-image",
    },
  ];

  const Card = ({ logo, name, demo, sourceCodeLink }) => (
    <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300">
      <img
        src={logo}
        className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
        alt={name}
      />
      <div>
        <div className="px-2 font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="px-6 py-4 space-x-3 justify-around">
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
            Try this 
          </button>
        </a>
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
            Source code
          </button>
        </a>
      </div>
    </div>
  );

  return (
    <div
    name="Projects" className="max-w-screen2xl container mx-auto px-4 md:px-18 my-16">
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        {cardItems.map((item) => (
          <Card
            key={item.id}
            logo={item.logo}
            name={item.name}
            demo={item.demo}
            sourceCodeLink={item.sourceCodeLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
