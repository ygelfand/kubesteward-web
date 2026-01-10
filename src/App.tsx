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
  Divider 
} from '@mantine/core'
import { 
  IconTerminal2, 
  IconDatabaseSearch, 
  IconShieldLock, 
  IconBrandGithub, 
  IconArrowRight 
} from '@tabler/icons-react'

function App() {
  return (
    <Box py="xl">
      {/* Hero Section */}
      <Container size="lg" py={80}>
        <Stack align="center" gap="xl" ta="center">
          <img src="/images/kube_steward.png" alt="KubeSteward Logo" style={{ height: 120 }} />
          <Stack gap="xs">
            <Title size={48} fw={900}>
              KubeSteward
            </Title>
            <Text size="xl" c="dimmed" style={{ maxWidth: 600 }}>
              Secure, audited access to your Kubernetes terminal sessions and SQL databases. 
              Designed for teams that need transparency without compromising security.
            </Text>
          </Stack>
          
          <Group gap="md">
            <Button 
              size="lg" 
              variant="gradient" 
              gradient={{ from: 'blue', to: 'cyan' }}
              component="a"
              href="https://github.com/kubesteward/kubesteward"
              leftSection={<IconBrandGithub size={20} />}
            >
              View on GitHub
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              color="blue"
              rightSection={<IconArrowRight size={20} />}
            >
              Read Documentation
            </Button>
          </Group>
          
          <Badge size="lg" variant="dot" color="yellow">Early Alpha - Work in Progress</Badge>
        </Stack>
      </Container>

      {/* Features Section */}
      <Box bg="light-dark(var(--mantine-color-gray-0), var(--mantine-color-dark-8))" py={80}>
        <Container size="lg">
          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <Card padding="xl" radius="md" withBorder shadow="sm">
              <ThemeIcon size={48} radius="md" variant="light" color="blue">
                <IconTerminal2 size={28} />
              </ThemeIcon>
              <Text fw={700} size="lg" mt="md">Terminal Proxying</Text>
              <Text size="sm" c="dimmed" mt="sm">
                Secure shell access via spawn, exec, or ephemeral containers. 
                Fully audited with real-time command capture and playback.
              </Text>
            </Card>

            <Card padding="xl" radius="md" withBorder shadow="sm">
              <ThemeIcon size={48} radius="md" variant="light" color="cyan">
                <IconDatabaseSearch size={28} />
              </ThemeIcon>
              <Text fw={700} size="lg" mt="md">SQL Auditing</Text>
              <Text size="sm" c="dimmed" mt="sm">
                Protocol-level proxying for PostgreSQL. Record queries and block 
                dangerous operations with regex-based deny patterns.
              </Text>
            </Card>

            <Card padding="xl" radius="md" withBorder shadow="sm">
              <ThemeIcon size={48} radius="md" variant="light" color="indigo">
                <IconShieldLock size={28} />
              </ThemeIcon>
              <Text fw={700} size="lg" mt="md">Identity-Driven</Text>
              <Text size="sm" c="dimmed" mt="sm">
                Uses existing Kubernetes RBAC. Login securely via CLI one-time codes 
                without exposing long-lived tokens to the browser.
              </Text>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Repositories Section */}
      <Container size="lg" py={80}>
        <Stack align="center" gap="xl">
          <Title order={2}>Project Components</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" style={{ width: '100%' }}>
            <Card withBorder padding="lg" shadow="xs">
              <Group justify="space-between">
                <Text fw={700}>Core / Backend</Text>
                <IconBrandGithub size={20} />
              </Group>
              <Text size="sm" c="dimmed" mt="xs">
                The APIServer, Operator, and CRDs. Built with Go and controller-runtime.
              </Text>
              <Button variant="light" size="xs" mt="md" component="a" href="https://github.com/kubesteward/kubesteward">kubesteward/kubesteward</Button>
            </Card>

            <Card withBorder padding="lg" shadow="xs">
              <Group justify="space-between">
                <Text fw={700}>CLI Tool</Text>
                <IconBrandGithub size={20} />
              </Group>
              <Text size="sm" c="dimmed" mt="xs">
                The kubectl plugin and shell proxy client. Secure terminal interaction.
              </Text>
              <Button variant="light" size="xs" mt="md" component="a" href="https://github.com/kubesteward/kubesteward-cli">kubesteward/kubesteward-cli</Button>
            </Card>

            <Card withBorder padding="lg" shadow="xs">
              <Group justify="space-between">
                <Text fw={700}>Management UI</Text>
                <IconBrandGithub size={20} />
              </Group>
              <Text size="sm" c="dimmed" mt="xs">
                The React dashboard for audit log browsing and session monitoring.
              </Text>
              <Button variant="light" size="xs" mt="md" component="a" href="https://github.com/kubesteward/kubesteward-ui">kubesteward/kubesteward-ui</Button>
            </Card>
          </SimpleGrid>
        </Stack>
      </Container>

      {/* Footer */}
      <Divider />
      <Container size="lg" py="xl">
        <Group justify="space-between">
          <Text size="sm" c="dimmed">© 2025 KubeSteward Authors</Text>
          <Group gap="xs">
            <Button variant="subtle" size="xs" component="a" href="https://github.com/kubesteward">GitHub</Button>
            <Button variant="subtle" size="xs">Documentation</Button>
          </Group>
        </Group>
      </Container>
    </Box>
  )
}

export default App
