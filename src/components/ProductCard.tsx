"use client";
import { useCartStore } from "@/lib/store/cartStore";
import { useToast } from "@/lib/store/toast";
import { useVideoStore } from "@/lib/store/videoStore";
import { Product } from "@/lib/types";
import { motion, useInView } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { SwiperClass } from "swiper/react";

export const ProductCard = ({
  product,
  index,
}: {
  product: Product;
  index?: number;
}) => {
  const [showVideo, setShowVideo] = useState(false);
  // const [isPlaying, setIsPlaying] = useState(false);
  const timeRef = useRef<NodeJS.Timeout | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, {
    // margin: "-10% 0px -10% 0px",
    margin: " 0px",
    amount: 0.8,
    once: false,
    //  threshold: 0.7, // 👈 play when 70% visible
    // triggerOnce: false,
  });
  const {
    // wishlist,
    isInWishlist,
    isInCart,
    toggleWishlist,
    addToCart,
    removeFromCart,
  } = useCartStore();

  const { showToast } = useToast();
  const { activeId, setActiveId, visibleIds, setVisibleIds } = useVideoStore();
  const router = useRouter();

  // 🎥 Manage playback based on view & active state
  useEffect(() => {
    if (!videoRef.current) return;

    // Clear old timers when effect runs
    if (timeRef.current) {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }

    if (isInView) {
      // Immediately mark as active
      setActiveId(product.id.toString());

      timeRef.current = setTimeout(() => {
        if (videoRef.current) {
          setShowVideo(true);
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => {});

          // Stop vid after 4sec
          timeRef.current = setTimeout(() => {
            // ✅ No need to check stale activeId here
            if (videoRef.current) {
              videoRef.current.pause();
              setShowVideo(false);
            }
          }, 6000);
        }
      }, 1100);
    } else {
      // Reset when out of view
      if (activeId === product.id.toString()) {
        setActiveId(null);
      }
      setShowVideo(false);
      videoRef.current.pause();
    }

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
        timeRef.current = null;
      }
    };
  }, [isInView, product.id, setActiveId]);

  const handleWishlistToggle = () => {
    toggleWishlist(product);
    if (isInWishlist(product.id)) {
      showToast("Added to Wishlist ❤️");
    } else {
      showToast("Removed from Wishlist💔");
    }
  };

  const handleCartToggle = () => {
    if (isInCart(product.id)) {
      showToast("Removed from Cart 🛒");
      removeFromCart(product.id);
    } else {
      showToast("Adde  to Cart 🛒");
      addToCart(product);
    }
  };

  return (
    <div
      ref={cardRef}
      data-product-id={product.id}
      className="min-w-40 h-fit  px-1 mt-2 curspo"
      // onMouseEnter={handleStart}
      // onMouseLeave={handleStop}
      // onTouchStart={handleStart}
      // onTouchEnd={handleStop}
      // onTouchCancel={handleStop}
    >
      <div className=" relative rounded-tr-3xl xs:px-4 shadow-lg rounded-bl-3xl overflow-hidden ">
        <div
          className="relative w-full min-h-80  md:h-120 hover:scale-105  "
          onClick={() => router.push(`/product/${product.id}`)}
        >
          <motion.img
            key="image"
            src={product.images[0]}
            alt={product.title}
            loading="lazy"
            initial={{ opacity: 1 }}
            animate={{ opacity: showVideo ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-cover "
          />
          {product.video && (
            <motion.video
              key="video"
              ref={videoRef}
              preload="none"
              src={product.video}
              muted
              loop={false}
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              controls={false}
              controlsList="nodownload nofullscreen noremoteplayback"
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: showVideo ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover hover:scale-102 "
              onEnded={() => setShowVideo(false)}
            />
          )}
        </div>

        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          // whileInView={{ y: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-fit rounded-full flex justify-center gap-3 p-2"
        >
          <button
            className=" rounded-full bg-white/70 p-1.5  shadow-sm"
            onClick={handleWishlistToggle}
          >
            <Heart
              className={`w-4 h-4 text-gray-700 ${
                isInWishlist(product.id) ? "fill-current text-red-500" : ""
              }`}
            />
          </button>
          <button
            onClick={handleCartToggle}
            className=" rounded-full bg-white/70 p-1.5 shadow-sm"
          >
            <ShoppingCart
              className={`w-4 h-4 text-gray-700 ${
                isInCart(product.id) ? "fill-red-500  " : ""
              }`}
            />
          </button>
        </motion.div>
      </div>
      <div
        className=" px-1 mt-1"
        onClick={() => router.push(`/product/${product.id}`)}
      >
        <span className=" text-gray-500 text-sm font-medium line-clamp-2 text-center">
          {product.title}
        </span>
        <div className=" flex gap-2 items-center justify-center">
          <div className=" text-gray-900 text-lg font-medium">
            ₹{product.price}
          </div>
          <span className=" text-gray-500 text-sm line-through  ">
            ₹{product.price + (product.discount * product.price) / 100}
          </span>
          <span className=" text-xs flex items-center justify-center text-green-500">
            {product.discount}%Off
          </span>
        </div>
      </div>
    </div>
  );
};

export const ProductCardType2 = ({
  product,
  index,
  activeId,
  onVideoEnd,
}: {
  product: Product;
  index: number;
  activeId: string | null;
  onVideoEnd: () => void;
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(cardRef, {
    // margin: "-10% 0px -10% 0px",
    margin: " 0px",
    amount: 0.8,
    once: false,
    //  threshold: 0.7, // 👈 play when 70% visible
    // triggerOnce: false,
  });

  useEffect(() => {
    if (!videoRef.current) return;

    let timer: NodeJS.Timeout;
    const isActive = activeId === product.id.toString();

    if (isActive) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true;
      videoRef.current
        .play()
        .catch(() => console.warn("Autoplay might be blocked"));

      timer = setTimeout(() => {
        videoRef.current?.pause();
        onVideoEnd(); // 👉 trigger next video or slide
      }, 8000);
    } else {
      videoRef.current.pause();
    }

    return () => clearTimeout(timer);
  }, [activeId, product.id, onVideoEnd]);

  const {
    // wishlist,
    isInWishlist,
    isInCart,
    toggleWishlist,
    addToCart,
    removeFromCart,
  } = useCartStore();

  const { showToast } = useToast();
  const { setActiveId, visibleIds, setVisibleIds } = useVideoStore();
  const router = useRouter();

  const handleWishlistToggle = () => {
    toggleWishlist(product);
    if (isInWishlist(product.id)) {
      showToast("Added to Wishlist ❤️");
    } else {
      showToast("Removed from Wishlist💔");
    }
  };

  const handleCartToggle = () => {
    if (isInCart(product.id)) {
      showToast("Removed from Cart 🛒");
      removeFromCart(product.id);
    } else {
      showToast("Adde  to Cart 🛒");
      addToCart(product);
    }
  };
  return (
    <div
      // ref={cardRef}
      data-product-id={product.id}
      className="min-w-40 h-fit  px-1 mt-2 curspo"
      // onMouseEnter={handleStart}
      // onMouseLeave={handleStop}
      // onTouchStart={handleStart}
      // onTouchEnd={handleStop}
      // onTouchCancel={handleStop}
    >
      <div className=" relative rounded-tr-3xl xs:px-4 shadow-lg rounded-bl-3xl overflow-hidden ">
        <div
          className="relative w-full min-h-70 md:h-100 hover:scale-105  "
          onClick={() => router.push(`/product/${product.id}`)}
        >
          <motion.img
            key="image"
            src={product.images[0]}
            alt={product.title}
            loading="lazy"
            initial={{ opacity: 1 }}
            animate={{ opacity: showVideo ? 0 : 1 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 w-full h-full object-cover "
          />
          {product.video && (
            <motion.video
              key="video"
              ref={videoRef}
              preload="none"
              src={product.video}
              muted
              loop={false}
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              controls={false}
              controlsList="nodownload nofullscreen noremoteplayback"
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              animate={{ opacity: showVideo ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full object-cover hover:scale-102 "
              onEnded={() => setShowVideo(false)}
            />
          )}
        </div>

        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          // whileInView={{ y: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-fit rounded-full flex justify-center gap-3 p-2"
        >
          <button
            className=" rounded-full bg-white/70 p-1.5  shadow-sm"
            onClick={handleWishlistToggle}
          >
            <Heart
              className={`w-4 h-4 text-gray-700 ${
                isInWishlist(product.id) ? "fill-current text-red-500" : ""
              }`}
            />
          </button>
          <button
            onClick={handleCartToggle}
            className=" rounded-full bg-white/70 p-1.5 shadow-sm"
          >
            <ShoppingCart
              className={`w-4 h-4 text-gray-700 ${
                isInCart(product.id) ? "fill-red-500  " : ""
              }`}
            />
          </button>
        </motion.div>
      </div>
      <div
        className=" px-1 mt-1"
        onClick={() => router.push(`/product/${product.id}`)}
      >
        <span className=" text-gray-500 text-sm font-medium line-clamp-2 text-center">
          {product.title}
        </span>
        <div className=" flex gap-2 items-center justify-center">
          <div className=" text-gray-900 text-lg font-medium">
            ₹{product.price}
          </div>
          <span className=" text-gray-500 text-sm line-through  ">
            ₹{product.price + (product.discount * product.price) / 100}
          </span>
          <span className=" text-xs flex items-center justify-center text-green-500">
            {product.discount}%Off
          </span>
        </div>
      </div>
    </div>
  );
};



