'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { GrNext, GrPrevious } from "react-icons/gr";
import { FreeMode, Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';
import { useState } from 'react';

export type CoverFlowProps = {
  slides: React.ReactNode[];
  onSlideChange: (index: number) => void;
};

const CoverFlow: React.FC<CoverFlowProps> = ({ slides, onSlideChange }) => {
  const [playing, setPlaying] = useState(true);

  return (
    <div>
      <Swiper
        breakpoints={{
          0: {
            // For mobile devices, keep 3 slides but remove rotation
            slidesPerView: 3,
            coverflowEffect: {
              slideShadows: false,
              rotate: 0,
              stretch: 0,
              depth: 10,
              scale: 0.9,
            },
          },
          640: {
            slidesPerView: 3,
            coverflowEffect: {
              slideShadows: false,
              rotate: 35,
              stretch: 0,
              depth: 10,
              scale: 0.9,
            },
          },
        }}
        centeredSlides={true}
        spaceBetween={-22}
        centeredSlidesBounds={true}
        effect="coverflow"
        navigation = {{nextEl: '.video-next', prevEl: '.video-prev'}}
        modules={[FreeMode, Autoplay, EffectCoverflow, Navigation]}
        loop={true}
        normalizeSlideIndex={true}
        autoplay={playing ? { delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true } : false}
        onRealIndexChange={(swiper) => {
          onSlideChange(swiper.realIndex);
        }}
        className="max-w-full mx-auto"
      >
        {slides &&
          slides.map((slide, index) => (
            <SwiperSlide key={`Slider: ${index}`}>
              <div className="flex justify-center max-w-full">{slide}</div>
            </SwiperSlide>
          ))}
      </Swiper>
      <div className="w-full flex justify-center gap-2 pt-3 text-black">
        <button
          className="video-prev p-1 pr-4 rounded-md hover:scale-110 hover:text-secondary"
          onClick={() => setPlaying(false)}
        >
          <GrPrevious size={30} />
        </button>
        <button
          className="video-next p-1 pl-4 rounded-md hover:scale-110 hover:text-secondary"
          onClick={() => setPlaying(false)}
        >
          <GrNext size={30} />
        </button>
      </div>
    </div>
  );
};

export default CoverFlow;