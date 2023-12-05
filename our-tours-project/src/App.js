import { useState } from "react";
import Tours from "./Tours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

function App() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  return (
    <main>
      <Tours />
      <Loading />
    </main>
  );
}

export default App;
