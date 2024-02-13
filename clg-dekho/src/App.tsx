
import { ThemeProvider } from "@/components/ThemeProvider"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CollegePage from "./pages/College"


function App() {



  return (
    <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">

      <Main />
    </ThemeProvider>
  )
}

function Main() {

  return (
    <div className="flex flex-col bg-whitee min-h-screen">
      <BrowserRouter>
        <Navbar />

        <div className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/college" element={<CollegePage/>} />
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  )
}




export default App
