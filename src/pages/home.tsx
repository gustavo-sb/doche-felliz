import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { Card } from "../components/card";
import { CatalogItem } from "../types/products";

import { items } from "../utils/catalogItems";

function Home() {
  return (
    <Box>
      <Grid templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(2, 1fr)'
      }}>
        {items.map((item: CatalogItem) => {
          return (
            <GridItem key={item.id}>
              <Card
                id={item.id}
                name={item.name}
                image={item.image}
                details={item.details}
                price={item.price}
              />
            </GridItem>
          );
        })}
      </Grid>
    </Box>
  );
}

export default Home;
