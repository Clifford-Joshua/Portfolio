import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home page/Home";
import About from "./Pages/About Page/About";
import Work from "./Pages/Work Page/Work";
import Service from "./Pages/Service/Service";
import SharedPage from "./Shared/SharedPage";
import Contact from "./Pages/Contact Page/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedPage />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
