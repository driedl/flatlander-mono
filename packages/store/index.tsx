import create from "zustand";

// import { plants } from "./farmData";

const plants = [
    {
      name: "Loganberry",
      plantType: "CANE_BERRY",
      purchasePrice: 30.95,
      isHeirloom: false,
      origin: "1900s",
      isSelfFertile: "Y",
      harvestPeriod: "Mid",
      bloom: "",
      Storage: "few weeks",
      rootstock: "",
      yearsToBear: "1",
      waterGPD: "3-8",
      size: "4-6",
      spacing: "2-5",
      yearPlanted: "2022",
      image: 'https://cdn.shopify.com/s/files/1/0250/1384/6115/products/Loganberry_2000x.jpg?v=1565657509',
    },
    {
      name: "Heritage Red Raspberries",
      plantType: "CANE_BERRY",
      purchasePrice: 25.95,
      isHeirloom: false,
      origin: "1900s",
      isSelfFertile: "Y",
      harvestPeriod: "Mid-Late",
      bloom: "",
      Storage: "few weeks",
      rootstock: "",
      yearsToBear: "1",
      waterGPD: "3-8",
      size: "4-6",
      spacing: "2-5",
      yearPlanted: "2022",
      image: 'https://cdn.shopify.com/s/files/1/0250/1384/6115/products/heritage-raspberries_2000x.jpg?v=1565653983 ',
    },
  ];

export type Plant = {
  name: string;
  plantType: string;
  image: string;
};

export const useStore = create<{
  allPlants: Plant[];
  selectedPlants: Plant[];
  addPlant: (name: string) => void;
}>((set) => ({
  allPlants: plants,
  selectedPlants: [],
  addPlant: (name) =>
    set((state) => ({
      ...state,
      selectedPlants: [...state.selectedPlants, name],
    })),
}));
