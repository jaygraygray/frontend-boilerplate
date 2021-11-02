FROM node:alpine
LABEL maintainer="jeremygray001@gmail.com"

# Create directory for application
WORKDIR "/app"

# Copy package and lock files
COPY ./package*.json ./

RUN npm install

# For production:
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 9000

CMD ["npm", "start"]