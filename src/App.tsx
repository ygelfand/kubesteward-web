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
  IconRocket,
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
      desc: "Real-time overview of active sessions and infrastructure health.",
    },
    {
      src: "/images/terminal_sessions_screenshot.png",
      title: "Shell Auditing",
      desc: "Forensic-grade recording of every keystroke and command.",
    },
    {
      src: "/images/sql_sessions_screenshot.png",
      title: "SQL Visibility",
      desc: "Layer 7 firewalling and query introspection for PostgreSQL and MySQL.",
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
                href="https://github.com/ygelfand/kubesteward"
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
      <Box style={{ position: "relative" }}>
        {/* Modern Radial Gradient Background */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at 50% -20%, light-dark(rgba(24, 100, 255, 0.1), rgba(24, 100, 255, 0.15)) 0%, transparent 65%)",
            pointerEvents: "none",
            zIndex: -1,
          }}
        />
        <Container size="lg" py={{ base: 80, md: 160 }}>
          <Stack align="center" gap={40} ta="center">
            
            <Box className="floating-logo" mb={-20}>
              <img 
                src="/images/kube_steward_transparent.png" 
                alt="KubeSteward Robot" 
                style={{ width: 220, height: 'auto', filter: 'drop-shadow(0 10px 30px rgba(59, 130, 246, 0.3))' }} 
              />
            </Box>

            <Badge
              size="lg"
              variant="outline"
              color="blue"
              radius="xl"
              px={20}
              py={14}
              style={{ textTransform: "none", fontWeight: 600, border: '1px solid light-dark(var(--mantine-color-blue-2), var(--mantine-color-blue-8))' }}
            >
              🚀 v0.1.0 Alpha Release is here
            </Badge>

            <Stack gap="xl">
              <Title
                style={{
                  fontSize: "clamp(48px, 8vw, 84px)",
                  lineHeight: 1.1,
                  fontWeight: 900,
                  letterSpacing: "-0.03em",
                }}
              >
                Privileged Access. <br />
                <Text
                  component="span"
                  inherit
                  variant="gradient"
                  gradient={{ from: "blue.5", to: "cyan.4", deg: 45 }}
                >
                  Uncompromised.
                </Text>
              </Title>
              <Container size={750} p={0}>
                <Text size="xl" lh={1.6} c="dimmed" style={{ fontSize: "22px", textWrap: "balance" }}>
                  The zero-trust gateway for terminal sessions and SQL databases.
                  Replace shared credentials with ephemeral, audited, and policy-driven connections.
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
                href="https://docs.kubesteward.com/installation"
                leftSection={<IconRocket size={24} />}
                style={{ height: 60, paddingLeft: 35, paddingRight: 35 }}
              >
                Get Started
              </Button>
              <Button
                size="xl"
                radius="md"
                variant="default"
                component="a"
                href="https://docs.kubesteward.com"
                rightSection={<IconArrowRight size={24} />}
                style={{ height: 60, paddingLeft: 35, paddingRight: 35 }}
              >
                Documentation
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>

      {/* Visual Audit Gallery */}
      <Container size="lg" py={80}>
        <Stack gap={60}>
          <Stack align="center" gap="xs" ta="center">
            <Title
              order={2}
              size={48}
              fw={900}
              style={{ letterSpacing: "-1.5px" }}
            >
              Absolute Visibility.
            </Title>
            <Text size="xl" c="dimmed" style={{ maxWidth: 650 }}>
              KubeSteward intercepts and records every interaction at the protocol level, providing a forensic-grade audit trail.
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
                  transform: hoveredIndex === i ? "translateY(-8px)" : "translateY(0)",
                  borderColor:
                    hoveredIndex === i
                      ? "var(--mantine-color-blue-filled)"
                      : undefined,
                }}
              >
                <Card.Section style={{ position: "relative" }}>
                  <AspectRatio ratio={16 / 10}>
                    <Image src={shot.src} alt={shot.title} fallbackSrc="https://placehold.co/600x400/1a1b1e/2c2e33?text=Preview+Coming+Soon" />
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
                text: "Full TTY capture for spawn, exec, and ephemeral containers. Records every byte of stdin/stdout/stderr for searchable, replayable audit logs.",
              },
              {
                icon: IconDatabaseSearch,
                title: "SQL Firewall",
                color: "cyan",
                text: "Native wire-proxy for PostgreSQL and MySQL. Use deep parsing to block dangerous commands like DROP or DELETE before they reach your backend.",
              },
              {
                icon: IconShieldLock,
                title: "Zero-Trust Identity",
                color: "indigo",
                text: "Leverages Kubernetes API Aggregation and RBAC. Authenticate via CLI using existing OIDC/IAM providers without long-lived browser sessions.",
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

      {/* Kubernetes-Native Policies */}
      <Container size="lg" py={120}>
        <Stack gap={60}>
          <Stack align="center" gap="xs" ta="center">
            <Title
              order={2}
              size={42}
              fw={900}
              style={{ letterSpacing: "-1px" }}
            >
              Native Configuration
            </Title>
            <Text size="xl" c="dimmed" style={{ maxWidth: 700 }}>
              Manage access targets using standard Kubernetes Custom Resources.
              Policy-as-code that integrates with your existing GitOps workflows.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40}>
            <Card
              withBorder
              radius="xl"
              p={40}
              bg="light-dark(white, var(--mantine-color-dark-7))"
              style={{ transition: 'transform 0.2s ease' }}
            >
              <Group mb="xl">
                <ThemeIcon size={54} radius="md" color="blue" variant="light">
                  <IconTerminal2 size={32} />
                </ThemeIcon>
                <Box>
                  <Text fw={900} size="22px">
                    TerminalTarget
                  </Text>
                  <Text size="sm" c="dimmed">
                    Secure shell definition
                  </Text>
                </Box>
              </Group>
              <Stack gap="sm">
                <Text size="md" lh={1.6}>
                  Control how users connect to your pods with modes for:
                </Text>
                <Group gap="xs">
                  <Badge variant="dot">Spawn Pods</Badge>
                  <Badge variant="dot">Ephemeral Containers</Badge>
                  <Badge variant="dot">Direct Exec</Badge>
                </Group>
                <Text size="md" mt="md" c="dimmed">
                  Enforce TTLs, resource limits, and command white-lists per target.
                </Text>
              </Stack>
            </Card>

            <Card
              withBorder
              radius="xl"
              p={40}
              bg="light-dark(white, var(--mantine-color-dark-7))"
              style={{ transition: 'transform 0.2s ease' }}
            >
              <Group mb="xl">
                <ThemeIcon size={54} radius="md" color="cyan" variant="light">
                  <IconDatabaseSearch size={32} />
                </ThemeIcon>
                <Box>
                  <Text fw={900} size="22px">
                    SQLTarget
                  </Text>
                  <Text size="sm" c="dimmed">
                    Managed database connectivity
                  </Text>
                </Box>
              </Group>
              <Stack gap="sm">
                <Text size="md" lh={1.6}>
                  Secure database endpoints with:
                </Text>
                <Group gap="xs">
                  <Badge variant="dot" color="cyan">
                    Query Interception
                  </Badge>
                  <Badge variant="dot" color="cyan">
                    Human-in-the-loop Approval
                  </Badge>
                  <Badge variant="dot" color="cyan">
                    Credential Injection
                  </Badge>
                </Group>
                <Text size="md" mt="md" c="dimmed">
                  Mask sensitive data and block destructive DDL operations.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

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
            Open Source & Modular
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
            {[
              {
                label: "Core Backend",
                desc: "Go-based APIService and Controller. Handles all proxying logic, SQL parsing, and audit persistence.",
                url: "kubesteward",
              },
              {
                label: "CLI Tool",
                desc: "A powerful kubectl plugin for connecting to targets and managing session lifecycles.",
                url: "kubesteward-cli",
              },
              {
                label: "Management UI",
                desc: "React dashboard for live monitoring, session replay, and forensic investigation.",
                url: "kubesteward-ui",
              },
            ].map((repo) => (
              <Card
                key={repo.url}
                withBorder
                padding={40}
                radius="xl"
                component="a"
                href={`https://github.com/ygelfand/${repo.url}`}
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
                High-fidelity auditing and secure shell & database access for Kubernetes.
                Designed for the next generation of cloud-native infrastructure.
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
                  href="https://github.com/ygelfand"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  Organization
                </Text>
                <Text
                  component="a"
                  href="https://github.com/ygelfand/kubesteward"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  Core Backend
                </Text>
                <Text
                  component="a"
                  href="https://docs.kubesteward.com"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  Documentation
                </Text>
              </Stack>
            </Stack>

            <Stack gap="lg">
              <Text fw={900} size="lg">
                Resources
              </Text>
              <Stack gap="xs">
                <Text
                  component="a"
                  href="https://github.com/ygelfand/kubesteward/issues"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  GitHub Issues
                </Text>
                <Text
                  component="a"
                  href="https://github.com/ygelfand/kubesteward-docs"
                  c="dimmed"
                  style={{ textDecoration: "none" }}
                >
                  Docs Repo
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
