import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
  useColorMode,
} from "@chakra-ui/react";
// import { useColorMode } from "@chakra-ui/color-mode";
import { Link, useLocation } from "react-router-dom";
import { BsPlusSquare } from "react-icons/bs";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const location = useLocation();

  return (
    <Container maxW={"1140px"} px={4} py={2}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
        gap={{ base: 2, sm: 0 }}
      >
        <Text
          fontSize={{ base: "22px", sm: "28px" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient="linear(to-r, #00BFFF, #1E90FF)"
          bgClip="text"
          // color="blue.500"
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>
        <HStack spacing={4} alignItems={"center"}>
          <Link to={"/create"}>
            <Button
              aria-label="Create product"
              variant="ghost"
              size="sm"
              leftIcon={<BsPlusSquare fontSize={20} />}
              fontWeight={location.pathname === "/create" ? "bold" : "normal"}
            >
              Create
            </Button>
          </Link>
          <Button
            onClick={toggleColorMode}
            aria-label="Toggle color mode"
            variant="ghost"
            size="sm"
          >
            {colorMode === "light" ? (
              <IoMoon fontSize={20} />
            ) : (
              <LuSun fontSize={20} />
            )}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
