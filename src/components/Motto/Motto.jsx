import { Box, Stack, Typography, styled } from "@mui/material";
import data from "../../dummy/dataMotto";

const Motto = () => {
  const ImgMotto = styled(Box)(({ img }) => ({
    backgroundImage: `url(${img})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundColor: "black",
    height: 100,
    width: 100,
    maxWidth: 200,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  }));

  return (
    <Stack spacing={7} py={10}>
      <Typography
        component={"h1"}
        variant="h2"
        fontWeight={700}
        color={"primary.light"}
        fontSize={{ mobileS: "1.5rem", tablet: "2.3rem" }}
      >
        Motto Perusahaan
      </Typography>
      <Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {data.map((e, i) => {
            return (
              <Stack
                spacing={2}
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex: 3,
                }}
              >
                <ImgMotto img={e.img}>
                  <a href="https://www.freepik.com" style={{ opacity: 0 }}>
                    designed by Storyset - Freepik.com
                  </a>
                </ImgMotto>
                <Typography
                  component={"h5"}
                  variant="h4"
                  color={"primary.light"}
                  fontWeight={600}
                  align="center"
                  fontSize={{mobileS: "1.2rem", tablet: "1.5rem"}}
                >
                  {e.title}
                </Typography>
              </Stack>
            );
          })}
        </Box>
      </Box>
    </Stack>
  );
};

export default Motto;
