# Visit my portfolio page: [portfolio.seheon.kr](https://portfolio.seheon.kr)

## Tech stack

![TypeScript](https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript)
![Next.js](https://img.shields.io/badge/nextjs-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/tailwind%20css-black?style=for-the-badge&logo=tailwindcss)

---

## CI / CD Pipeline

This project uses a GitHub Actions–based CI/CD pipeline designed for **reproducible builds**, **secure artifact delivery**, and **safe production deployment**.


### Continuous Integration (CI)

Every push, pull request, tag, and scheduled run triggers a Docker build:

* Docker images are built using **Buildx** with GitHub Actions cache enabled.
* On pull requests, images are **built but not published**, ensuring changes are validated without affecting external systems.
* Image metadata (tags, labels) is automatically generated using `docker/metadata-action`.

This approach allows early detection of build issues while keeping pull requests isolated from the registry and deployment pipeline.


### Secure Image Publishing

On non–pull request events (e.g. `main` branch or version tags):

* Images are published to **GitHub Container Registry (ghcr.io)**.
* Each image is **signed with Cosign** using GitHub’s OIDC identity provider.
* No long-lived secrets are stored; signing uses short-lived, ephemeral certificates.

This ensures that every published container image is verifiable and traceable, following modern **software supply chain security** practices.


### Digest-Based Deployment

Instead of deploying by tag, this pipeline deploys **by image digest**:

* The exact image digest produced during CI is passed to the deployment stage.
* The remote server updates its environment configuration with this digest.
* Docker Compose then pulls and runs **that exact immutable image**.

This guarantees:

* Full reproducibility
* Safe rollbacks
* Zero ambiguity between build and runtime artifacts


### Continuous Deployment (CD)

Deployment is performed via SSH to a self-hosted server:

* Only successful, signed builds trigger deployment.
* The service is updated with `docker compose up -d --no-deps`, minimizing disruption.
* Pull requests never trigger deployment.

This separation ensures that only validated and trusted artifacts reach production.
