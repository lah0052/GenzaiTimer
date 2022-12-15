# GenzaiTimer

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.6.

## Motivation

The Pomodoro technique is a time management method used by countless people. Its main purpose is to divide time spent working into more achievable chunks. Working on something for too long often leads to burnout, and a pomodoro timer is an excellent way to avoid that. Our website is meant to be an easy to use study tool with additional components to manage tasks, jot down ideas, and even enter deadlines. 

## Backend

This application uses Google's Firebase service for three main purposes. The first is hosting the live version of the website which allows our webapp to exist on more than a development server. Along with this we use firebase to authenticate and store data for each individual user. Users each have their own task list entries, journal entries, event entries, and timer settings. 

## Screenshots

Home page:

![CS-230 Genzai Home Page](https://user-images.githubusercontent.com/111936234/207761121-319a3ebf-3a25-4c8b-a166-ea9d33d40cc6.png)

Planner Page:

![CS-230 Genzai Events Page](https://user-images.githubusercontent.com/111936234/207761184-b12af62a-23a8-49c1-950c-076300f6a46f.png)

Journal Page:

![CS-230 Genzai Journal Page](https://user-images.githubusercontent.com/111936234/207762256-4d3bbb33-0b45-47db-b0c3-186f791b9cb4.png)

Settings Page:

![CS-230 Genzai Settings Page](https://user-images.githubusercontent.com/111936234/207761282-002bdb75-0fc3-4ee2-a6b2-b56230031288.png)

## Features
- Task List
  - Simple list to keep track of a users goals
- Timer
  - The timer keeps track of the user's work and break periods
- Journal
  - The journal is an open area to jot down notes of any kind
- Planner
  - The planner allows the user to add upcoming events with a date, time, title, and short description
- Settings
  - The settings page allows the user to customize the duration of their work and break periods
- Login / Logout
  - Users are able to login to their account to view all the public data associated with their account
- Notifications
  - Motivates the user to press on with uplifting messages

## How to Use
Follow a link to the user manual:
https://docs.google.com/document/d/1i5SRz69EA0boqifJlTOLl1DAsWNpeucqzqRpekefdiU/edit?usp=share_link

## Credits

- Jared Behr
- Anthony Coggins
- Justin Eaton
- Lewis Halstead
- Chris Henry
- Kaden McEldowney

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
