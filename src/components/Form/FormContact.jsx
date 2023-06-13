import { Box, Button, TextField, styled } from "@mui/material";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


const FormContact = ({ setAlert }) => {

  const service_id = import.meta.env.VITE_EMAILJS_SERVICE_ID
  const template_id = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

  const BootstrapButton = styled(Button)(({ theme }) => ({
    boxShadow: "none",
    textTransform: "none",
    padding: "6px 12px",
    border: "1px solid",
    lineHeight: 1.5,
    fontSize: 20,
    color: "white",
    fontWeight: 600,
    backgroundColor: theme.palette.primary,
    borderColor: theme.palette.primary,
    fontFamily: "Source Sans Pro, sans-serif",
    "&:hover": {
      backgroundColor: "#F58634",
      borderColor: "#F58634",
    },
    "&:active": {
      boxShadow: "none",
      borderColor: "#F58634",
    },
    "&:focus": {
      boxShadow: "#F58634",
    },
  }));

  const form = useRef();

  const [values, setValues] = useState({
    name: "",
    email: "",
    nomorTlp: "",
    message: "",
  });

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        service_id,
        template_id,
        form.current,
        publicKey
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message send");
          setAlert({ status: true, show: true });
          setTimeout(() => {
            setAlert({show:false});
          }, 4000);
        },
        (error) => {
          setAlert({ status: false, show: true });
          setTimeout(() => {
            setAlert({show:false});
          }, 4000);
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <Box
        maxWidth={"tablet"}
        minWidth={"mobileS"}
        sx={{ display: "flex", flexDirection: "column", gap: 2, flex: 2 }}
      >
        <TextField
          required
          label="Nama"
          variant="outlined"
          fullWidth
          name="name"
          onChange={onChange}
        />
        <Box sx={{ display: "flex", gap: 1 }}>
          <TextField
            required
            name="email"
            label="Email"
            variant="outlined"
            fullWidth
            type="email"
            onChange={onChange}
          />
          <TextField
            required
            name="nomorTlp"
            label="Nomor Telepon / Wa"
            variant="outlined"
            type="number"
            fullWidth
            inputProps={{ inputMode: "numeric" }}
            onChange={onChange}
          />
        </Box>
        <TextField
          required
          name="message"
          label="Pesan"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          onChange={onChange}
        />
        <BootstrapButton
          variant="contained"
          fullWidth
          type="submit"
          onSubmit={handleSubmit}
        >
          Kirim
        </BootstrapButton>
      </Box>
    </form>
  );
};

export default FormContact;
