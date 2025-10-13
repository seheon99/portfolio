### Tech stack

![TypeScript](https://img.shields.io/badge/typescript-black?style=for-the-badge&logo=typescript)
![Next.js](https://img.shields.io/badge/nextjs-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/tailwind%20css-black?style=for-the-badge&logo=tailwindcss)

### GitHub Action

After a pull request to the `main` branch, the GitHub Action will automatically check the code quality with **ESLint** and **Prettier**.

After pushing to `main`, the GitHub Action will automatically build and deploy to [GitHub Pages](https://seheon99.github.io).

### Docker

You can containerize the application with the included Dockerfile. From the project root run:

```bash
docker build -t portfolio .
```

If your environment requires a mirror for base images, you can override the
Node image that the Dockerfile pulls:

```bash
docker build -t portfolio --build-arg NODE_IMAGE=mirror.gcr.io/library/node:22-alpine .
```

To start the container on port 3000:

```bash
docker run --rm -p 3000:3000 portfolio
```

Then visit http://localhost:3000 to access the app.
