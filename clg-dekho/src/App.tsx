
import { ThemeProvider, useTheme } from "@/components/ThemeProvider"
import { Button } from "./components/ui/button"
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


function RoughPage() {
  const { theme, setTheme } = useTheme()
  return (
    <div className="grow flex justify-center items-center text-xl flex-col gap-2">
      This Project is under development :)
      {theme === 'dark' ? (
        <Button onClick={() => {
          setTheme('light')

        }}>Test Light</Button>
      ) : (
        <Button onClick={() => {
          setTheme('dark')

        }}>Test Dark</Button>
      )}

    </div>
  )
}

export default App
