FROM node:10.24.1-slim AS build

## install chrome + required tools
RUN echo "deb http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list && \
wget http://dl-ssl.google.com/linux/linux_signing_key.pub && \
apt-key add linux_signing_key.pub

RUN apt-get update && \
apt-get -y install google-chrome-stable bzip2 && \
apt-get clean

# copy in package*.json only so we can cache dependencies
COPY package*.json src/

WORKDIR ./src

# install npm modules
RUN npm ci --verbose

# copy in the rest of the source
COPY . .

# build/transpile
RUN npm run build
