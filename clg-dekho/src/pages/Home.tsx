import CollegeCard from "@/components/CollegeCard"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"


const Home = () => {
    return (
        <div className="bg-red-100v max-w-7xl mx-auto p-4">
            
            <div className="sm:text-6xl text-4xl font-semibold text-center sm:pt-20 py-12 underline decoration-pink-500">
                Not Again. Choose Your College Wisely and Bravely.
            </div>
            {/* search section */}
            <div className="py-8">
                <div className="flex gap-2 max-w-4xl mx-auto">
                    <Input className="text-lg py-6" type="text" placeholder="Search your college..." /> <Button className="text-lg p-6">Search</Button>
                </div>
            </div>

            {/* list of college */}
            <div className="max-w-5xl mx-auto flex flex-col gap-4">
                <CollegeCard/>
                <CollegeCard/>
                <CollegeCard/>
                <CollegeCard/>
                <CollegeCard/>
            </div>
        </div>
    )
}

export default Home