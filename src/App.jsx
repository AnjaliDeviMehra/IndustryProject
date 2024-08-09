import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { AITools } from "./components/AITools/AITools";
import { Demo } from "./components/Demo/Demo";
import { IndustryList } from "./components/IndustryList/IndustryList";
import CommentSummarizerPage from "./pages/CommentSummarizer/CommentSummarizerPage";
import "./App.scss";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Consultations from "./pages/Consultations/Consultations";
import PurchaseInsights from "./pages/PurchaseInsights/PurchaseInsights";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main__wrapper">
          <Nav />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/industry" element={<IndustryList />} />
            <Route path="/tools" element={<AITools />} />
            <Route path="/demo" element={<CommentSummarizerPage />} />
            <Route path="/demo-insights" element={<PurchaseInsights />} />
            <Route path="/consultations" element={<Consultations />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
