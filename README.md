# Interview Scheduler


## Project Description
Interview Scheduler is a SPA (Single Page Application) that allows users to book, edit, and delete interviews. The App is built using React with custom hooks and combines a concise API with a WebSocket server to build a realtime experience. Data is persisted by the API server using a PostgreSQL database.
The client application communicates with an API server over HTTP, using the JSON format. This project follows best practices of TDD (Test-Driven Development), using Storybook for UI testing, Jest for unit testing as well as Cypress for End-to-End testing.

## Project Details
- Appointment days are listed on a sidebar with the number of interview spots remaining
- Appointment days are highlighted based on state (selected, unselected, full)
- Selected day will display time slots (between 12pm to 5pm) with booked appointments or empty slots
- A user can create an interview during by clicking on an 'add' icon in an empty slot
- A user can book the interview by typing in a student name and selecting an interviewer from a list of interviewers
- A user can edit an existing appointment by clicking on the 'edit' icon
- A user can cancel an existing interview by clicking on the 'delete' icon
- Upon cancelling an interview, a notification message will appear to confirm deletion.

## Day View
!["Day View"](https://github.com/aaron-s-kim/scheduler/blob/master/docs/Day-view.png)
*Selecting a weekday on the left sidebar will show appointments and empty slots for that day*

## Appointment Booking
!["Appointment Booking"](https://github.com/aaron-s-kim/scheduler/blob/master/docs/Appointment-Booking.png)
*A user can book an interview by: selecting an empty slot, typing their name, clicking on an interviewer image, and clicking save*

## Appointment Cancellation
!["Appointment Cancellation"](https://github.com/aaron-s-kim/scheduler/blob/master/docs/Appointment-Cancellation.png)
*A user can delete an interview by: clicking the delete icon on an existing interview and clicking confirm on the delete message prompt*

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

## API Server
For full functionality, both the client and API server application must be run concurrently.
- Start by forking and cloning the scheduler-api server [here](https://github.com/lighthouse-labs/scheduler-api)
- Follow the steps outlined in README to install and setup the database
- Fork and clone this repo
- Navigate to the root directory and install dependencies with npm install
- Once you have the database setup and the scheduler-api server running, run the following command from the root directory of the project npm start


## Project Stack
Front-End: React, Axios, JSX, HTML, SASS, JavaScript
Back-End: Express, Node.js, PostgreSQL
Testing: Storybook, Webpack Dev Server, Jest, Testing Library and Cypress
