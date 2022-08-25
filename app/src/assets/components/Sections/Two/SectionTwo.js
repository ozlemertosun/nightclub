import React from "react";
import { useEffect, useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const SectionTwo = () => {
  const [events, setEvents] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/events", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setEvents(res);
        console.log(res);
      });
  }, []);

  return (
    <div className="max-w-[1150px] text-red-500 m-auto">
      {events ? (
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={80}
          totalSlides={6}
          visibleSlides={2}
          step={2}
          dragStep={2}
          className="my-48 "
        >
          <Slider>
            {events.map((event) => (
              <Slide>
                <img src={event.asset.url} alt="" />
              </Slide>
            ))}
          </Slider>
          <div className="flex justify-center">
            <ButtonBack className="h-4 w-4 bg-slate-100 mr-2"></ButtonBack>
            <ButtonNext className="h-4 w-4 bg-slate-100"></ButtonNext>
          </div>
        </CarouselProvider>
      ) : (
        "loading..."
      )}
    </div>
  );
};

export default SectionTwo;
