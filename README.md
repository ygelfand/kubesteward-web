# KubeSteward

**Kubernetes Audit Redefined.**

KubeSteward is a Kubernetes-native platform for secure, audited access to your clusters. It provides a centralized proxy for terminal sessions and SQL queries, ensuring absolute transparency and zero-trust security.

[View Landing Page](https://kubesteward.io) | [Main Repository](https://github.com/kubesteward/kubesteward)

## Key Highlights

- **Kubernetes-Native Policies**: Define access using `TerminalTarget` and `SQLTarget` CRDs.
- **Terminal Proxying**: Full TTY capture and command extraction for spawn, exec, and ephemeral containers.
- **SQL Audit & Enforcement**: Real-time PostgreSQL wire-proxy with regex-based query blocking (e.g., preventing `DROP TABLE`).
- **Zero-Trust Identity**: Secure CLI-to-Web handover using one-time login codes—no long-lived browser tokens.
- **Centralized Auditing**: Comprehensive logs stored in external databases (PostgreSQL/SQLite) for compliance and analysis.
- **Modern Dashboard**: Real-time session monitoring and audit log exploration built with React 19 and Mantine UI.

## Project Structure

KubeSteward is built for modularity across several repositories:

- [**kubesteward**](https://github.com/kubesteward/kubesteward): Core Go-based Aggregated API Server, Operator, and CRDs.
- [**kubesteward-cli**](https://github.com/kubesteward/kubesteward-cli): A powerful `kubectl` plugin for terminal and SQL proxying.
- [**kubesteward-ui**](https://github.com/kubesteward/kubesteward-ui): The React-based management dashboard.
- [**kubesteward-web**](https://github.com/kubesteward/kubesteward-web): (This repo) The official landing page.

## Tech Stack (Landing Page)

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **UI Library**: [Mantine UI](https://mantine.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)

## Local Development

```bash
npm install
npm run dev
```

## License

KubeSteward is released under the [Apache License 2.0](LICENSE).