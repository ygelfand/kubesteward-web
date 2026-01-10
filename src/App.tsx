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
  Divider,
  Image,
  AspectRatio,
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme
} from '@mantine/core'
import { 
  IconTerminal2, 
  IconDatabaseSearch, 
  IconShieldLock, 
  IconBrandGithub, 
  IconArrowRight,
  IconSun,
  IconMoon,
  IconExternalLink
} from '@tabler/icons-react'

function ThemeToggle() {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme('light', { getInitialValueInEffect: true });

  return (
    <ActionIcon
      onClick={() => setColorScheme(computedColorScheme === 'light' ? 'dark' : 'light')}
      variant="default"
      size="lg"
      radius="md"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === 'light' ? (
        <IconMoon size={20} stroke={1.5} />
      ) : (
        <IconSun size={20} stroke={1.5} />
      )}
    </ActionIcon>
  );
}

function App() {
  return (
    <Box>
      {/* Navbar */}
      <Box 
        component="header" 
        style={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 100, 
          backgroundColor: 'light-dark(rgba(255, 255, 255, 0.8), rgba(26, 27, 30, 0.8))',
          backdropFilter: 'blur(10px)',
          borderBottom: '1px solid var(--mantine-color-default-border)'
        }}
      >
        <Container size="lg" h={70}>
          <Group justify="space-between" h="100%">
            <Group gap="xs">
              <img src="/images/kube_steward_transparent.png" alt="Logo" style={{ height: 32 }} />
              <Text fw={800} size="xl" visibleFrom="sm">KubeSteward</Text>
            </Group>
            
            <Group gap="md">
              <Button 
                variant="subtle" 
                color="gray" 
                component="a" 
                href="https://github.com/kubesteward/kubesteward"
                leftSection={<IconBrandGithub size={18} />}
                visibleFrom="xs"
              >
                GitHub
              </Button>
              <ThemeToggle />
            </Group>
          </Group>
        </Container>
      </Box>

      {/* Hero Section */}
      <Container size="lg" py={120}>
        <Stack align="center" gap={40} ta="center">
          <Badge 
            size="xl" 
            variant="gradient" 
            gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
            radius="md"
            px={20}
          >
            Early Alpha v0.1.0
          </Badge>
          
          <Stack gap="md">
            <Title 
              style={{ 
                fontSize: 'clamp(40px, 8vw, 72px)', 
                lineHeight: 1.1,
                fontWeight: 900,
                letterSpacing: '-0.02em'
              }}
            >
              Kubernetes Audit <br />
              <Text 
                component="span" 
                inherit 
                variant="gradient" 
                gradient={{ from: 'blue', to: 'cyan' }}
              >
                Redefined.
              </Text>
            </Title>
            <Container size={700} p={0}>
              <Text size="xl" lh={1.6} c="dimmed">
                Secure, protocol-level audited access to your Kubernetes terminal sessions and SQL databases. 
                Built for security-first teams that demand total transparency.
              </Text>
            </Container>
          </Stack>
          
          <Group gap="md">
            <Button 
              size="xl" 
              radius="md"
              variant="gradient" 
              gradient={{ from: 'blue', to: 'cyan' }}
              component="a"
              href="https://github.com/kubesteward/kubesteward"
              leftSection={<IconBrandGithub size={22} />}
              style={{ boxShadow: '0 10px 20px rgba(34, 139, 230, 0.2)' }}
            >
              Get Started
            </Button>
            <Button 
              size="xl" 
              radius="md"
              variant="default"
              rightSection={<IconArrowRight size={22} />}
            >
              Documentation
            </Button>
          </Group>
        </Stack>
      </Container>

      {/* Features Section */}
      <Box bg="light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8))" py={100} style={{ borderTop: '1px solid var(--mantine-color-default-border)', borderBottom: '1px solid var(--mantine-color-default-border)' }}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing={40}>
            <Card padding={40} radius="lg" withBorder shadow="sm">
              <ThemeIcon size={64} radius="lg" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
                <IconTerminal2 size={36} />
              </ThemeIcon>
              <Text fw={800} size="xl" mt="xl">Terminal Proxying</Text>
              <Text size="md" c="dimmed" mt="md" lh={1.6}>
                Full TTY capture for spawn, exec, and ephemeral containers. 
                Replay sessions and track every keystroke with absolute precision.
              </Text>
            </Card>

            <Card padding={40} radius="lg" withBorder shadow="sm">
              <ThemeIcon size={64} radius="lg" variant="gradient" gradient={{ from: 'cyan', to: 'teal' }}>
                <IconDatabaseSearch size={36} />
              </ThemeIcon>
              <Text fw={800} size="xl" mt="xl">SQL Policy Engine</Text>
              <Text size="md" c="dimmed" mt="md" lh={1.6}>
                Native PostgreSQL wire-proxy. Intercept queries in real-time, apply 
                regex-based deny patterns, and prevent data exfiltration.
              </Text>
            </Card>

            <Card padding={40} radius="lg" withBorder shadow="sm">
              <ThemeIcon size={64} radius="lg" variant="gradient" gradient={{ from: 'indigo', to: 'blue' }}>
                <IconShieldLock size={36} />
              </ThemeIcon>
              <Text fw={800} size="xl" mt="xl">Zero-Trust Identity</Text>
              <Text size="md" c="dimmed" mt="md" lh={1.6}>
                Bootstrapped via CLI one-time codes. No long-lived tokens in the browser. 
                Built entirely on your existing Kubernetes RBAC.
              </Text>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Visual Audit Section */}
      <Container size="lg" py={100}>
        <Stack gap={60}>
          <Stack align="center" gap="xs" ta="center">
            <Title order={2} size={42} fw={900}>Visualizing Audit</Title>
            <Text size="lg" c="dimmed" style={{ maxWidth: 600 }}>
              The management dashboard provides a crystal-clear view of everything happening in your cluster.
            </Text>
          </Stack>
          
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            {[
              { src: '/images/dashboard_screenshot.png', title: 'Live Dashboard', desc: 'Real-time overview of active sessions and targets.' },
              { src: '/images/terminal_sessions_screenshot.png', title: 'Shell Auditing', desc: 'Deep dive into terminal commands and output.' },
              { src: '/images/sql_sessions_screenshot.png', title: 'SQL Visibility', desc: 'Monitor every database query and policy block.' }
            ].map((shot, i) => (
              <Card key={i} withBorder padding={0} radius="lg" shadow="md" style={{ overflow: 'hidden' }}>
                <Card.Section>
                  <AspectRatio ratio={16 / 10}>
                    <Image src={shot.src} alt={shot.title} />
                  </AspectRatio>
                </Card.Section>
                <Box p="xl">
                  <Text fw={800} size="lg">{shot.title}</Text>
                  <Text size="sm" c="dimmed" mt={4}>{shot.desc}</Text>
                </Box>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Repositories Section */}
      <Box py={100} style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}>
        <Container size="lg">
          <Stack gap={40}>
            <Title order={2} size={32} fw={900} ta="center">Modular Ecosystem</Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {[
                { label: 'Core / Backend', desc: 'APIServer, Operator & CRDs', url: 'kubesteward' },
                { label: 'CLI Tool', desc: 'kubectl plugin & proxy client', url: 'kubesteward-cli' },
                { label: 'Management UI', desc: 'React dashboard & analytics', url: 'kubesteward-ui' }
              ].map((repo) => (
                <Card key={repo.url} withBorder padding="xl" radius="md" component="a" href={`https://github.com/kubesteward/${repo.url}`} style={{ transition: 'all 0.2s ease', cursor: 'pointer' }}>
                  <Group justify="space-between" mb="xs">
                    <Text fw={800} size="lg">{repo.label}</Text>
                    <IconExternalLink size={18} c="dimmed" />
                  </Group>
                  <Text size="sm" c="dimmed">{repo.desc}</Text>
                  <Text size="xs" mt="md" fw={700} c="blue">View Repository</Text>
                </Card>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box component="footer" py={60} style={{ borderTop: '1px solid var(--mantine-color-default-border)' }}>
        <Container size="lg">
          <Group justify="space-between">
            <Stack gap={4}>
              <Text fw={800} size="lg">KubeSteward</Text>
              <Text size="sm" c="dimmed">© 2026 KubeSteward Authors. Released under Apache 2.0.</Text>
            </Stack>
            <Group gap={xl}>
              <Stack gap={8}>
                <Text fw={700} size="sm">Project</Text>
                <Text size="sm" component="a" href="https://github.com/kubesteward" c="dimmed" style={{ textDecoration: 'none' }}>GitHub</Text>
                <Text size="sm" component="a" href="#" c="dimmed" style={{ textDecoration: 'none' }}>Documentation</Text>
              </Stack>
              <Stack gap={8}>
                <Text fw={700} size="sm">Community</Text>
                <Text size="sm" component="a" href="https://github.com/kubesteward/kubesteward/issues" c="dimmed" style={{ textDecoration: 'none' }}>Issues</Text>
                <Text size="sm" component="a" href="#" c="dimmed" style={{ textDecoration: 'none' }}>Contribute</Text>
              </Stack>
            </Group>
          </Group>
        </Container>
      </Box>
    </Box>
  )
}

export default App
