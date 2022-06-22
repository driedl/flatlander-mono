import create from "zustand";

import farmData from "./farmData";

export type Plant = {
  id: number;
  name: string;
  plantType: string;
  image: string;
};

function store(set, get) {
  return  {
    allPlants: farmData.plants,
    
    selectedPlants: [],

    addSelectedPlant: (id: number) => {
      const {selectedPlants} = get();
      
      if (selectedPlants.includes(id)) {
        return;
      };

      set((state) => ({
        ...state,
        selectedPlants: [...state.selectedPlants, id],
      })
      )
    },

    getSelectedPlants: () => {
      const { selectedPlants, allPlants } = get();
      return allPlants.filter((plant: Plant) => selectedPlants.includes(plant.id));
    },
  };
}

export const useStore = create<{
  allPlants: Plant[];
  selectedPlants: number[];
  addSelectedPlant: (id: number) => void;
  getSelectedPlants: () => Plant[];
}>(store);

