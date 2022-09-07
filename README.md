# Weather Widget

This is a JS application created with TailwindCSS, React.js & axios.

# Table of contents
- [Weather Widget](#weather-widget)
- [Table of contents](#table-of-contents)
- [General-Information <a name="general-information"></a>](#general-information-)
- [Tech Stack <a name="tech-stack"></a>](#tech-stack-)
- [Setup <a name="setup"></a>](#setup-)
  - [Dependencies <a name="dependencies"></a>](#dependencies-)
  - [Installation <a name="Installation"></a>](#installation-)
- [Future-Work <a name="future-work"></a>](#future-work-)

# General-Information <a name="general-information"></a>

The main purpose was to create an application which renders the weather and the weather forecast for the following days. I used uizard webpage for drafting a single-page app and wrote down state diagrams. I created a trello board for progress management after that and translated the state diagrams to software tickets. The application was created with Next.js using React.js and styled with TailwindCSS framework. It is responsive and scalable; I considered both mobile and web views. If you enter into the responsive design from your browser, you can see changes on the design, as a few components are disabled when the screen resolution goes down. The weather-widget application fetches data from the openweathermap api using an axios object.

# Tech Stack <a name="tech-stack"></a>

```
JavaScript
React
TailwindCSS
CSS
HTML
Axios.js
```

# Setup <a name="setup"></a>

## Dependencies <a name="dependencies"></a>

<br> -> Please have a look at the list below in order to see the version of each dependency that the developer used. <-

```
axios: ^0.27.2
dotenv: ^16.0.2
next: 12.2.5
react: 18.2.0
react-dom: 18.2.0
autoprefixer: ^10.4.8
eslint: 8.23.0
eslint-config-next: 12.2.5
postcss: ^8.4.16
tailwindcss: ^3.1.8
```
## Installation <a name="Installation"></a>

To run this project you will need to clone this repository onto your local machine.

```
$ git clone https://github.com/imevanc/weather-widget
```

Navigate inside the folder and install all dependencies by entering the following commands on your terminal window:

```
$ cd weather-widget
$ npm install
```

Create an [openweathermap account](https://openweathermap.org) and paste your api key in a dotenv file in the root of this project. You can find more information on how to do it on the docs of [Next.js](https://nextjs.org/docs/basic-features/environment-variables)

To run the application locally enter:

```
$ npm run dev
```

The application will run on http://localhost:3000.

# Future-Work <a name="future-work"></a>

- Hosting on Netlify or similar services.
- Type Checking: There is no type checking at the moment. I would convert all the code in Typescript, if I had to do it again.
- User Friendly messages for API loading and error states.
- State Management for storing the API response. However, there is not state drifting at the moment even without the state management.
