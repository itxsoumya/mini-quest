

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"


export default function CarouselDemo() {

    const ImagesArray = [
        "https://c0.wallpaperflare.com/preview/89/272/1016/school-young-adult-education-graduation.jpg",
        "https://brescia.uwo.ca/communications/img/wallpaper_01.jpg",
        "https://c0.wallpaperflare.com/preview/89/272/1016/school-young-adult-education-graduation.jpg",
        "https://c0.wallpaperflare.com/preview/89/272/1016/school-young-adult-education-graduation.jpg",
        "https://c0.wallpaperflare.com/preview/89/272/1016/school-young-adult-education-graduation.jpg",
        

    ]
    return (

        <Carousel className="w-full" >
            <CarouselContent>
                {ImagesArray.map((image, _index) => (
                    <CarouselItem key={image}>
                        <div className="p- max-h-[20%] w-[100%]">
                            <Card>
                                <CardContent className="flex aspect-auto items-center justify-center p-1">
                                    {/* <span className="text-4xl font-semibold">{index + 1}</span> */}
                                    <img className="rounded-md  max-h-[30%] w-[100%]" src={image} alt="" />
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    )
}


