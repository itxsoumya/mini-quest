
import { ThemeProvider, useTheme } from "@/components/ThemeProvider"
import { Button } from "./components/ui/button"


function App() {
  
  

  return (
   <ThemeProvider defaultTheme='dark' storageKey="vite-ui-theme">
    
    <Main/>
   </ThemeProvider>
  )
} 

function Main(){
  const {theme,setTheme} =useTheme()
  return(
    <div className="flex flex-col bg-whitee min-h-screen">
      <div className="border-b border-gray-700 p-2 text-center text-2xl">Clg Dekho.</div>
      <div className="grow flex justify-center items-center text-xl flex-col gap-2">
          This Project is under development :)
          {theme==='dark'?(
            <Button onClick={()=>{
              setTheme('light')
             
            }}>Test Light</Button>
          ):(
            <Button onClick={()=>{
              setTheme('dark')
              
            }}>Test Dark</Button>
          )}

      </div>
      <div className="border-t-[1px] border-gray-800 p-2 text-center text-base">
        Let't protect students from scam
      </div>
    </div>
  )
}

export default App
