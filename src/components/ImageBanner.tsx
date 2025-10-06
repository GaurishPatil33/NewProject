"use client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const bannerImages = [
  {
    id: 1,
    imgMob:
      "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-Library/default/dwf7ac20c1/HomePage/Banners/best-buy/Mob_Banner_Saree.jpg",
    imgDesk:
      "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-Library/default/dw27e87c78/HomePage/Banners/best-buy/Web_banner_Saree.jpg",
  },
  {
    id: 2,
    imgMob:
      "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-Library/default/dw9e93fd14/HomePage/Banners/best-buy/Mob_Banner_Kurta.jpg",
    imgDesk:
      "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-Library/default/dw9e93fd14/HomePage/Banners/best-buy/Web_Banner_Kurta.jpg",
  },
  {
    id: 3,
    imgMob:
      "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-Library/default/dwd61f58f6/HomePage/Banners/best-buy/Mob_Banner_USKD.jpg",
    imgDesk:
      "https://www.taneira.com/dw/image/v2/BKMH_PRD/on/demandware.static/-/Sites-Taneira-Library/default/dwd61f58f6/HomePage/Banners/best-buy/Web_Banner_USKD.jpg",
  },
];
const bannerImages2 = [
  {
    id: 1,
    img: "/banner/1.png",
  },
  {
    id: 2,
    img: "/banner/2.png",
  },
  {
    id: 3,
    img: "/banner/3.png",
  },
  {
    id: 4,
    img: "/banner/4.png",
  },
  {
    id: 5,
    img: "/banner/5.png",
  },
];

export const ImageBanner = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [paused, setPaused] = useState(false);

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Auto slide
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative w-full mt-2 md:mt-2 min-h-[500px]  max-h-[600px] "
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
      <Link href={`/listingpage`} >
        <motion.img
          key={current}
          src={
            isMobile
            ? bannerImages[current].imgMob
            : bannerImages[current].imgDesk
          }
          alt={`Banner ${current + 1}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full object-cover"
          />
          </Link>
      </AnimatePresence>

      {/* Left Arrow */}
      <button
        aria-label="Previous Banner"
        onClick={() =>
          setCurrent((prev) => (prev <= 0 ? bannerImages.length - 1 : prev - 1))
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-gray-900 p-2 rounded-full transition z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        aria-label="Next Banner"
        onClick={() =>
          setCurrent((prev) =>
            prev === bannerImages.length - 1 ? 0 : prev + 1
          )
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/70 text-gray-900 p-2 rounded-full transition z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {bannerImages.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${
              i === current ? "bg-gray-900 w-5" : "bg-white/70 w-2"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export const ImageBanner2 = () => {
  return (
    <div className="w-full relative group">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={{
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        }}
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        className=" overflow-hidden"
      >
        {bannerImages2.map((slide, i) => (
          <SwiperSlide key={i}>
            <Link href={`/listingPage`} className="relative w-full aspect-[12/15]">
              <img
                src={slide.img}
                alt={slide.id.toString()}
                className="w-full h-full object-cover"
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Prev Button */}
      <button className="swiper-prev flex absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 backdrop-blur-sm size-8 md:size-11  items-center justify-center rounded-full shadow-lg hover:bg-white transition">
        <ChevronLeft className="w-5 h-5" />
      </button>

      {/* Custom Next Button */}
      <button className="swiper-next flex absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/30 backdrop-blur-sm size-8 md:size-11  items-center justify-center rounded-full shadow-lg hover:bg-white transition">
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};
