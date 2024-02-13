
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

      
    </div>
  )
}




export default App
