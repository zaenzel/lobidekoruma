import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./pages/Error";
import Service from "./pages/Service";
import Contact from "./pages/Contact";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="service" element={<Service />} />
        <Route path="contact" element={<Contact />} />
      </Route>
      <Route path="*" index element={<Error />} />
    </Routes>
  );
}

export default App;
