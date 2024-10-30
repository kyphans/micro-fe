import App from './App';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import '../styles/globals.css';


// ReactDOM.render(<App />, document.getElementById('root'));

const container = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(container).render(
  <App />
);