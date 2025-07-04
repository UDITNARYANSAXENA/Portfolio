import React from "react";
import educational from "../../public/educational.jpg";
import alarm from "../../public/alarm.jpg";
import weather from "../../public/weather.jpg";
import temperature from "../../public/temperature.png";
import food from "../../public/food.jpg";
import calculator from "../../public/calculator.jpg";
import random from "../../public/random.png";
import qr from "../../public/qrgenerator.png";
import text from "../../public/textto.png"
import greeting from "../../public/greeting.png";
import delivery from "../../public/delivery.png";
import expense from "../../public/expense.png";
import stopwatch from "../../public/stopwatch.png"
import doctor from '../../public/doctor.png'


function Projects() {
  const cardItems = [
    
    {
      id: 1,
      logo: doctor,
      name: "Doctor Appointment Website",
      demo: "https://doctor-nu-five.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Doctor",
    },
    {
      id: 2,
      logo: doctor,
      name: "Doctor Appointment website Admin Panel",
      demo: "https://doctor-qev4.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Doctor",
    },
    {
      id: 3,
      logo: delivery,
      name: "Food Delivery user Panel",
      demo: "https://food-delivery-nrha.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Food-delivery",
    },    {
      id: 4,
      logo: delivery,
      name: "Food Delivery admin panel",
      demo: "https://food-delivery-sooty-three.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Food-delivery",
    }, 
    {
      id: 5,
      logo: weather,
      name: "Weather Using React",
      demo: "https://weather-using-react-gamma.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Weather-using-react",
    },
    {
      id: 6,
      logo: temperature,
      name: "Temperature Convertor",
      demo: "https://tempconvert-plum.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/tempconvert",
    },
    {
      id: 7,
      logo: calculator,
      name: "Calculator",
      demo: "https://calculator-indol-phi-13.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/calculator",
    },
    {
      id: 8,
      logo: alarm,
      name: "Alarm",
      demo: "https://alarm-theta.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Alarm",
    },
    {
      id: 9,
      logo: educational,
      name: "Online Education Website",
      demo: "https://educational-jet.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/educational",
    },
    {
      id: 10,
      logo: random,
      name: "Random Image Generator",
      demo: "https://random-image-xi.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Random-image",
    },
    
    {
      id: 11,
      logo: food,
      name: "Food ordering site",
      demo: "https://food-junction.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/Food-junction",
    },
    {
      id: 12,
      logo: qr,
      name: "QR code Generator",
      demo: "https://qr-code-generatorbyudi.tiiny.site/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/QR-code-generator",
    },
    {
      id: 13,
      logo: text,
      name: "Text 2 Speech Convertor",
      demo: "https://texttospeech-xi.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/texttospeech",
    },
    
    {
      id: 14,
      logo: greeting,
      name: "greeting",
      demo: "https://greet-tan.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/greet",
    },   {
      id: 15,
      logo: expense,
      name: "Expense-Maneger",
      demo: "https://expense-manager-eta-two.vercel.app/login",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/expense-manager",
    },
    {
      id: 16,
      logo: stopwatch,
      name: "Stop Watch",
      demo: "https://stop-watch-beta-two.vercel.app/",
      sourceCodeLink: "https://github.com/UDITNARYANSAXENA/StopWatch",
    },

  ];

  const Card = ({ logo, name, demo, sourceCodeLink }) => (
    <div className="md:w-[280px] md:h-[300px] border-2 rounded-lg shadow-lg p-5 cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={logo}
        className="w-[150px] h-[150px] mx-auto p-1 rounded-full border-2 mb-4 object-cover"
        alt={name}
      />
      <div>
        <div className="text-center font-bold text-xl mb-2">{name}</div>
      </div>
      <div className="flex justify-center space-x-3">
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded transition-colors duration-300 ease-in-out">
            Try this 
          </button>
        </a>
        <a href={sourceCodeLink} target="_blank" rel="noopener noreferrer">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded transition-colors duration-300 ease-in-out">
            Source code
          </button>
        </a>
      </div>
    </div>
  );

  return (
    <div
      name="Projects"
       className="max-w-screen2xl container mx-auto px-4 md:px-20 my-16"
    >
      <h1 className="text-3xl font-bold mb-5">Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 my-5">
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
