import {
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import data from "../../dummy/dataWhyUs";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

const WhyUs = () => {
  const ImgWhyUs = styled(Box)(({ image, hide, theme }) => ({
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

  const WrapItemService = styled(Box)(({ theme, index }) => ({
    display: "grid",
    rowGap: 50,
  }));

  /*
  <WrapItemService key={e.id} index={i}>
  <ImgWhyUs flex={{ tablet: 1 }} image={e.img}>
    <a href="https://www.freepik.com" style={{ opacity: 0 }}>
      designed by Storyset - Freepik.com
    </a>
  </ImgWhyUs>

  <Stack flex={1}>
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
</WrapItemService>
*/

  const ImgWhyUs2 = (
    <Box flex={1} sx={{ background: "red", maxWidth: 400 }}>
      <img
        src=""
        alt="img"
        style={{
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
        }}
        as="svg"
      />
    </Box>
  );

  /*
  const wrapper = (
    <Stack
      key={e.id}
      direction={{ tablet: "row" }}
      rowGap={5}
      spacing={5}
      justifyContent={"space-center"}
      flexWrap={"wrap-reverse"}
      alignItems={"center"}
      mt={10}
      px={{ tablet: 5 }}
    >
      <ImgWhyUs flex={{ tablet: 1 }} image={e.img}>
        <a href="https://www.freepik.com" style={{ opacity: 0 }}>
          designed by Storyset - Freepik.com
        </a>
      </ImgWhyUs>

      <Stack flex={1}>
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
*/

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
            <ImgWhyUs flex={{ tablet: 1 }} image={e.img}>
              <a href="https://www.freepik.com" style={{ opacity: 0 }}>
                designed by Storyset - Freepik.com
              </a>
            </ImgWhyUs>

            <Stack flex={1} sx={{px:{tablet: 5, laptop: 10}}}>
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
