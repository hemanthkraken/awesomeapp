# Installation

##### Global pre-requisites:

-   Detox: `npm install -g detox-cli`
-   React Native: `npm install -g react-native-cli`

##### App dependencies:
-   `yarn install`

# Running the app on Android

- `yarn android`

# Testing
##### Android:
Build the Android release mode binary with detox instrumentation in it
`detox build -c android:emulator:release`

Running the tests on release mode build
`detox test -c android:emulator:release`

Running the Cucumber features 
-   Android emulator: `yarn e2e:android:emulator:release` 

this depends on the emulator named Pixel_4_API_R, feel free to update `avdName: "Pixel_4_API_R"` as required in `.detoxrc.json`

##### Test Reports:
Run `yarn report`
A cucumber html report will be opened from `e2e/cucumber_report.html`
- Screenshots will be embedded into the corresponding test step in case of failure
- Any explicit screenshots taken in the test steps will also be added to this report

##### Sample html report
![Cucumber html report](html_report.png?raw=true "Cucumber html report")

# Dockerize tests
#### Image
Create an image containing the tests and required dependencies:
`docker build --tag awesomeapp:1.0 .`
(Note: only test dependencies are included in the `.dockerfile` of this project. Dependencies required to run the tests like, Android environment and emulator are not added. We can modify the `.dockerfile` to install them within the docker container or we can use existing docker-android images like [docker-android](https://github.com/budtmo/docker-android) ) 
![Dockerized Tests Image](dockerimage.png?raw=true "Dockerized tests image")



# Where's everything?

-   Views: `./App/Containers`

-   Components: `./App/Components`

-   Cucumber Features: `./e2e/features/*.feature`

-   Detox JS tests: `./e2e/Tests/*.js`

-   Step Definitions: `./e2e/features/step_definitions/*.js`

-   Detox configurations: `./.detoxrc.json`
