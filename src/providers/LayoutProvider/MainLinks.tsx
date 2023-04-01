import React from "react";
import {
  IconGitPullRequest,
  IconAlertCircle,
  IconLetterC,
  IconUsers,
  IconLogin,
  // IconMessages,
  // IconDatabase
} from "@tabler/icons-react";
import {
  ThemeIcon,
  UnstyledButton,
  Group,
  Text,
  type MantineTheme,
} from "@mantine/core";
import Link from "next/link";

interface MainLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  path: string;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  sm: boolean;
}

const MainLink: React.FC<MainLinkProps> = ({
  icon,
  color,
  label,
  path,
  setOpened,
  sm,
}) => {
  return (
    <UnstyledButton
      sx={(theme: MantineTheme) => ({
        display: "block",
        width: "100%",
        padding: theme ? theme.spacing.xs : 0,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

        "&:hover": {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[4]
              : theme.colors.violet[4],
          color:
            theme.colorScheme === "dark" ? theme.colors.red[4] : theme.white,
        },
      })}
      component={Link}
      href={path}
      onClick={() => sm && setOpened((o: boolean) => !o)}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
};

const data = [
  {
    icon: <IconGitPullRequest size={16} />,
    color: "blue",
    label: "Expenses",
    path: "/expenses",
  },
  {
    icon: <IconAlertCircle size={16} />,
    color: "teal",
    label: "Search Bar",
    path: "/search",
  },
  {
    icon: <IconLetterC size={16} />,
    color: "violet",
    label: "Course Goals",
    path: "/course/goals",
  },
  {
    icon: <IconUsers size={16} />,
    color: "grape",
    label: "Users",
    path: "/users",
  },
  {
    icon: <IconLogin size={16} />,
    color: "cyan",
    label: "Login Demo",
    path: "/logindemo",
  },
];

export function MainLinks({
  setOpened,
  sm,
}: {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  sm: boolean;
}) {
  const links = data.map((link) => (
    <MainLink sm={sm} setOpened={setOpened} {...link} key={link.label} />
  ));
  return <div>{links}</div>;
}
