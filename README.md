# Skeletos - A Node.js, Express, TypeScript project skeleton

This is a skeleton project for building applications using Node.js, Express, and TypeScript.
It comes pre-configured with essential tools and libraries, including TypeScript, ESLint, Prettier, Jest, and Docker,
to help you get started quickly and maintain code quality.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
  - [TypeScript](#typescript)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [Jest](#jest)
  - [Docker](#docker)
- [Usage](#usage)
- [License](#license)

## Features

- TypeScript for type safety
- Express for building web applications
- ESLint for linting and code quality
- Prettier for code formatting
- Jest for testing
- Docker for containerization

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node Version Manager (nvm)](https://github.com/nvm-sh/nvm) (to manage Node.js versions)
- [Docker](https://www.docker.com/) (latest version)

## Installation

1. **Install nvm** (if you haven't already):

Follow the instructions in the [nvm repository](https://github.com/nvm-sh/nvm#installing-and-updating) to install nvm.

2. **Clone the repository**:

```bash
git clone https://github.com/gvre/skeletos.git
```

3. **Navigate to the project directory**:

```bash
cd skeletos
```

4. **Install Node.js using nvm**:

```bash
nvm install
```

5. **Install the dependencies**:

```bash
npm install
```

## Configuration

### TypeScript

The TypeScript configuration is located in `tsconfig.json`. It includes settings for compiling TypeScript using strict rules.

### ESLint

ESLint is configured in `eslint.config.js`. It helps maintain code quality by enforcing coding standards. You can customize the rules as needed.

### Prettier

Prettier is configured in `.prettierrc`. It ensures consistent code formatting across the project. You can adjust the settings to fit your preferences.

### Jest

Jest is configured in `jest.config.js`. It is set up for testing TypeScript files.

### Docker

The project includes a `Dockerfile` for containerization. This allows you to build and run your application in a Docker container.

## Usage

The following scripts are available in `package.json`:

- `npm run build`: Compiles the TypeScript files to do syntax checking.
- `npm run start`: Starts the application in production mode.
- `npm run dev`: Starts the application in development mode with hot reloading.
- `npm run test`: Runs the Jest test suite.
- `npm run lint`: Runs ESLint to check
- `npm run lint:circular`: Runs Madge to check for circular dependencies.
- `npm run lint:all`: Runs ESLint and Madge.

## License

- [MIT](LICENSE)
