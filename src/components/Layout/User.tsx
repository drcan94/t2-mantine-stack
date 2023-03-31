import React from "react";
import { IconChevronRight, IconChevronLeft } from "@tabler/icons-react";
import {
  UnstyledButton,
  Group,
  Avatar,
  Text,
  Box,
  useMantineTheme,
} from "@mantine/core";

export const User: React.FC = () => {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.violet[6]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,
          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[3],
          },
        }}
      >
        <Group spacing={15} noWrap sx={{ justifyContent: "center" }}>
          <Avatar
            src="https://pbs.twimg.com/profile_images/1634184437599555584/f2ghrdcW_400x400.jpg"
            radius="xl"
            size={30}
          />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Burak CAN
            </Text>
            <Text color={theme.colors.lime[9]} size="sm">
              drcan94@gmail.com
            </Text>
          </Box>
          {theme.dir === "ltr" ? (
            <IconChevronRight size={18} />
          ) : (
            <IconChevronLeft size={18} />
          )}
        </Group>
      </UnstyledButton>
    </Box>
  );
};
