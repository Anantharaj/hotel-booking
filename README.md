# Seera HotelBooking + Next.js frontend

This is an HotelBooking Application Fected the Hotel list directly from the end point. The Application usses Reactjs + Nextjs + ContextApi + Meterial UI

## Prerequisites

You will need [Node.js](https://nodejs.org) version 12.0 or greater installed on your system.

## Setup

Get the code by either cloning this repository using git

```
git clone https://github.com/Anantharaj/hotel-booking.git
```

... or [downloading source code] code as a zip archive.

Once downloaded, open the terminal in the project directory, and install dependencies with:

## Running locally in development mode

To get started, just clone the repository and run below command

## NPM

    git clone https://github.com/Anantharaj/hotel-booking.git
    npm install
    npm run dev

## Yarn

    git clone https://github.com/Anantharaj/hotel-booking.git
    yarn
    yarn dev

Note: If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.

The app should now be up and running at http://localhost:3000 🚀

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

## NPM

    npm install
    npm run build
    npm start

## Yarn

    yarn
    yarn build
    yarn start

You should run `npm run build` again any time you make changes to the site.

Note: If you are already running a webserver on port 80 (e.g. Macs usually have the Apache webserver running on port 80) you can still start the example in production mode by passing a different port as an Environment Variable when starting (e.g. `PORT=3000 npm start`).

npm test or yarn test
Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

## Implimentaion

- User can select the date range to search hotels
- Display all hotels whose availability dates lies between the search dates.
- Display the total number of nights based on selected date range. (For example if user search from Aug 12, 2020 to Aug 17, 2020 than Total Number of Nights will be 5.)
- Display hotel price based on number of nights. (Price x Number of Nights)

### Features

- User is able to sort based on hotel name and price
- User is able to filter based on hotel name and price

### Web Accessibility

- Application also supports keyboard only users
- Application responds by using Tab(Forward moves), Shift + Tab(Backward moves), Enter(Selection), Left and Right (left and right moves) keys
