import { AppShell } from "ui";

import { PlantsContent } from "plants-content";
import { Watchlist } from "watchlist-content";

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
            path: "/watch",
            element: Watchlist,
          },
        ]}
        navLinks={[
          { path: "/", label: "Plants" },
          { path: "/watch", label: "Watchlist" },
        ]}
      />
    </div>
  );
}

export default App;
