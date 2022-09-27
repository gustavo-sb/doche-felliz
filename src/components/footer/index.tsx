import { Flex, Link, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      w={{
        base: "425px",
        md: "720px",
        lg: "1080px",
      }}
      justifyContent="center"
      alignItems="center"
      p="1rem"
    >
      <Text>Development with❤️by <Link href="https://github.com/gustavo-sb">Gustavo Barbosa</Link>
      </Text>
    </Flex>
  );
};
