import { Box, Skeleton, styled } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const LazyImageWhyUs = ({ image, id }) => {
  const [inView, setInview] = useState(false);
  const ref = useRef();
  console.log(ref)

  let callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInview(true);
      }
    });
  };

  useEffect(() => {
    let observer = new IntersectionObserver(callback);

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      //   if (ref?.current) {
      //     observer.unobserve(ref.current);
      //   }
      observer.disconnect();
    };
  }, []);

  const ImgWhyUs = styled(Box)(({ image }) => ({
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "contain",
    backgroundColor: "white",
    height: 400,
    width: "100%",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  }));

  return inView ? (
    <ImgWhyUs ref={ref} flex={{ tablet: 1 }} image={image} id={id}>
      <a href="https://www.freepik.com" style={{ opacity: 0 }}>
        designed by Storyset - Freepik.com
      </a>
    </ImgWhyUs>
  ) : (
    <Box ref={ref} flex={{ tablet: 1 }}>
      <Skeleton variant="rounded" width={"100%"} height={400} />
    </Box>
  );
};

export default LazyImageWhyUs;
