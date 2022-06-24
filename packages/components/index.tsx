import * as React from "react";
import {
  Card,
  Image,
  Text,
  Anchor,
  Button,
  Group,
  useMantineTheme,
} from "@mantine/core";

import { useStore } from "store";

export const PlantCard: React.FunctionComponent<{
  id: number;
  name: string;
  source: string;
  image: string;
  showAddButton: boolean;
}> = ({ id, name, source, image, showAddButton = false }) => {
  const theme = useMantineTheme();
  const { addSelectedPlant } = useStore();

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image src={image} alt={name} height={240} />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        {source ? (
          <Anchor weight={500} target="_blank" href={source}>
            {name}
          </Anchor>
        ) : (
          <Text weight={500}>name</Text>
        )}
      </Group>

      {showAddButton && (
        <Button
          variant="light"
          color="blue"
          fullWidth
          onClick={() => addSelectedPlant(id)}
        >
          Add to watch list
        </Button>
      )}
    </Card>
  );
};
