import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Image from "next/image";

import Logo from "@/images/logo.webp";
import { grey } from "@mui/material/colors";

import { FacebookButton } from "@/components/atoms/Buttons/Facebook/FacebookButton";
import { GoogleButton } from "@/components/atoms/Buttons/Google/GoogleButton";
import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false
      }
    };
  }

  return {
    props: {}
  };
};

export default function SignIn() {
  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          rowGap: 2
        }}
      >
        <Image style={{ borderRadius: 10 }} src={Logo} width={160} height={160} layout="fixed" />
        <Typography
          textAlign="center"
          component="h1"
          variant="h4"
          fontWeight="bold"
          color={grey[700]}
        >
          Karudo Lanches e Churros
        </Typography>
        <Typography textAlign="center" component="p" variant="body1">
          Faça o login para poder realizar seu pedido
        </Typography>
        <FacebookButton />
        <GoogleButton />
      </Box>
    </Container>
  );
}
