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
    audio: "",
  });

  useEffect(() => {
    const days = [
      { title: "Sunday", image: surya, audio: "" },
      { title: "Monday", image: shiva, audio: "" },
      { title: "Tuesday", image: hanuman, audio: "" },
      { title: "Wednesday", image: krishna, audio: "" },
      { title: "Thursday", image: vishnu, audio: "" },
      { title: "Friday", image: kali, audio: "" },
      { title: "Sunny", image: shani, audio: "" },
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

  const handleClick = () => {
    const audio = new Audio();
    audio.play();
  };
  return (
    <section className="font-sans h-screen  container  m-auto flex flex-col lg:flex-row justify-center ">
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
        <img className="h-90" loading="lazy" src={currentData.image} alt="" />
        {/* <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Start
        </button> */}
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
