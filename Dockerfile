FROM node:20-alpine3.19
WORKDIR /app
COPY . .
RUN npm install -g pnpm && pnpm i
EXPOSE 3000
CMD ["pnpm", "dev"]