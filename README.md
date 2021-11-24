# Elevate Landing page

This project was generated with [Angular CLI](https://github.com/angular/angular-cli).

## Install dependencies

Run `npm install`

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/elevate/`. The app will automatically reload if you change any of the source files.

With docker:

`docker build -t elevate-landingpage -f Dockerfile.dev .`

`docker run --rm -it --name elevate-landingpage -p 4200:4200 -v $(pwd):/app elevate-landingpage`

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

With docker:

`docker build -t elevate-landingpage -f Dockerfile.prod .`

`docker run --rm -it --name elevate-landingpage -v $(pwd):/app elevate-landingpage`
