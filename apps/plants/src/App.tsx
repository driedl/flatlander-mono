import React from "react";
import { AppShell } from "ui";

import PlantsContent from "./PlantsContent";

function SelectedContent() {
  return <h1>These are selected plants.</h1>;
}

function App() {
  return (
    <div>
      <AppShell
        title="Flatlander Farms"
        colorScheme="dark"
        routes={[
          {
            path: "/",

            element: PlantsContent,
          },
          {
            path: "/plants",
            element: SelectedContent,
          },
        ]}
        navLinks={[
          { path: "/", label: "Home" },
          { path: "/plants", label: "Plants" },
        ]}
      />
    </div>
  );
}

export default App;
