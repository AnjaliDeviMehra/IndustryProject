import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { AITools } from "./components/AITools/AITools";
import { Demo } from "./components/Demo/Demo";
import { IndustryList } from "./components/IndustryList/IndustryList";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/industry" element={<IndustryList />} />
          <Route path="/tools" element={<AITools />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
