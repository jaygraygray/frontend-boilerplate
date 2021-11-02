FROM node:alpine
LABEL maintainer="jeremygray001@gmail.com"

# Create directory for application
WORKDIR "/build"

# Copy package and lock files
COPY ./package*.json ./

RUN npm ci

COPY public/ public
COPY src/ src
RUN npm run build

FROM nginx:alpine
COPY --from=build /build/build/ /usr/share/nginx/html