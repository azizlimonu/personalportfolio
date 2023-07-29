import Image from 'next/image';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../../styles/components/slider.module.scss'
import 'swiper/css';
import 'swiper/css/pagination';

interface Props {
  images: string[];
}

const Slider = ({ images }: Props) => {
  const customSwiperStyles = {
    '--swiper-pagination-color': 'gray',
    '--swiper-pagination-bullet-inactive-color': 'black',
    '--swiper-pagination-bullet-inactive-opacity': '0.7',
    '--swiper-pagination-bullet-size': '10px',
    '--swiper-pagination-bullet-horizontal-gap': '10px',
  };

  return (
    <>
      {images && (
        <div className={styles['slider__wrapper']}>
          <Swiper
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            style={customSwiperStyles as React.CSSProperties}
          >
            {images?.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div className={styles['slider__item']}>
                  <Image
                    src={img}
                    alt={`images_${idx}`}
                    width={1300}
                    height={660}
                    className={styles['slider__item-img']}
                    priority
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  )
}

export default Slider