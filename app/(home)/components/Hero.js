"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { heroSlides } from "@/localDatabase/HeorData";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Hero() {
  // autoplay plugin config
  const autoplay = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false }) // প্রতি ৩ সেকেন্ডে auto slide
  );

  return (
    <section className=" bg-blue-500 rounded-md pt-5 px-2 md:px-20 w-full overflow-hidden">
      <Carousel
        plugins={[autoplay.current]}
        className="w-full"
        opts={{
          loop: true, // infinite loop on
        }}
      >
        <CarouselContent>
          {heroSlides.map((slide) => (
            <CarouselItem key={slide.id}>
              <div
                className="h-[500px] flex flex-col items-center justify-center text-center text-white bg-cover bg-center rounded-md"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                {/* <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mt-4">{slide.subtitle}</p>
                <Button className="mt-6 bg-orange-500 hover:bg-orange-600">
                  {slide.cta}
                </Button> */}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
