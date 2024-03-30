import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Review = () => {
  const data = [
    {
      description:
        "Absolutely amazed by the accuracy and efficiency of this health AI platform! It helped me diagnose my symptoms quickly and provided me with personalized recommendations.",
      icon: "../review1.jpeg",
    },
    {
      description:
        "As a busy professional, I don't always have time to visit a doctor for every little concern. This AI website has been a lifesaver! . Highly recommend!",
      icon: "../review2.jpeg",
    },
    {
      description:
        "I've always been skeptical of online health platforms, but this one truly impressed me. Not only did it accurately assess my symptoms, but it also offered insightful explanations and advice.s!",
      icon: "../review3.jpeg",
    },
    {
      description:
        "Living with a chronic condition can be challenging, but this health AI website has made it much easier to manage. I'm grateful for the support it provides.",
      icon: "../review4.jpeg",
    },
    {
      description:
        "Being proactive about my health is important to me, and this AI website makes it effortless.it offers comprehensive tools to help me stay on top of my well-being. I couldn't ask for more!",
      icon: "../review5.jpeg",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="w-3/4 m-auto">
      <div className="col-md-12 text-center mt-[100px]">
        <h2 className="text-4xl text-gray-100 font-semibold ">TESTIMONIALS</h2>
        <p className=" text-gray-100 mb-10 text-xl mt-8">
          {" "}
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt non
          ipsa molestiae, ab cupiditate expedita error iusto molestias
          laboriosam ullam, similique, deleniti quasi sequi facilis. Eveniet
          fugit illum perferendis atque?
        </p>
      </div>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.description}
              className="bg-dgreen h-[450px] text-white rounded-xl text-center"
            >
              <div className="h-56 bg-dgreen flex justify-center items-center rounded-t-xl">
                <img src={d.icon} alt="" className="h-44 w-44 rounded-full" />
              </div>

              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.description}</p>

                {/* <button className='bg-gray-500 text-white text-lg px-6 py-1 rounded-xl'>Read More</button> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};
