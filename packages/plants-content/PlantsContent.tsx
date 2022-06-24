import React from "react";
import { PlantCard } from "components";
import { useStore } from "store";
import { Grid } from "@mantine/core";

const PlantsContent = () => {
  const { allPlants } = useStore();

  return (
    <Grid sx={{ gap: "1rem" }}>
      {allPlants.map((plant) => (
        <PlantCard
          id={plant.id}
          key={plant.name}
          name={plant.name}
          source={plant.source}
          image={plant.image}
          showAddButton
        />
      ))}
    </Grid>
  );
};

export default PlantsContent;
