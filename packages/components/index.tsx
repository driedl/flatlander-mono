import * as React from "react";
import {
  Card,
  Image,
  Text,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

import { useStore } from "store";

// eslint-disable-next-line import/prefer-default-export
export const PlantCard: React.FunctionComponent<{
  id: number;
  name: string;
  image: string;
  showAddButton: boolean;
}> = ({ id, name, image, showAddButton = false }) => {
  const theme = useMantineTheme();
  const { addSelectedPlant } = useStore();

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={image} alt={name} height={320} />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{name}</Text>
      </Group>

      {showAddButton && (
        <Button
          variant="light"
          color="blue"
          fullWidth
          onClick={() => addSelectedPlant(id)}
        >
          Add to list
        </Button>
      )}
    </Card>
  );
};
