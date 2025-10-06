"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CategoryListProps {
  title: string;
  data: { slug: string; title: string; image: string }[];
  basePath?: string;
  displayType?: "grid" | "slider";
}

// const fadeInUp = {
//   hidden: { opacity: 0, y: 30 },
//   show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
// };

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeInUp = {
  hidden: { opacity: 0 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface CategoryListProps {
  title: string;
  data: { slug: string; title: string; image: string }[];
  basePath?: string;
  displayType?: "grid" | "slider";
  itemsPerPage?: number;
}

// const ITEMS_PER_PAGE = 4;

// Page slide animation (for mobile)
const pageVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 200 : -200,
    opacity: 0,
    position: "absolute" as const,
  }),
  center: {
    x: 0,
    opacity: 1,
    position: "relative" as const,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -200 : 200,
    opacity: 0,
    position: "absolute" as const,
  }),
};

const CategoryList = ({
  title,
  data,
  basePath,
  displayType = "slider",
  itemsPerPage = 4,
}: CategoryListProps) => {
  // for md+ scroll
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
    if (displayType !== "slider") return;
    checkScroll();
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    window.addEventListener("resize", checkScroll);
    return () => {
      el.removeEventListener("scroll", checkScroll);
      window.removeEventListener("resize", checkScroll);
    };
  }, [displayType]);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { clientWidth } = scrollRef.current;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -clientWidth : clientWidth,
      behavior: "smooth",
    });
  };

  // for sm pagination
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const currentItems = data.slice(start, end);

  const nextPage = () => {
    if (page < totalPages - 1) setPage([page + 1, 1]);
  };

  const prevPage = () => {
    if (page > 0) setPage([page - 1, -1]);
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="relative  py-3 md:py-6 mx-auto px-2 md:px-6">
        {/* Section Title */}
        <motion.h2
          variants={fadeInUp}
          className="text-xl md:text-2xl font-bold text-center mb-3 md:mb-4 bg-gradient-to-r from-red-800 to-red-400 bg-clip-text text-transparent"
        >
          {title}
        </motion.h2>

        {/* sliderlayout */}
        {displayType === "slider" && (
          <div className="relative ">
            <motion.div
              variants={pageVariants}
              initial="enter"
              animate="center"
              exit="exit"
              ref={scrollRef}
              className="flex items-center justify overflow-x-auto gap-6 snap-x snap-mandatory scroll-smooth scrollbar-hide"
            >
              {data.map((cat) => (
                <motion.div
                  key={cat.slug}
                  variants={fadeInUp}
                  className="relative snap-start flex-shrink-0 aspect-[4/5] max-h-50 max-w-50 rounded-tl-2xl rounded-br-2xl overflow-hidden"
                >
                  <Link
                    href={`${basePath ? basePath : "/listingPage"}?cat=${
                      cat.slug
                    }`}
                  >
                    <motion.img
                      src={cat.image}
                      alt={cat.title}
                      initial={{ opacity: 0, scale: 1.09 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.2, delay: 0.1, ease: "easeIn" }}
                      className="h-full object-cover  hover:scale-110 transition-transform"
                    />
                    <div className="absolute inset-0 bg-black/30 rounded-tl-2xl rounded-br-2xl"></div>
                    <motion.p
                      initial={{ opacity: 0, scale: 1.09, x: -20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.4, ease: "easeIn" }}
                      className="absolute bottom-2 left-2  text-lg text-white font-semibold"
                    >
                      {cat.title}
                    </motion.p>
                  </Link>
                </motion.div>
              ))}
            </motion.div>

            {/* Desktop arrows */}
            {showLeft && (
              <button
                onClick={() => scroll("left")}
                className=" absolute top-1/2 left-2 -translate-y-1/2 bg-white/40 shadow-md rounded-full p-2 hover:bg-gray-100"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
            )}
            {showRight && (
              <button
                onClick={() => scroll("right")}
                className=" absolute top-1/2 right-2 -translate-y-1/2 bg-white/40 shadow-md rounded-full p-2 hover:bg-gray-100"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            )}
          </div>
        )}

        {/* gridlayout */}
        {displayType === "grid" && (
          <div className="relative min-h-[200px] ">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={page}
                custom={direction}
                variants={pageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 px-2"
              >
                {currentItems.map((cat) => (
                  <motion.div
                    key={cat.slug}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                    className="relative flex-shrink-0 min-h-48 max-h-58 rounded-tl-2xl rounded-br-2xl overflow-hidden"
                  >
                    <Link
                      href={`${basePath ? basePath : "/listingPage"}?cat=${
                        cat.slug
                      }`}
                    >
                      <motion.img
                        src={cat.image}
                        alt={cat.title}
                        initial={{ opacity: 0, scale: 1.09 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.1,
                          ease: "easeIn",
                        }}
                        className="w-full h-50 object-cover  hover:scale-110 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/30 rounded-tl-2xl rounded-br-2xl"></div>
                      <motion.p
                        initial={{ opacity: 0, scale: 1.09, x: -20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: 0.4,
                          ease: "easeInOut",
                        }}
                        className="absolute bottom-2 left-2  text-lg text-white font-semibold"
                      >
                        {cat.title}
                      </motion.p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setPage([i, i > page ? 1 : -1])}
                    className={`w-2 h-2 rounded-full ${
                      i === page ? "bg-gray-600 w-3 h-2.5" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
            )}

            {/* Arrows (mobile) */}
            {page > 0 && (
              <button
                onClick={prevPage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 shadow-md rounded-full p-2 hover:bg-gray-200"
              >
                <ChevronLeft className="w-5 h-5 text-black" />
              </button>
            )}
            {page < totalPages - 1 && (
              <button
                onClick={nextPage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 shadow-md rounded-full p-2 hover:bg-gray-200"
              >
                <ChevronRight className="w-5 h-5 text-black" />
              </button>
            )}
          </div>
        )}
      </div>
    </motion.section>
  );
};

export default CategoryList;

export const CategoryListType2 = ({
  title,
  data,
  basePath = "/listingPage",
  displayType = "slider",
}: CategoryListProps) => {
  // ====== SLIDER STATE ======
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<any>(null);

  const handleInit = (swiper: any) => {
    swiperRef.current = swiper;
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  const handleSlideChange = (swiper: any) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  // ====== GRID STATE ======
  const [page, setPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  // calculate responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) setItemsPerPage(16);
      else if (window.innerWidth >= 768) setItemsPerPage(9);
      else setItemsPerPage(4);
    };
    updateItemsPerPage();
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = page * itemsPerPage;
  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  const nextPage = () => setPage((p) => Math.min(p + 1, totalPages - 1));
  const prevPage = () => setPage((p) => Math.max(p - 1, 0));

  return (
    <section className="py-4 md:py-6 px-3 md:px-6">
      {/* Title */}
      <motion.h2
        variants={fadeInUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-xl md:text-2xl font-bold text-center mb-4 bg-gradient-to-r from-red-800 to-red-400 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>

      {/* ===== SLIDER VIEW ===== */}
      {displayType === "slider" && (
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={2}
            spaceBetween={16}
            loop={true}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            onInit={handleInit}
            onSlideChange={handleSlideChange}
            breakpoints={{
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
            }}
            className="overflow-hidden"
          >
            {data.map((cat) => (
              <SwiperSlide key={cat.slug}>
                <Link key={cat.slug} href={`${basePath}?cat=${cat.slug}`}>
                  <div className="relative rounded-tl-2xl rounded-br-2xl overflow-hidden group aspect-[4/5]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-black/30"></div>
                    <p className="absolute bottom-2 left-2 text-white text-lg font-semibold drop-shadow-md">
                      {cat.title}
                    </p>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
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

          {/* Pagination Below */}
          <div className="custom-pagination  justify-center mt-3 hidden space-x-2"></div>
        </div>
      )}

      {/* ===== GRID VIEW ===== */}
      {displayType === "grid" && (
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {currentItems.map((cat) => (
                <Link key={cat.slug} href={`${basePath}?cat=${cat.slug}`}>
                  <div className="relative rounded-tl-2xl rounded-br-2xl overflow-hidden group aspect-[4/5]">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-black/30"></div>
                    <p className="absolute bottom-2 left-2 text-white text-lg font-semibold drop-shadow-md">
                      {cat.title}
                    </p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-3 gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === page ? "bg-gray-800 scale-125" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Nav Arrows */}
          {page > 0 && (
            <button
              onClick={prevPage}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md rounded-full p-2 z-10 transition"
            >
              <ChevronLeft className="w-5 h-5 text-black" />
            </button>
          )}
          {page < totalPages - 1 && (
            <button
              onClick={nextPage}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white shadow-md rounded-full p-2 z-10 transition"
            >
              <ChevronRight className="w-5 h-5 text-black" />
            </button>
          )}
        </div>
      )}
    </section>
  );
};
