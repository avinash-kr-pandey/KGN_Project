
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import Link from "next/link";
import batteryData from "@/components/data/portfolio-data";

const Portfolio = () => {
  const slideControl = {
    spaceBetween: 25,
    slidesPerView: 3.8,
    centeredSlides: true,
    speed: 2000,
    loop: true,
    autoplay: {
      delay: 4500,
      reverseDirection: false,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 2.6,
      },
      1200: {
        slidesPerView: 3.4,
      },
      1500: {
        slidesPerView: 3.8,
      },
    },
  };

  return (
    <div className="portfolio__one dark_image">
      <div className="container">
        <div className="row al-end mb-60">
          <div className="col-xl-8 lg-mb-25">
            <div className="portfolio__one-title lg-t-center">
              <span className="subtitle-one">Our Products</span>
              <h2>Battery Specifications</h2>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="portfolio__one-btn t-right lg-t-center">
              <a className="btn-one" href="/battery-list">
                View All Batteries
              </a>
            </div>
          </div>
        </div>
      </div>

      <Swiper modules={[EffectFade, Autoplay]} {...slideControl}>
        {batteryData?.map((battery) => (
          <SwiperSlide key={battery.id}>
            <div className="portfolio__one-item">
              <div >
                <img
                  src={battery.image}
                  alt={battery.batteryType}
                  className="img-cover"
                />

                <div className="portfolio__one-item-image-content">
                  <span>
                    <i className="fa-regular fa-horizontal-rule"></i>{" "}
                    {battery.connectorType}
                  </span>
                  <h6>
                    <Link href={`/battery/${battery.id}`}>
                      {battery.batterySpec}
                    </Link>
                  </h6>
                  <p>{battery.batteryBrand}</p>
                  <Link href={`/battery/${battery.id}`}>
                    <i className="fa-sharp fa-regular fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
