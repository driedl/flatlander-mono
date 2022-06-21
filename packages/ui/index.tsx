import * as React from "react";
import {
  BrowserRouter,
  Outlet,
  Link,
  Routes,
  Route as RRDRoute,
} from "react-router-dom";
import {
  AppShell as MantineAppShell,
  Navbar,
  Header,
  Title,
  Text,
  MantineProvider,
  UnstyledButton,
  Group,
} from "@mantine/core";

import { useStore } from "store";

export type Route = {
  element: React.FunctionComponent;
  path: string;
};

export type NavLink = {
  path: string;
  label: string;
};

function MainLink({ path, label }: NavLink) {
  return (
    <Link to={path}>
      <UnstyledButton
        sx={(theme) => ({
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark"
              ? theme.colors.dark[0]
              : theme.colors.black,
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        })}
      >
        <Group>
          <Text size="sm">{label}</Text>
        </Group>
      </UnstyledButton>
    </Link>
  );
}

export const AppShell: React.FunctionComponent<{
  title: String;
  routes: Route[];
  navLinks: NavLink[];
  colorScheme?: "light" | "dark";
}> = ({ title, routes, navLinks, colorScheme }) => {
  const { selectedPlants } = useStore();

  return (
    <BrowserRouter>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme }}
      >
        <MantineAppShell
          padding="md"
          navbar={
            <Navbar width={{ base: 300 }} height={500} p="sx">
              {navLinks.map((link) => (
                <MainLink {...link} key={link.path} />
              ))}
            </Navbar>
          }
          header={
            <Header
              height={60}
              p="xs"
              sx={{ display: "flex" }}
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.grey[0],
                },
              })}
            >
              <Title sx={{ flexGrow: 1 }}>{title}</Title>
              <Text size="xl">{selectedPlants.length} plants selected</Text>
            </Header>
          }
        >
          <Routes>
            {routes.map((route) => (
              <RRDRoute
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
          <Outlet />
        </MantineAppShell>
      </MantineProvider>
    </BrowserRouter>
  );
};
