import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import Bibliografi from "./pages/Bibliografi"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bibliografi" element={<Bibliografi />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
