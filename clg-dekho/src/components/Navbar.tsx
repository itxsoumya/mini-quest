import { useTheme } from "./ThemeProvider"



const Navbar = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div className="border-b borderr-gray-600 p-2 py-3 text-center text-2xl shadow-md sticky top-0 backdrop-blur-sm z-50">
            <div className="flex max-w-7xl mx-auto">
                <div className="cursor-pointer flex justify-center items-center">
                    {theme === 'dark' ? (

                        <svg onClick={()=>setTheme('light')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                        </svg>


                    ) : (
                        <svg onClick={()=>setTheme('dark')} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                        </svg>

                    )}
                </div>
                <div className="grow"><span className="bg-orange-600 p-1 rounded-lg shadow-md text-white">College</span> Dekho</div>
                <div className="cursor-pointer flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
</svg>


                </div>
            </div>
        </div>
    )
}


export default Navbar