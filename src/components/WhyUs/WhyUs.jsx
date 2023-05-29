import {  Container, Stack, Typography, styled } from "@mui/material";
import data from "../../dummy/dataWhyUs";
import LazyImageWhyUs from "../LazyImages/LazyImageWhyUs";

const WhyUs = () => {
  return (
    <Container sx={{ background: "#f5f5f5", px: 5, py: 10, pb: 30 }}>
      <Typography
        component={"h1"}
        variant="h2"
        color={"primary.light"}
        fontWeight={700}
        sx={{ textAlign: { tablet: "center" } }}
      >
        Kenapa Harus <span style={{ color: "#F58634" }}>Lobi Dekoruma</span>?
      </Typography>

      {data.map((e, i) => {
        return (
          <Stack
            key={e.id}
            direction={{ tablet: i % 2 === 0 ? "row-reverse" : "row" }}
            rowGap={5}
            spacing={5}
            justifyContent={"space-center"}
            flexWrap={"wrap-reverse"}
            alignItems={"center"}
            mt={10}
            px={{ tablet: 5 }}
          >
            <LazyImageWhyUs image={e.img} id={e.id}>
              <a href="https://www.freepik.com" style={{ opacity: 0 }}>
                designed by Storyset - Freepik.com
              </a>
            </LazyImageWhyUs>

            <Stack flex={1} sx={{ px: { tablet: 5, laptop: 10 } }}>
              <Typography
                variant="h3"
                component={"h3"}
                color={"primary.light"}
                fontWeight={700}
                mb={1}
              >
                {e.title}
              </Typography>
              <Typography
                variant="body1"
                fontWeight={500}
                fontSize={{ tablet: "1.2rem" }}
                component={"p"}
                color={"primary.light"}
              >
                {e.desc}
              </Typography>
            </Stack>
          </Stack>
        );
      })}
    </Container>
  );
};

export default WhyUs;
