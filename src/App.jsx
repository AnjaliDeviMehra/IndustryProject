import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { AITools } from "./components/AITools/AITools";
import { Demo } from "./components/Demo/Demo";
import { IndustryList } from "./components/IndustryList/IndustryList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/industry" element={<IndustryList />} />
          <Route path="/tools" element={<AITools />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
