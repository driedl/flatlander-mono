import React from "react";
import { PlantCard } from "components";
import { useStore } from "store";
import { Grid } from "@mantine/core";

const PlantsContent = () => {
  const { allPlants } = useStore();

  console.group(allPlants);

  return (
    <Grid sx={{ gap: "1rem" }}>
      {allPlants.map((plant) => (
        <PlantCard
          key={plant.name}
          name={plant.name}
          image={plant.image}
          showAddButton={true}
        />
      ))}
    </Grid>
  );
};

export default PlantsContent;
