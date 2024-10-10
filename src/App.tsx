import { useEffect } from "react";
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
import { toast } from "sonner";
import { useAudioPlayer } from "react-use-audio-player";
import { BackgroundLines } from "./components/ui/background-lines";
import Ripple from "./components/ui/ripple";
import WavesBackground from "./components/WavesBackground";

const days = [
  { title: "Sunday", image: surya, audio: suryadev },
  { title: "Monday", image: shiva, audio: namonamo },
  { title: "Tuesday", image: hanuman, audio: hanumanChalisa },
  { title: "Wednesday", image: krishna, audio: krishnaAudio },
  { title: "Thursday", image: vishnu, audio: narayan },
  { title: "Friday", image: kali, audio: jaikali },
  { title: "Saturday", image: shani, audio: hanumanChalisa },
];

type ColorShades = [string, string, string, string, string, string];

const navratriColors: { [key: string]: ColorShades } = {
  Pratipada: ["#fefce8", "#fffacd", "#ffef88", "#ffdf44", "#feca11", "#eeb104"], // Yellow shades
  Dwitiya: ["#ecfdf5", "#d1fae5", "#a7f3d0", "#6ee7b7", "#34d399", "#10b981"], // Green shades
  Tritiya: ["#fafafa", "#f5f5f5", "#e5e5e5", "#d4d4d4", "#a3a3a3", "#737373"], // Grey shades
  Chaturthi: ["#fff7ed", "#ffedd5", "#fed7aa", "#fdba74", "#fb923c", "#f97316"], // Orange shades
  Panchami: ["#fafaf9", "#f5f5f4", "#e7e5e4", "#d6d3d1", "#a8a29e", "#78716c"], // White shades
  Shashti: ["#fef2f2", "#fee2e2", "#fecaca", "#fca5a5", "#f87171", "#ef4444"], // Red shades
  Saptami: ["#eff6ff", "#dbeafe", "#bfdbfe", "#93c5fd", "#60a5fa", "#3b82f6"], // Royal Blue shades
  Ashtami: ["#fff1f2", "#ffe4e6", "#fecdd3", "#fda4af", "#fb7185", "#f43f5e"], // Pink shades
  Navami: ["#faf5ff", "#f3e8ff", "#e9d5ff", "#d8b4fe", "#c084fc", "#a855f7"], // Purple shades
};

const navratriDays: string[] = [
  "Pratipada",
  "Dwitiya",
  "Tritiya",
  "Chaturthi",
  "Panchami",
  "Shashti",
  "Saptami",
  "Ashtami",
  "Navami",
];

function getNavratriColors(): ColorShades {
  const today = new Date();
  const navratriStart = new Date(2024, 9, 3); // October 3, 2024
  const navratriEnd = new Date(2024, 9, 11); // October 11, 2024 (9 days)

  if (today >= navratriStart && today <= navratriEnd) {
    const dayOfNavratri = Math.floor(
      (today.getTime() - navratriStart.getTime()) / (1000 * 60 * 60 * 24)
    );
    const navratriDay = navratriDays[dayOfNavratri];
    return navratriColors[navratriDay];
  } else {
    // Default colors for non-Navratri days
    return ["#fbe7c6", "#f4c07d", "#e5a460", "#d58846", "#c66c2e", "#b64e18"];
  }
}

function App() {
  const currentData = days[new Date().getDay()];
  const { togglePlayPause, playing, load } = useAudioPlayer();

  useEffect(() => {
    document.title = currentData.title;
    load(currentData.audio, {
      autoplay: false,
    });
  }, [currentData, load]);

  const navratriColors = getNavratriColors();

  const handleTogglePlay = () => {
    togglePlayPause();
    const message = playing ? "Paused ..." : "Playing ...";
    toast.success(message);
  };

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (
        event.key.toLowerCase() // Convert the key to lowercase for consistent comparison
      ) {
        case " ": // Space key
          handleTogglePlay();
          break;
        case "b":
          playBell(); // Execute playBell function when 'B' or 'b' is pressed
          break;
        case "g":
          playBell(); // Execute playBell function when 'G' or 'g' is pressed
          break;
        case "f":
          const interval = setInterval(generateDrops, 100);
          setTimeout(() => clearInterval(interval), 2000); // Execute generateDrops function when 'F' or 'f' is pressed
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleTogglePlay]);

  const generateDrops = () => {
    const emojis = ["🌼", "🌺", "🏵️", "🌷", "💮"];
    const drop = document.createElement("div");
    drop.classList.add("drop");
    drop.innerText = emojis[Math.floor(Math.random() * emojis.length)];
    drop.style.left = Math.random() * 100 + "vw";
    drop.style.animationDuration = Math.random() * 2 + 1 + "s";
    const abcDiv = document.querySelector(".abc");
    abcDiv?.appendChild(drop);
  };

  const playBell = () => {
    const bellAudioPlayer = new Audio(bellAudio);
    bellAudioPlayer.play();
  };

  return (
    <div>
      <WavesBackground colors={navratriColors} />
      <section className="flex font-sans h-[90vh] lg:h-[90vh] container m-auto flex-row justify-center hero-image">
        <div className="order-2 lg:order-1 w-1/5 lg:w-1/4 flex flex-col items-center lg:items-end justify-end md:justify-center text-center lg:text-right ml-0 md:ml-8 md:mt-8 ">
          <h1 className="sr-only">Only Bhakts</h1>
          <button
            onClick={() => {
              const interval = setInterval(generateDrops, 100);
              setTimeout(() => clearInterval(interval), 2000);
            }}
            className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#A0E7E5] mb-2 hover:cursor-pointer hover:bg-[#4be4bd] p-3"
          >
            <img src={flower} alt="flower-image" />
          </button>
          <h2 className="text-black mb-2 font-normal">{"Flower"}</h2>
          <p className="hidden md:block text-gray-700 leading-normal mb-8">
            Flowers represents beauty, purity and devotion, symbolizing
            spiritual enlightenment.
          </p>
        </div>
        <div className="order-2 lg:mx-14 lg:order-2 w-full lg:w-1/4 flex flex-col items-center justify-center text-center lg:mt-12 ">
          <div className="abc">
            <img
              className="md:mt-20 h-[550px] md:h-auto shadow-2xl"
              loading="lazy"
              src={currentData.image}
              alt="main-image"
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
                alt="arati-image"
              />
            </div>
          </Draggable>

          <button
            onClick={() => handleTogglePlay()}
            className="flex mx-auto bg-[#A0E7E5] h-12 w-12 border-0 p-2 focus:outline-none hover:bg-[#4be4bd] rounded-full text-lg :hover cursor-pointer"
          >
            <img src={playing ? pauseimage : play} alt="pause-play-image" />
          </button>
        </div>
        <div className="order-last w-1/5 lg:w-1/4 flex flex-col items-center lg:items-start justify-end md:justify-center text-center lg:text-left md:mt-8 md:mr-8">
          <button
            onClick={() => playBell()}
            className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-[#A0E7E5] mb-2 hover:cursor-pointer hover:bg-[#4be4bd] p-3"
          >
            <img src={bell} alt="bell-image" />
          </button>
          <h2 className="text-black mb-2 font-normal">{"Ghanti"}</h2>
          <p className="hidden md:block text-gray-700 leading-normal mb-8">
            Bells are believed to ward off evil spirits and help focus the mind
            on the divine.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
