import create from "zustand";

import farmData from "./farmData";

export type Plant = {
  id: number;
  name: string;
  plantType: string;
  image: string;
  source: string;
};

const { plants } = farmData;

// const sourceListNormalized = sourceList.map((source: string) => {
//   return source.split("?")[0];
// });
//
// plants.forEach((plant, i: number) => {
//   plant.source = sourceListNormalized[i];
// });

console.log(plants);

function store(set: any, get: any) {
  return {
    allPlants: plants,

    selectedPlants: [],

    addSelectedPlant: (id: number) => {
      const { selectedPlants } = get();

      if (selectedPlants.includes(id)) {
        return;
      }

      set((state: any) => ({
        ...state,
        selectedPlants: [...state.selectedPlants, id],
      }));
    },

    getSelectedPlants: () => {
      const { selectedPlants, allPlants } = get();
      return allPlants.filter((plant: Plant) =>
        selectedPlants.includes(plant.id)
      );
    },
  };
}

export const useStore = create<{
  allPlants: Plant[];
  selectedPlants: number[];
  addSelectedPlant: (id: number) => void;
  getSelectedPlants: () => Plant[];
}>(store);
