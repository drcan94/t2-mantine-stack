import React from "react";
import { Group, ActionIcon, Box } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";
import { Logo } from "./Logo";
import Link from "next/link";
import { useUIContext } from "../UIContextProvider/index";

export const Brand: React.FC<{
  sm: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ sm, setOpened }) => {
  const { colorScheme, toggleColorScheme } = useUIContext();

  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.md,
        paddingTop: theme.spacing.xs,
        borderBottom: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.violet[6]
        }`,
      })}
    >
      <Group position="apart">
        <Box
          onClick={() => sm && setOpened((o: boolean) => !o)}
          style={{ height: 26 }}
          component={Link}
          href={"/"}
        >
          <Logo colorScheme={colorScheme} />
        </Box>
        <ActionIcon
          variant="default"
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === "dark" ? (
            <IconSun size={16} />
          ) : (
            <IconMoonStars size={16} />
          )}
        </ActionIcon>
      </Group>
    </Box>
  );
};