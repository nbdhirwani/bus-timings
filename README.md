# Bus Reports

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Optionally you can run `ng serve --open` to start the servere and automatically open the `http:localhost:4200` in the default browser.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Assumptions

In addition to the requirements described, I have made following assumptions

1. First three letters of route variant are bus route numbers
2. Route variant value will never be null, instead it will be "UNKNOWN"
3. Logic for the derived field "Status" is as follows
    * When deviationFromTimetable is null then Status is "Unknown" [color code "blueviolet"]
    * Else When deviationFromTimetable is negative then Status is "Early" [color code "blue"]
    * Else When deviationFromTimetable is between 0 and 300 then Status is "On Time" [color code "green"]
    * Else When deviationFromTimetable is above 300 then Status is "Late" [color code "red"]
4. The application is compatible with chrome. Support for other browsers is not guaranteed.