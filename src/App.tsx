import { SVGProps } from "react";
import { JSX } from "react/jsx-runtime";
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
import { BackgroundLines } from "./components/ui/background-lines";
import Ripple from "./components/ui/ripple";

export default function App() {
  const [currentData, setCurrentData] = useState({
    title: "",
    image: "",
    audio: "",
  });
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        togglePlay();
      }
    };
    window.addEventListener("keydown", (e) => handleKeyPress(e));
    const days = [
      { title: "Sunday", image: surya, audio: suryadev },
      { title: "Monday", image: shiva, audio: namonamo },
      { title: "Tuesday", image: hanuman, audio: hanumanChalisa },
      { title: "Wednesday", image: krishna, audio: krishnaAudio },
      { title: "Thursday", image: vishnu, audio: narayan },
      { title: "Friday", image: kali, audio: jaikali },
      { title: "Saturday", image: shani, audio: hanumanChalisa },
    ];
    const dayOfWeek = days[new Date().getDay()];
    setCurrentData(dayOfWeek);
    document.title = currentData.title;
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentData.title, currentData.image, currentData.audio]);

  let audio: HTMLAudioElement;
  let currentTime = 0;
  let id = "abc";

  const togglePlay = async () => {
    console.log("pause", audio);
    if (audio && !audio.paused) {
      currentTime = audio.currentTime;
      audio.pause();
      toast.success("Paused ...", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
        toastId: id,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      var image = document.getElementById("myImage")!;
      image.setAttribute("src", play);
    } else {
      audio = new Audio(currentData.audio);
      audio.currentTime = currentTime;
      await audio.play();
      toast.success("Playing ...", {
        position: toast.POSITION.BOTTOM_CENTER,
        autoClose: 1000,
        toastId: id,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
      var image = document.getElementById("myImage")!;
      image.setAttribute("src", pauseimage);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FDEBD0]">
      <div className="flex items-center justify-center w-full max-w-5xl px-4 py-8 mx-auto space-x-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 bg-[#00BCD4] rounded-full">
            <FlowerIcon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Flower</h3>
          <p className="text-center text-sm">
            Flowers represent beauty, purity and devotion, symbolizing spiritual
            enlightenment.
          </p>
        </div>
        <BackgroundLines className="flex items-center  justify-center w-full flex-col">
          <img
            src={currentData.image}
            alt="Divine Image"
            className="object-cover w-[300px] h-[400px] z-10 rounded-lg shadow-lg"
            width="300"
            height="400"
            style={{ aspectRatio: "300/400", objectFit: "cover" }}
          />
        </BackgroundLines>
        {/* <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg  ">
          <img
            src={currentData.image}
            alt="Divine Image"
            className="object-cover w-[300px] h-[400px] z-10 rounded-lg shadow-lg"
            width="300"
            height="400"
            style={{ aspectRatio: "300/400", objectFit: "cover" }}
          />
          <Ripple />
        </div> */}
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center justify-center w-16 h-16 bg-[#00BCD4] rounded-full">
            <BellIcon className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-lg font-semibold">Ghanti</h3>
          <p className="text-center text-sm">
            Bells are believed to ward off evil spirits and help focus the mind
            on the divine.
          </p>
        </div>
      </div>
      <div className="relative w-full mt-8">
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
          <div className="relative flex items-center justify-center w-16 h-16 bg-[#00BCD4] rounded-full">
            <PlayIcon className="w-8 h-8 text-white" />
          </div>
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
              alt="arati-image"
            />
          </div>
        </Draggable>
      </div>
    </div>
  );
}

function BellIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
      <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
    </svg>
  );
}

function FlowerIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5" />
      <path d="M12 7.5V9" />
      <path d="M7.5 12H9" />
      <path d="M16.5 12H15" />
      <path d="M12 16.5V15" />
      <path d="m8 8 1.88 1.88" />
      <path d="M14.12 9.88 16 8" />
      <path d="m8 16 1.88-1.88" />
      <path d="M14.12 14.12 16 16" />
    </svg>
  );
}

function PlayIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}
