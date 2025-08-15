FROM node:22.18.0-alpine3.21

WORKDIR /app
RUN corepack enable && corepack prepare pnpm
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod
COPY . .
EXPOSE 3000

CMD ["pnpm", "start"]
