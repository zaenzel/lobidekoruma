// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  Zoom,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/zoom";
import data from "./imgCarousel";

import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";

const Carousel = () => {
  const ImageCarousel = styled(Box)(({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "white",
    height: 400,
    width: "100%",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  }));

  return (
    <Container
      className="container-carousel"
      sx={{
        px: 5,
        pt: 10,
        pb: 30,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Typography
        component={"h1"}
        variant="h2"
        fontWeight={700}
        color={"primary.light"}
        fontSize={{ mobileS: "1.5rem", tablet: "2.3rem" }}
      >
        Beberapa Project Kami
      </Typography>
      <Box>
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Zoom]}
          navigation
          scrollbar={{ draggable: true }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          zoom={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {data.map((e, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="swiper-zoom-container">
                  <ImageCarousel image={e} />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Container>
  );
};

export default Carousel;
