import React from "react";
import { PlantCard } from "components";
import { useStore } from "store";
import { Grid } from "@mantine/core";

const Watchlist = () => {
  const { getSelectedPlants } = useStore();
  const selectedPlants = getSelectedPlants();

  return (
    <Grid sx={{ gap: "1rem" }}>
      {selectedPlants.map((plant) => (
        <PlantCard
          id={plant.id}
          key={plant.name}
          name={plant.name}
          image={plant.image}
          showAddButton={false}
        />
      ))}
    </Grid>
  );
};

export default Watchlist;
