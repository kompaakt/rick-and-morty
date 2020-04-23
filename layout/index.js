import React from "react";
import { Flex, Box, Image } from "rebass";
import Link from "next/link";
import { ThemeProvider } from "emotion-theming";

import theme from "./theme";

import logo from "public/images/logo.png";

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        sx={{
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <Link href="/">
          <Image
            sx={{
              objectFit: "contain",
              cursor: "pointer",
              backgroundColor: "black",
            }}
            src={logo}
            alt="logo"
          />
        </Link>
        <Box
          sx={{
            flex: "1 1 auto",
          }}
          maxWidth="1440px"
          mx="auto"
          width="100%"
        >
          {children}
        </Box>
      </Flex>
    </ThemeProvider>
  );
};

export default Layout;
