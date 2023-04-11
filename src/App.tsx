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
import hanumanChalisa from "./assets/audio/hanumanchalisa1.mp3";
import namonamo from "./assets/audio/namonamo.mp3";
import narayan from "./assets/audio/narayan.mp3";
import suryadev from "./assets/audio/suryadev.mp3";
import flower from "./assets/flower.png";
import bell from "./assets/bell.png";
import pauseimage from "./assets/pause.png";
import play from "./assets/play.png";
import bellAudio from "./assets/audio/bell.mp3";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [pause, setPause] = useState(play);
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

  let audio: HTMLAudioElement | undefined;
  let currentTime = 0;
  let id = "abc";

  const togglePlay = async () => {
    console.log("pause", audio);
    if (audio && !audio.paused) {
      currentTime = audio.currentTime;
      audio.pause();
      toast.success("paused ...", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
        toastId: id,
      });
      // setPause(play);
    } else {
      audio = new Audio(currentData.audio);
      audio.currentTime = currentTime;
      await audio.play();
      toast.success("playing ...", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
        toastId: id,
      });
      // setPause(pauseimage);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
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

  const playBell = () => {
    let _audio = new Audio(bellAudio);
    _audio?.play();
  };

  return (
    <>
      {/* <div className="flex lg:hidden">under development</div> */}
      <section className="flex font-sans h-screen  bg-primary  container  m-auto  flex-row justify-center ">
        <div className="order-2 lg:order-1 w-full lg:w-1/4 flex flex-col items-center lg:items-end justify-center text-center lg:text-right ml-0 lg:ml-8 mt-8">
          <ToastContainer style={{ padding: "10px" }} />
          <div
            onClick={() => {
              const interval = setInterval(generateDrops, 100);
              setTimeout(() => clearInterval(interval), 2000);
            }}
            className="w-20 h-20 rounded-full bg-secondary mb-2 hover:cursor-pointer hover:bg-[#4be4bd] p-3"
          >
            {" "}
            <img src={flower} alt="flower png" />
          </div>
          <h2 className="text-black mb-2 font-normal">{"flower"}</h2>
          <p className="text-gray-700 leading-normal mb-8">
            Flowers represents beauty, purity and devotion, symbolizing
            spiritual enlightenment.
          </p>
        </div>
        <div className="order-2 lg:mx-14 lg:order-2 w-full lg:w-1/4 flex flex-col items-center  justify-center text-center lg:mt-12 ">
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
            onClick={() => togglePlay()}
            onKeyDown={(e) => handleKeyDown(e)}
            className="flex mx-auto bg-secondary h-12 w-12 border-0 p-2 focus:outline-none hover:bg-[#4be4bd] rounded-full text-lg :hover cursor-pointer"
          >
            <img src={pause} alt="" />
          </button>
        </div>
        <div className="order-last w-full lg:w-1/4 flex flex-col items-center lg:items-start justify-center text-center lg:text-left mt-8 mr-8">
          <div
            onClick={() => playBell()}
            className="w-20 h-20 rounded-full bg-secondary mb-2 hover:cursor-pointer hover:bg-[#4be4bd] p-3"
          >
            <img src={bell} alt="" />
          </div>
          <h2 className="text-black mb-2 font-normal">{"ghanti"}</h2>
          <p className="text-gray-700 leading-normal mb-8">
            Bells are believed to ward off evil spirits and help focus the mind
            on the divine.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
