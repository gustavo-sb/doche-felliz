import { Flex, HStack, IconButton, Image, Stack, Text } from "@chakra-ui/react";
import { FiTrash2 } from "react-icons/fi";
import { items } from "../../utils/catalogItems";
import { useShoppingCart } from "./../../context/ShoppingCartContext";

interface Props {
  id: number;
  quantity: number;
}

export const CartItem = ({ id, quantity }: Props) => {
  const { removeFromCart } = useShoppingCart();
  const item = items.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <HStack w="100%">
      <Image
        borderRadius="full"
        boxSize="80px"
        src={item.image}
        alt={item.image}
        objectFit="cover"
      />
      <Flex justifyContent="space-between" alignItems="center" w="100%">
        <Stack>
          <HStack>
            <Text fontWeight="bold">{item.name}</Text>
            <Text fontSize={12} opacity={0.8}>
              x{quantity}
            </Text>
          </HStack>
          <Text fontWeight="bold" opacity={0.6} style={{ marginTop: 0 }}>
            R${item.price}
          </Text>
        </Stack>
        <Text>R${Number(item.price) * quantity}</Text>
      </Flex>
      <IconButton
        aria-label="remove"
        colorScheme="red"
        icon={<FiTrash2 />}
        onClick={() => removeFromCart(id)}
      />
    </HStack>
  );
};
