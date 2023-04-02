import { useEffect, useState } from "react";
import hanuman from "./assets/hanuman.png";
import kali from "./assets/kali.png";
import krishna from "./assets/krishna.png";
import shani from "./assets/shani.png";
import surya from "./assets/surya.png";
import vishnu from "./assets/vishnu.png";
import shiva from "./assets/shivaa.png";
import "./App.css";

function App() {
  const [currentData, setCurrentData] = useState({
    title: "",
    image: "",
  });

  useEffect(() => {
    const days = [
      { title: "Sunday", image: surya },
      { title: "Monday", image: shiva },
      { title: "Tuesday", image: hanuman },
      { title: "Wednesday", image: krishna },
      { title: "Thursday", image: vishnu },
      { title: "Friday", image: kali },
      { title: "Sunny", image: shani },
    ];
    const dayOfWeek = days[new Date().getDay()];
    setCurrentData(dayOfWeek);
    document.title = currentData.title;
  }, [currentData]);

  const leftButtons = [
    { title: "ghanti" },
    { title: "parsad" },
    { title: "agarbatti" },
  ];
  return (
    <section className="font-sans lg:max-h-screen container  m-auto flex flex-col lg:flex-row justify-center my-8">
      <div className="order-2 lg:order-1 w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 mt-8">
        {leftButtons.map((i, id) => {
          return (
            <>
              <div
                key={id}
                className="w-12 h-12 rounded-full bg-gray-300 mb-2"
              />
              <h2 className="text-black mb-2 font-normal">{i.title}</h2>
              <p className="text-gray-700 leading-normal mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </>
          );
        })}
      </div>
      <div className="order-1 lg:order-2 w-full lg:w-1/2 max-w-sm lg:max-w-lg md:max-w-md mx-auto mb-6 lg:mb-0">
        <img className="h-90" src={currentData.image} alt="" />
      </div>
      <div className="order-last w-full lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8">
        {leftButtons.map((i, id) => {
          return (
            <>
              <div
                key={id}
                className="w-12 h-12 rounded-full bg-gray-300 mb-2"
              />
              <h2 className="text-black mb-2 font-normal">{i.title}</h2>
              <p className="text-gray-700 leading-normal mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </>
          );
        })}
      </div>
    </section>
  );
}

export default App;
