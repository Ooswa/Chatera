import React, { useEffect } from "react";
import { Box, Container, Text } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Login from "../Components/Authentication/Login";
import Signup from "../Components/Authentication/Signup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function HomePage() {
  const history = useHistory();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        m="40px 0 15px 0"
        w={"100%"}
        bg={"white"}
        borderWidth={"1px"}
        borderRadius={"10px"}
        mb={"20px"}
        opacity={0.9}
      >
        <Text
          fontSize={"4xl"}
          textAlign={"center"} /*fontFamily={"Work sans"}*/
          fontWeight={"600"}
        >
          Chatera
        </Text>
      </Box>
      <Box
        w={"100%"}
        p={4}
        bg={"white"}
        borderRadius={"10px"}
        opacity={0.9}
        mb={"20px"}
      >
        <Tabs variant="soft-rounded" colorScheme="purple">
          <TabList mb={"1rem"}>
            <Tab w={"50%"}>Login</Tab>
            <Tab w={"50%"}>Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
