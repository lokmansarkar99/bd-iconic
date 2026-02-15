"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Swiper CSS
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Images
import banner_2 from "@/assets/banner/banner-2.jpg";
import banner_3 from "@/assets/banner/banner-3.jpg";
import banner_4 from "@/assets/banner/banner-4.jpg";
import banner_5 from "@/assets/banner/banner-5.jpg";
import banner_6 from "@/assets/banner/banner-6.jpg";
import banner_7 from "@/assets/banner/banner-7.jpg";
import banner_8 from "@/assets/banner/banner-8.jpg";
import banner_9 from "@/assets/banner/banner-9.jpg";
import Image from "next/image";

const HeroSection = () => {
  const slides = [
    // banner_9,
    // banner_8,
    // banner_6,
    banner_5,
    banner_2,
    banner_3,
    banner_4,
    banner_7,
  ];

  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="w-full"
      >
        {slides.map((image, index) => (
          <SwiperSlide key={index}>
  <div className="relative w-full h-[400px] md:h-[500px]">
    <Image
      src={image}
      alt="Banner"
      fill
      className="object-cover"
      priority={index === 0}
    />
  </div>
</SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroSection;
