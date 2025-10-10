"use client";
import { Product } from "@/lib/types";
import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useVideoStore } from "@/lib/store/videoStore";
import { ProductCard, ProductCardType2 } from "./ProductCard";
import { FaFire } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { LuBadgeIndianRupee } from "react-icons/lu";
import { MdFiberNew } from "react-icons/md";
import { TbCircleDashedPercentage } from "react-icons/tb";
import { useRouter } from "next/navigation";

// Example animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
export const ProductList = ({
  products,
  title,
}: {
  products: Product[];
  title?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };
  // console.log(products);

  // const { activeId, setActiveId } = useVideoStore();

  // useEffect(() => {
  //   if (!products.length) return;

  //   let currentIndex = products.findIndex((p) => p.id === activeId);
  //   if (currentIndex === -1) currentIndex = 0;

  //   const timer = setInterval(() => {
  //     const nextIndex = (currentIndex + 1) % products.length;
  //     setActiveId(products[nextIndex].id);
  //     currentIndex = nextIndex;
  //   }, 4000);

  //   return () => clearInterval(timer);
  // }, [activeId, products, setActiveId]);

  return (
    <div className="relative">
      {" "}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="bg-white py-3 md:py-6 mx-auto px-2 ">
          {/* Section Title */}
          <motion.h2
            variants={fadeInUp}
            className="text-xl md:text-2xl font-bold text-center  md:mb-4 bg-gradient-to-r from-red-800 to-red-400 bg-clip-text text-transparent"
          >
            {title}
          </motion.h2>
          <motion.div
            variants={containerVariants}
            ref={scrollRef}
            className="flex  overflow-x-auto gap-4 snap-x snap-mandatory scroll-smooth scrollbar-hide"
          >
            {products.map((p) => (
              <motion.div
                key={p.id}
                variants={fadeInUp}
                className="relative snap-start h-fit max-w-52 flex-shrink-0"
              >
                <ProductCard product={p} />
              </motion.div>
            ))}
          </motion.div>
          {/* Left/Right Arrows (Desktop only, auto-hide) */}
          {showLeft && (
            <button
              onClick={() => scroll("left")}
              className="flex absolute top-1/2 left-2 -translate-y-1/2 bg-white/60 shadow-md rounded-full p-1 md:p-2 hover:bg-gray-100"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
          )}
          {showRight && (
            <button
              onClick={() => scroll("right")}
              className="flex absolute top-1/2 right-2 -translate-y-1/2 bg-white/60 shadow-md rounded-full p-1 md:p-2 hover:bg-gray-100"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          )}
        </div>
      </motion.section>
    </div>
  );
};
export const ProductsGrid = ({
  products,
  title,
}: {
  products: Product[];
  title?: string;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
  };

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);

    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, []);

  const { activeId, setActiveId } = useVideoStore();

  useEffect(() => {
    if (!products.length) return;

    let currentIndex = products.findIndex((p) => p.id === activeId);
    if (currentIndex === -1) currentIndex = 0;

    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % products.length;
      setActiveId(products[nextIndex].id);
      currentIndex = nextIndex;
    }, 4000);

    return () => clearInterval(timer);
  }, [activeId, products, setActiveId]);

  return (
    <div className="relative">
      {/* <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      > */}
      <div className="bg-white py-3 md:py-6 mx-auto px-2 ">
        {/* Section Title */}
        <motion.h2
          variants={fadeInUp}
          className="text-xl md:text-2xl font-bold text-center  md:mb-4 bg-gradient-to-r from-red-800 to-red-400 bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>
        {/* mobile capsule filters */}
        <div className="md:hidden flex  items-center pl-2 mt-1 py-2 justify overflow-x-auto gap-2 snap-x snap-mandatory scroll-smooth scrollbar-hide -mb-2">
          {[
            {
              title: "Crazy Deal",
              key: "crazyDeal",
              icon: TbCircleDashedPercentage,
              color: "text-purple-400 border-purple-300 bg-purple-100",
            },
            {
              title: "New Arrivals",
              key: "newArriwals",
              icon: MdFiberNew,
              color: "text-blue-400 border-blue-300 bg-blue-100",
            },
            {
              title: "Best Sellers",
              key: "bestSellers",
              icon: FaFire,
              color: "text-orange-400 border-orange-300 bg-orange-100",
            },
            {
              title: "Under 5000",
              key: "under5000",
              icon: LuBadgeIndianRupee,
              color: "text-green-400 border-green-300 bg-green-100",
            },
            {
              title: "Trending",
              key: "trending",
              icon: FaArrowTrendUp,
              color: "text-red-400 border-red-300 bg-red-100",
            },
          ]
            .reverse()
            .map((item, i) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    router.push(`/listingpage/`);
                  }}
                  className={` flex items-center w-full justify-center rounded-full border px-2 py-1 gap-1 transition-all duration-150 text-[#900001]/70 bg-amber-900/20 hover:scale-105"
                  }`}
                >
                  <item.icon className="size-4" />
                  <div className=" text-xs font-semibold truncate">
                    {item.title}
                  </div>
                </div>
              );
            })}
        </div>
        <motion.div
          variants={containerVariants}
          ref={scrollRef}
          className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2"
        >
          {products.map((p) => (
            <motion.div
              key={p.id}
              variants={fadeInUp}
              className="relative snap-start h-fit  flex-shrink-0"
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      {/* </motion.section> */}
    </div>
  );
};

export const ProductListType2 = ({
  products,
  title,
}: {
  products: Product[];
  title?: string;
}) => {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const swiperRef = useRef<SwiperClass | null>(null);
  const slidesPerView = 2; // 👈 Change this dynamically if needed

  // Set the first product on mount
  useEffect(() => {
    if (products.length > 0) {
      setActiveId(products[0].id.toString());
      setCurrentIndex(0);
    }
  }, [products]);

  // 🔁 Handles moving to the next video or next slide set
  const handleNextVideo = () => {
    const nextIndex = currentIndex + 1;
    const currentSlideStart = swiperRef.current?.activeIndex || 0;
    const currentSlideEnd = currentSlideStart + slidesPerView - 1;

    if (nextIndex <= currentSlideEnd && nextIndex < products.length) {
      // ▶️ Move to next video in current view
      setCurrentIndex(nextIndex);
      setActiveId(products[nextIndex].id.toString());
    } else {
      // ⏩ Slide to next group or loop back
      const nextStartIndex = currentSlideEnd + 1;

      if (nextStartIndex < products.length) {
        swiperRef.current?.slideTo(nextStartIndex);
        setCurrentIndex(nextStartIndex);
        setActiveId(products[nextStartIndex].id.toString());
      } else {
        // 🔁 Loop back to first
        swiperRef.current?.slideTo(0);
        setCurrentIndex(0);
        setActiveId(products[0].id.toString());
      }
    }
  };

  return (
    <section className="py-4 md:py-6 px-3 md:px-6">
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-xl md:text-2xl font-bold text-center mb-1 bg-gradient-to-r from-red-800 to-red-400 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>

      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={slidesPerView}
          spaceBetween={16}
          loop={false}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          onInit={(swiper) => {
            swiperRef.current = swiper;
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);

            const startIndex = swiper.activeIndex;
            setCurrentIndex(startIndex);
            const id = products[startIndex]?.id?.toString();
            if (id) setActiveId(id);
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="overflow-hidden gap-2 "
        >
          {products.map((p, i) => (
            <SwiperSlide key={p.id}>
              <div data-product-id={p.id}>
                <ProductCard
                  product={p}
                  index={i}
                  // activeId={activeId}
                  // onVideoEnd={handleNextVideo} // 👈 callback
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation */}
        {!isBeginning && (
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md rounded-full p-2 z-10 transition"
          >
            <ChevronLeft className="w-5 h-5 text-black" />
          </button>
        )}
        {!isEnd && (
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md rounded-full p-2 z-10 transition"
          >
            <ChevronRight className="w-5 h-5 text-black" />
          </button>
        )}
      </div>
    </section>
  );
};
