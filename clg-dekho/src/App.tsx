
import { ThemeProvider } from "@/components/ThemeProvider"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"


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
      <Navbar />

      <div className="grow">
        <Home />
      </div>

      <div className="border-t-[1px] border-gray-800 p-2 text-center text-base">
        Let's protect students from scam
      </div>
    </div>
  )
}




export default App
