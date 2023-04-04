import { useEffect, useState } from "react";
import hanuman from "./assets/hanuman.png";
import kali from "./assets/kali.png";
import krishna from "./assets/krishna.png";
import shani from "./assets/shani.png";
import surya from "./assets/surya.png";
import vishnu from "./assets/vishnu.png";
import shiva from "./assets/shivaa.png";
import arati from "./assets/arati.png";
import "./App.css";
import Draggable from "react-draggable";

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
    const dayOfWeek = days[new Date().getDay() + 0];
    setCurrentData(dayOfWeek);
    document.title = currentData.title;
  }, [currentData.title, currentData.image]);

  const buttons = [
    { title: "ghanti" },
    { title: "parsad" },
    { title: "agarbatti" },
    { title: "phull" },
    { title: "diya" },
    { title: "tilak" },
  ];

  const handleClick = () => {
    const audio = new Audio();
    audio.play();
  };
  const emojis = ["🌼", "🌺", "🏵️", "🌷", "💮"];

  const generateDrops = () => {
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = Math.random() * 2 + 1 + "s";
    const abcDiv: any = document.querySelector(".abc");
    abcDiv.appendChild(drop);
  };

  return (
    <section className="font-sans h-screen  container  m-auto flex flex-col lg:flex-row justify-center ">
      <div className="order-2 lg:order-1 w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 mt-8">
        {buttons.slice(0, 3).map((i, id) => {
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
      <div className="order-2 mx-14 lg:order-2 w-full lg:w-1/4 flex flex-col items-center  justify-center text-center mt-12 ">
        <div className="abc">
          <img
            className="mt-20 shadow-2xl"
            loading="lazy"
            src={currentData.image}
            alt=""
          />
        </div>
        <Draggable
          position={{ x: 0, y: 0 }}
          defaultPosition={{ x: 0, y: 0 }}
          onStop={(e, d) => console.log("d", d)}
        >
          <div className="mt-4">
            <img
              className="mx-auto no-user-drag cursor-grab hover:cursor-grabbing"
              src={arati}
              height={170}
              width={170}
              alt="arati"
            />
          </div>
        </Draggable>

        <button
          onClick={() => {
            const interval = setInterval(generateDrops, 100);
            setTimeout(() => clearInterval(interval), 2000);
          }}
          className="flex mx-auto  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Start
        </button>
      </div>
      <div className="order-last w-full lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8">
        {buttons.slice(3).map((i, id) => {
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
