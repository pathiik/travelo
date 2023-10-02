import sliderData from './sliderData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export default function Intro() {

    return (
        <section className='intro-sec'>
            <Swiper className='intro-swiper'
                modules={[Navigation, EffectFade]}
                navigation={true}
                loop={true}
                effect={'fade'}
                speed={800} >
                {
                    sliderData.map((item) => {
                        return (
                            <SwiperSlide key={item.id}>
                                <img className='intro-swiper-pic' src={`assets/introAssets${item.image}`} alt={item.text} />
                                <div className='intro-slider-info-area'>
                                    <h3 className='intro-swiper-location'>{item.text}</h3>
                                    <p className='intro-swiper-info'>{item.info}</p>
                                    <a href="#" className='intro-swiper-btn btn'>{item.btnInfo}</a>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}
