import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  VStack,
  Text,
  HStack
} from "@chakra-ui/react";

import { items } from "../../utils/catalogItems";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const Cart = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Carrinho</DrawerHeader>

        <DrawerBody>
          {/* <VStack>
            {items.map((item) => {
              return (
                <Flex key={item.id}>
                  <Text>{item.name}</Text>
                  <HStack>
                    <
                  </HStack>
                </Flex>
              )
            })}
          </VStack> */}
        </DrawerBody>

        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
