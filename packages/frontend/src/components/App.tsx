import { sayHello } from "@engram-compose-template/utils";

import "./App.css";

export default function App() {
  sayHello();

  return (
    <div className="app">
      <figure>
        <img src="engram.png" alt="Engram Logo" />
        <figcaption>Build Faster. Together.</figcaption>
      </figure>

      <footer>
        Visit us at&nbsp;
        <a href="https://engram.sh">engram.sh</a>
      </footer>
    </div>
  );
}
