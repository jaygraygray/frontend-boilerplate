FROM node:alpine
LABEL maintainer="jeremygray001@gmail.com"

# Create directory for application
WORKDIR "/build"

# Copy package and lock files
COPY ./package*.json ./
COPY ./tsconfig.json ./

RUN npm ci

COPY public/ public
COPY src/ src
COPY scripts/ scripts
COPY config/ config
ENV NODE_ENV=production
RUN npm run build-prod

CMD ["npm", "start"]