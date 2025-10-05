FROM node:22-alpine
WORKDIR /app

RUN apk update
RUN apk add --no-cache libc6-compat

RUN corepack enable pnpm

COPY package.json pnpm-lock.yaml ./
COPY next.config.js tailwind.config.ts tsconfig.json ./

COPY ./src ./src

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

RUN chown -R nextjs:nodejs /app
USER nextjs

RUN pnpm install --frozen-lockfile
RUN pnpm build

EXPOSE 3000

CMD ["pnpm", "start"]