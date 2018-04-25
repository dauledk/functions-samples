FROM node:8.9.4 
# https://hub.docker.com/_/node/

USER root

# a few environment variables to make NPM installs easier
ENV TERM xterm
ENV npm_config_loglevel warn
ENV npm_config_unsafe_perm true
ENV npm_config_depth 0

############################
### Install dependencies ###
############################
WORKDIR /usr/app

# Instal firebase functions dependencies
COPY functions/package.json functions/package.json
WORKDIR functions
RUN npm install
WORKDIR /usr/app

# After installing dependencies copy the whole codebase into the Container
COPY . .

# Finally run the test!
RUN npm run -s test

