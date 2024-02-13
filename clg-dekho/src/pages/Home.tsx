import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const Home = ()=>{
    return(
        <div className="bg-red-100v max-w-7xl mx-auto p-4">
            <div className="sm:text-6xl text-4xl font-semibold text-center pt-20 underline decoration-pink-500">
                Not Time. Choose Your College Wisely and Bravely.
            </div>
            {/* search section */}
            <div className="py-8">
                <div className="flex gap-2 max-w-4xl mx-auto">
                    <Input className="text-lg py-6" type="text" placeholder="Search your college..." /> <Button className="text-lg p-6">Search</Button>
                </div>
            </div>

            {/* list of college */}
            <div>
                <div className="flex gap-2 border-2 p-2 rounded-lg">
                    <div>
                        <img className="sm:w-60 sm:h-60 w- h-36 rounded-sm shadow-md" src="https://www.colgate.edu/sites/default/files/styles/optimized/public/2023-08/wallpaper_sunset_desktop.jpg?itok=tslDPST1" alt="" />
                    </div>
                    <div>
                        {/* title */}
                        <h2 className="text-2xl">College Of No where</h2>
                        <h3>this is famous for its stupid syllabus</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home