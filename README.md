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

## Appointment Booking

## Appointment Cancellation






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
