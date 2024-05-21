import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import DownloadButton from "./components/Download";
import GoogleReCaptchaV2 from "./components/Capchta";
import DatePicker from "react-datepicker";
function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [count, setCount] = useState(0);

  return <>learn react................
  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  </>;
}

export default App;
