import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Badge,
  Card,
  SimpleGrid,
  Stack,
  Box,
  ThemeIcon,
  Image,
  AspectRatio,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
  Modal,
  Overlay,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import {
  IconTerminal2,
  IconDatabaseSearch,
  IconShieldLock,
  IconBrandGithub,
  IconArrowRight,
  IconSun,
  IconMoon,
  IconExternalLink,
  IconZoomIn,
} from "@tabler/icons-react";

function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="xl"
      radius="md"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "light" ? (
        <IconMoon size={22} stroke={1.5} />
      ) : (
        <IconSun size={22} stroke={1.5} />
      )}
    </ActionIcon>
  );
}

function App() {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedImage, setSelectedImage] = useState({ src: "", title: "" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const showImage = (src: string, title: string) => {
    setSelectedImage({ src, title });
    open();
  };

  const screenshots = [
    {
      src: "/images/dashboard_screenshot.png",
      title: "Live Dashboard",
      desc: "Real-time overview of active sessions and targets.",
    },
    {
      src: "/images/terminal_sessions_screenshot.png",
      title: "Shell Auditing",
      desc: "Deep dive into terminal commands and output.",
    },
    {
      src: "/images/sql_sessions_screenshot.png",
      title: "SQL Visibility",
      desc: "Monitor every database query and policy block.",
    },
  ];

  return (
    <Box style={{ overflowX: "hidden" }}>
      <Modal
        opened={opened}
        onClose={close}
        title={<Text fw={800}>{selectedImage.title}</Text>}
        size="80%"
        radius="lg"
        transitionProps={{ transition: "fade", duration: 200 }}
        overlayProps={{
          backgroundOpacity: 0.55,
          blur: 10,
        }}
      >
        <Image src={selectedImage.src} radius="md" alt={selectedImage.title} />
      </Modal>

      {/* Navbar */}
      <Box
        component="header"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          backgroundColor:
            "light-dark(rgba(255, 255, 255, 0.7), rgba(26, 27, 30, 0.7))",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid var(--mantine-color-default-border)",
        }}
      >
        <Container size="lg" h={80}>
          <Group justify="space-between" h="100%">
            <Group gap="md">
              <img
                src="/images/kube_steward_transparent.png"
                alt="Logo"
                style={{ height: 40 }}
              />
              <Text
                fw={900}
                size="xl"
                visibleFrom="sm"
                style={{ letterSpacing: "-0.5px" }}
              >
                KubeSteward
              </Text>
            </Group>

            <Group gap="lg">
              <Button
                variant="subtle"
                color="gray"
                component="a"
                href="https://github.com/kubesteward/kubesteward"
                leftSection={<IconBrandGithub size={20} />}
                visibleFrom="sm"
                size="md"
              >
                GitHub
              </Button>
              <ThemeToggle />
            </Group>
          </Group>
        </Container>
      </Box>

      {/* Hero Section */}
      <Container size="lg" py={{ base: 80, md: 140 }}>
        <Stack align="center" gap={40} ta="center">
          <Badge
            size="xl"
            variant="light"
            color="blue"
            radius="xl"
            px={24}
            py={18}
            style={{ textTransform: "none", fontWeight: 700 }}
          >
            🚀 Early Alpha v0.0.1 is now live
          </Badge>

          <Stack gap="xl">
            <Title
              style={{
                fontSize: "clamp(48px, 10vw, 84px)",
                lineHeight: 1,
                fontWeight: 900,
                letterSpacing: "-0.04em",
              }}
            >
              Kubernetes Audit <br />
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "blue.5", to: "cyan.4", deg: 45 }}
              >
                Redefined.
              </Text>
            </Title>
            <Container size={750} p={0}>
              <Text size="xl" lh={1.6} c="dimmed" style={{ fontSize: "22px" }}>
                A Kubernetes-native APIService, CLI controller, TUI, and
                Dashboard designed for teams that demand absolute transparency
                and zero-trust security.
              </Text>
            </Container>
          </Stack>

          <Group gap="md" mt={20}>
            <Button
              size="xl"
              radius="md"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              component="a"
              href="https://github.com/kubesteward/kubesteward"
              leftSection={<IconBrandGithub size={24} />}
              style={{ height: 60, paddingLeft: 35, paddingRight: 35 }}
            >
              Get Started
            </Button>
            <Button
              size="xl"
              radius="md"
              variant="default"
              rightSection={<IconArrowRight size={24} />}
              style={{ height: 60, paddingLeft: 35, paddingRight: 35 }}
            >
              Documentation
            </Button>
          </Group>
        </Stack>
      </Container>

      {/* Visual Audit Gallery */}
      <Container size="lg" py={100}>
        <Stack gap={60}>
          <Stack align="center" gap="xs" ta="center">
            <Title
              order={2}
              size={48}
              fw={900}
              style={{ letterSpacing: "-1px" }}
            >
              Visualizing the Proxy
            </Title>
            <Text size="xl" c="dimmed" style={{ maxWidth: 650 }}>
              The management dashboard provides a crystal-clear, real-time view
              of everything happening in your cluster.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            {screenshots.map((shot, i) => (
              <Card
                key={i}
                withBorder
                padding={0}
                radius="xl"
                shadow={hoveredIndex === i ? "xl" : "sm"}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => showImage(shot.src, shot.title)}
                style={{
                  overflow: "hidden",
                  cursor: "zoom-in",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  transform: hoveredIndex === i ? "scale(1.03)" : "scale(1)",
                  borderColor:
                    hoveredIndex === i
                      ? "var(--mantine-color-blue-filled)"
                      : undefined,
                }}
              >
                <Card.Section style={{ position: "relative" }}>
                  <AspectRatio ratio={16 / 10}>
                    <Image src={shot.src} alt={shot.title} />
                  </AspectRatio>
                  {hoveredIndex === i && (
                    <Overlay color="#000" backgroundOpacity={0.1} center>
                      <ThemeIcon size={50} radius="xl" color="blue">
                        <IconZoomIn size={30} />
                      </ThemeIcon>
                    </Overlay>
                  )}
                </Card.Section>
                <Box p="xl">
                  <Text fw={900} size="xl" style={{ letterSpacing: "-0.5px" }}>
                    {shot.title}
                  </Text>
                  <Text size="md" c="dimmed" mt={8} lh={1.5}>
                    {shot.desc}
                  </Text>
                </Box>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Features Section */}
      <Box
        bg="light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8))"
        py={120}
        style={{
          borderTop: "1px solid var(--mantine-color-default-border)",
          borderBottom: "1px solid var(--mantine-color-default-border)",
        }}
      >
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={50}>
            {[
              {
                icon: IconTerminal2,
                title: "Terminal Proxying",
                color: "blue",
                text: "Full TTY capture for spawn, exec, and ephemeral containers. Replay sessions and track every keystroke with absolute precision.",
              },
              {
                icon: IconDatabaseSearch,
                title: "SQL Policy Engine",
                color: "cyan",
                text: "Native PostgreSQL wire-proxy. Intercept queries in real-time, apply regex-based deny patterns, and prevent data exfiltration.",
              },
              {
                icon: IconShieldLock,
                title: "Zero-Trust Identity",
                color: "indigo",
                text: "Bootstrapped via CLI one-time codes. No long-lived tokens in the browser. Built entirely on your existing Kubernetes RBAC.",
              },
            ].map((feature, i) => (
              <Stack key={i} gap="xl">
                <ThemeIcon
                  size={72}
                  radius="20px"
                  variant="gradient"
                  gradient={{
                    from: `${feature.color}.6`,
                    to: `${feature.color}.4`,
                  }}
                >
                  <feature.icon size={40} />
                </ThemeIcon>
                <Box>
                  <Text
                    fw={900}
                    size="24px"
                    style={{ letterSpacing: "-0.5px" }}
                  >
                    {feature.title}
                  </Text>
                  <Text size="lg" c="dimmed" mt="md" lh={1.6}>
                    {feature.text}
                  </Text>
                </Box>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Repositories Section */}
      <Container size="lg" py={120}>
        <Stack gap={60}>
          <Title
            order={2}
            size={42}
            fw={900}
            ta="center"
            style={{ letterSpacing: "-1px" }}
          >
            Built for Modularity
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {[
              {
                label: "Core Backend",
                desc: "The heart of KubeSteward. APIServer, Operator & CRDs built with Go.",
                url: "kubesteward",
              },
              {
                label: "CLI Tool",
                desc: "Secure kubectl plugin and protocol client for terminal and SQL proxying.",
                url: "kubesteward-cli",
              },
              {
                label: "Management UI",
                desc: "A rich React-based dashboard for monitoring, auditing, and analytics.",
                url: "kubesteward-ui",
              },
            ].map((repo) => (
              <Card
                key={repo.url}
                withBorder
                padding={40}
                radius="xl"
                component="a"
                href={`https://github.com/kubesteward/${repo.url}`}
                style={{
                  transition: "all 0.2s ease",
                  cursor: "pointer",
                  position: "relative",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <Group justify="space-between" mb="xl">
                  <ThemeIcon variant="light" color="gray" size="lg" radius="md">
                    <IconBrandGithub size={20} />
                  </ThemeIcon>
                  <IconExternalLink size={20} style={{ opacity: 0.5 }} />
                </Group>
                <Text
                  fw={900}
                  size="22px"
                  mb="md"
                  style={{ letterSpacing: "-0.5px" }}
                >
                  {repo.label}
                </Text>
                <Text size="md" c="dimmed" lh={1.5}>
                  {repo.desc}
                </Text>
                <Text size="sm" mt="xl" fw={800} c="blue">
                  View Repository
                </Text>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        py={80}
        bg="light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-9))"
      >
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing={50}>
            <Stack gap="md" style={{ gridColumn: "span 2" }}>
              <Group gap="xs">
                <img
                  src="/images/kube_steward_transparent.png"
                  alt="Logo"
                  style={{ height: 32 }}
                />
                <Text fw={900} size="xl">
                  KubeSteward
                </Text>
              </Group>
              <Text size="md" c="dimmed" style={{ maxWidth: 400 }}>
                Secure, audited access to your Kubernetes cluster. Designed for
                security teams and cluster administrators.
              </Text>
              <Text size="sm" c="dimmed" mt="xl">
                © 2026 KubeSteward Authors. <br />
                Released under the Apache License 2.0.
              </Text>
            </Stack>

            <Stack gap="lg">
              <Text fw={900} size="lg">
                Project
              </Text>
              <Stack gap="xs">
                <Text
                  component="a"
                  href="https://github.com/kubesteward"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  Organization
                </Text>
                <Text
                  component="a"
                  href="https://github.com/kubesteward/kubesteward"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  Core Backend
                </Text>
                <Text
                  component="a"
                  href="https://github.com/kubesteward/kubesteward-cli"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  CLI Tool
                </Text>
              </Stack>
            </Stack>

            <Stack gap="lg">
              <Text fw={900} size="lg">
                Community
              </Text>
              <Stack gap="xs">
                <Text
                  component="a"
                  href="https://github.com/kubesteward/kubesteward/issues"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  GitHub Issues
                </Text>
                <Text
                  component="a"
                  href="#"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  Discussions
                </Text>
                <Text
                  component="a"
                  href="#"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  Contribution Guide
                </Text>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    </Box>
  );
}

export default App;
