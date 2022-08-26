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
import { FaFacebookF, FaTwitter, FaGooglePlusG } from "react-icons/fa";

const SectionSix = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/testimonials", { method: "GET" })
      .then((res) => res.json())
      .then((res) => {
        setTestimonials(res);
        console.log(res);
      });
  }, []);

  return (
    <div className="ml-[300px] my-56">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={30}
        totalSlides={3}
        visibleSlides={1}
        step={1}
        dragStep={1}
        className="my-20"
      >
        <Slider>
          {testimonials.map((testimonial) => (
            <Slide>
              <div className="flex flex-col items-center max-w-[900px] text-center gap-4">
                <div>
                  <img src={testimonial.asset.url} />
                </div>
                <div>
                  <h3 className="subtitle">{testimonial.name}</h3>
                  <p className="bread">{testimonial.content}</p>
                </div>
                <div>
                  <div className="flex gap-4">
                    {" "}
                    <FaFacebookF className="borderBox" />
                    <FaTwitter className="borderBox" />
                    <FaGooglePlusG className="borderBox" />
                  </div>
                </div>
              </div>
            </Slide>
          ))}
        </Slider>
        <div className="flex ml-[430px]">
          <ButtonBack className="h-4 w-4 bg-slate-100 mr-2"></ButtonBack>
          <ButtonNext className="h-4 w-4 bg-slate-100"></ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default SectionSix;
