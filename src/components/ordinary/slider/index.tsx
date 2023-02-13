import { FC, useState } from 'react';
import { FreeMode, Navigation, Thumbs } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperClass from 'swiper/types/swiper-class';

import { SliderStyled } from './styled';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

export const Slider: FC<{ images: string[] }> = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <SliderStyled length={images.length}>
      <Swiper
        spaceBetween={10}
        navigation={false}
        thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
        modules={[FreeMode, Navigation, Thumbs]}
        data-test-id='slide-big'
        className='mySwiper2'
      >
        {images.map((item) => (
          <SwiperSlide key={item}>
            <img src={item} alt='book images' />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className='mySwiper'
      >
        {images.map((item) => (
          <SwiperSlide key={item} data-test-id='slide-mini' className='swiper-pagination-bullet'>
            <img src={item} alt='book images' />
          </SwiperSlide>
        ))}
      </Swiper>
    </SliderStyled>
  );
};
