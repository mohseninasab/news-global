FROM node:23-alpine3.20
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm i
EXPOSE 3000
CMD ["pnpm", "dev"]