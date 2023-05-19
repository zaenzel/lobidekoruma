import { Box, Stack, Typography, styled } from "@mui/material";

const Motto = () => {
  const data = [
    {
      title: "Integritas",
      img: "/images/integritas.jpg",
    },
    {
      title: "Disiplin",
      img: "/images/disiplin.jpg",
    },
    {
      title: "Kerja Sama",
      img: "/images/teamwork.jpg",
    },
    {
      title: "Tanggung Jawab Sosial",
      img: "/images/responsibility.jpg",
    }
  ]


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
        color={"primary.light"}
        fontWeight={700}
        sx={{ textAlign: { tablet: "center" } }}
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
              <Stack spacing={2}
                key={i}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flex:3    
                }}
              >
                <ImgMotto img={e.img} />
                <Typography
                  component={"h5"}
                  variant="h4"
                  color={"primary.light"}
                  fontWeight={500}
                  align="center"
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
