import testimonialData from './testimonialData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';

export default function Testimonial() {

    return (
        <section className="testimonial-sec">
            <div className="container">
                <div className="testimonial-wrapper">

                    <Swiper className='testimonial-swiper'
                        modules={[Pagination]}
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}>
                        {
                            testimonialData.map((item) => {
                                return (
                                    <SwiperSlide className='test-swiper-box'>
                                        <img className='test-slider-pic' src={`assets/testimonialAssets/${item.pic}`} alt={item.text} />
                                        <div className="test-slider-quote-icon"><i class="fa-solid fa-quote-left" style={{ color: '#ffffff' }}></i></div>
                                        <div className='test-slider-info-area'>
                                            <p className='test-swiper-quote'>{item.quote}</p>
                                            <p className='test-swiper-person'>{`- ${item.name}`}</p>
                                        </div>
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>
                    
                </div>
            </div>
        </section>
    )
}