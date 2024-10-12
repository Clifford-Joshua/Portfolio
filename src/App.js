import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home page/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
