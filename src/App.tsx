import { useEffect, useRef, useState } from "react";
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
import krishnaAudio from "./assets/audio/krishna.mp3";
import jaikali from "./assets/audio/jaimaakali.mp3";
import hanumanChalisa from "./assets/audio/hanumanchalisa.mp3";
import namonamo from "./assets/audio/namonamo.mp3";
import narayan from "./assets/audio/narayan.mp3";
import suryadev from "./assets/audio/suryadev.mp3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [currentData, setCurrentData] = useState({
    title: "",
    image: "",
    audio: "",
  });
  useEffect(() => {
    const days = [
      { title: "Sunday", image: surya, audio: suryadev },
      { title: "Monday", image: shiva, audio: namonamo },
      { title: "Tuesday", image: hanuman, audio: hanumanChalisa },
      { title: "Wednesday", image: krishna, audio: krishnaAudio },
      { title: "Thursday", image: vishnu, audio: narayan },
      { title: "Friday", image: kali, audio: jaikali },
      { title: "Saturday", image: shani, audio: hanumanChalisa },
    ];
    const dayOfWeek = days[new Date().getDay() + 0];
    setCurrentData(dayOfWeek);
    document.title = currentData.title;
  }, [currentData.title, currentData.image, currentData.audio]);

  const buttons = [
    { title: "ghanti" },
    { title: "parsad" },
    // { title: "agarbatti" },
    // { title: "phull" },
    // { title: "diya" },
    // { title: "tilak" },
  ];
  let audio: any;
  let currentTime = 0;
  let id = "abc";
  const togglePlay = async () => {
    if (audio && !audio.paused) {
      currentTime = audio.currentTime;
      audio.pause();
      toast.success("paused ...", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
        toastId: id,
        // isLoading: true,
      });
    } else {
      audio = new Audio(currentData.audio);
      audio.currentTime = currentTime;
      await audio.play();
      // toast.success("Message send successfully !", {
      //   position: toast.POSITION.TOP_CENTER,
      //   autoClose: 3000,
      // });
      toast.success("playing ...", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 2000,
        toastId: id,
        // isLoading: true,
      });
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Space") {
      if (audio && !audio.paused) {
        audio.pause();
      }
    }
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
    <>
      <div className="flex lg:hidden">under development</div>
      <section className=" hidden lg:flex font-sans h-screen   container  m-auto  flex-col lg:flex-row justify-center ">
        <div className="order-2 lg:order-1 w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 mt-8">
          {/* {buttons.map((i, id) => {
      return (
        <> */}
          <ToastContainer style={{ padding: "10px" }} />
          <div
            onClick={() => {
              const interval = setInterval(generateDrops, 100);
              setTimeout(() => clearInterval(interval), 2000);
            }}
            className="w-12 h-12 rounded-full bg-gray-300 mb-2 hover:cursor-pointer"
          />
          <h2 className="text-black mb-2 font-normal">{"flower"}</h2>
          <p className="text-gray-700 leading-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          {/* </>
      );
    })} */}
        </div>
        <div className="order-2 mx-14 lg:order-2 w-full lg:w-1/4 flex flex-col items-center  justify-center text-center mt-12 ">
          <div className="abc">
            <img
              className="mt-20 shadow-2xl"
              loading="lazy"
              // src={currentData.image}
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

          <div
            onClick={() => togglePlay()}
            // key={id}
            onKeyDown={(e) => handleKeyDown(e)}
            className="flex mx-auto  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg :hover cursor-pointer"
          >
            start
          </div>
        </div>
        <div className="order-last w-full lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8">
          <div
            // key={id}
            className="w-12 h-12 rounded-full bg-gray-300 mb-2"
          />
          <h2 className="text-black mb-2 font-normal">{"ghanti"}</h2>
          <p className="text-gray-700 leading-normal mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          {/* {buttons.slice(2).map((i, id) => {
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
    })} */}
        </div>
      </section>
    </>
  );
}

export default App;
