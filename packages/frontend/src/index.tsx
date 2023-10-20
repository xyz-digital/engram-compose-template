import ReactDOM from "react-dom/client";
import App from "./components/App";

new EventSource("/esbuild").addEventListener("change", () => {
  location.reload();
});

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
