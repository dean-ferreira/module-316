# alab-316.4.1

## About the Project

This lab provides instructions for implementing a variety of validation requirements using a combination of built-in HTML validation and DOM event-driven JavaScript validation.

## Objectives

-   Create robust form validation using built-in HTML validation attributes and DOM event-driven JavaScript validation.

## Built With

-   JavaScript
-   npm
-   Jest (JavaScript testing framework)
-   Babel (JavaScript compiler)

## Getting Started

### Prerequisites

-   npm (Node Packet Manager)

    -   To install npm, you need to install Node.js, which includes npm
    -   Install Node.js via installer: https://nodejs.org/en/download/current
    -   Verify installation by running

        ```sh
        node -v
        npm -v
        ```

    -   If installed correctly, these commands will display the versions of Node.js and npm installed on your system

### Installation

1. Clone the repo and then navigate to the new directory
    ```sh
    git clone git@github.com:dean-ferreira/module-316.git
    cd module-316
    git checkout alab/316.4.1
    ```
2. (OPTIONAL) After cloning this repository and installing npm, it's time to install Jest and Babel
    ```sh
    npm install --save-dev jest @babel/core @babel/preset-env
    ```
    Create a `.babelrc` file in your project directory with the following configuration to specify the preset:
    ```sh
    {"presets": ["@babel/preset-env"]}
    ```
    Install `babel-jest` as a development dependency:
    ```sh
    npm install --save-dev babel-jest
    ```

## Usage

-   You can run all test suites by entering the follow command:
    ```sh
    npm test
    ```
-   Preview form validation by launching a local development server
