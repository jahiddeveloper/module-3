import { Suspense } from "react";
import "./App.css";
import Countrys from "./Component/Country/Countrys";

const countrysPromise = fetch(`https://openapi.programming-hero.com/api/all`)
  .then((res) => res.json());

function App() {
  return (
    <>
      <h1>React world on the go..</h1>

      <Suspense fallback={<h2>Just a sec</h2>}>
        <Countrys countrysPromise = {countrysPromise}></Countrys>
      </Suspense>
    </>
  );
}

export default App;
