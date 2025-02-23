'use client';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { GrNext, GrPrevious } from "react-icons/gr";
import { FreeMode, Autoplay, EffectCoverflow, Navigation } from 'swiper/modules';


export type CoverFlowProps = {
  slides: React.ReactNode[];
  onSlideChange: (index: number) => void;
};

const CoverFlow: React.FC<CoverFlowProps> = ({ slides, onSlideChange }) => {
  return (
    <div>
      <Swiper
        coverflowEffect={{
          slideShadows: false,
          rotate: 35,
          stretch: 25,
          depth: 10,
          scale: 0.9,
        }}
        centeredSlides={true}
        spaceBetween={1}
        centeredSlidesBounds={true}
        slidesPerView={3}
        effect="coverflow"
        navigation = {{nextEl: '.video-next', prevEl: '.video-prev'}}
        modules={[FreeMode, Autoplay, EffectCoverflow, Navigation]}
        loop={true}
        normalizeSlideIndex={true}
        autoplay={{ delay: 5000, disableOnInteraction: true, pauseOnMouseEnter: true }}
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
      <div className='w-full flex justify-center gap-2 pt-5 text-black'>
        <button
          className="video-prev p-1 pr-4 rounded-md hover:scale-110 hover:text-secondary"
        >
          <GrPrevious size={34} />
        </button>

        <button
          className="video-next p-1 pl-4 rounded-md hover:scale-110 hover:text-secondary"
        >
          <GrNext size={34} />
        </button>
      </div>
    </div>

  );
};

export default CoverFlow;
