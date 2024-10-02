import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Toaster } from "./components/ui/sonner";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <App />
    <Toaster
      theme="light"
      position="top-center"
      richColors
      toastOptions={{
        duration: 1500,
      }}
    />
  </>
);
