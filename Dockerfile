FROM node:current-slim

#Install Git
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y git

# Install react-native-cli & detox-cli
RUN npm install -g react-native-cli
RUN npm -g install detox-cli

WORKDIR /usr/src/app

# Copy app code including tests to the image
COPY . .

# Install all the dependencies
RUN yarn install

# The below steps can be enabled once we add Android environment set up steps to this docker file

# RUN yarn start &

# RUN detox build -c android:emulator:release

# RUN yarn e2e:android:emulator:release
# RUN yarn report
