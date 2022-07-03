export default [
    {
        name: "Car/Garage REST API",
        description: "A REST API that models car/garage entities (supports all four CRUD operations) and assigns object ownership to authenticated users. Deployed on Google Cloud Platform with protected endpoints using OAuth2.0.",
        bullets: ['Authenticates via OAuth2.0 and creates new users with Google People API', 'Issues JWT to authenticated users; requires a valid JWT for certain methods', 'Implements pagination for both car and garage collections', 'Full test suite created in Postman to validate HTTP responses during development'],
        stack: ['JavaScript', 'NodeJS', 'Express', 'Postman'],
        imgUrl: "restapi.png",
        github: "https://github.com/r-hoff/car-garage-rest-api",
        link: "https://project-hoffr.uw.r.appspot.com/",
        pdf: {
            caption: "View API documentation",
            document: "car-garage-rest-api.pdf"
        }
    },
    {
        name: "Small Shell",
        description: "Command line program that emulates a shell, such as Bash. Runs well known commands using exec family of functions, as well as several custom commands.",
        bullets: ['Supports input/output redirection and custom variable expansion', 'Runs commands as foreground or background processes based on user input', 'Forks, tracks, and reaps child processes using pidwait', 'Custom SIGINT and SIGTSTP signal handlers'],
        stack: ['C', 'Linux'],
        imgUrl: "smallsh.png",
        github: "https://github.com/r-hoff/CS-344-A3-smallsh",
        link: null
    },
    {
        name: "SQL Entity Manager",
        description: "A full stack application for managing entity data for a fictitious cupcake company named Cakey's Bakery.",
        bullets: ['Created database outline and schema along with entity-relationship diagram, then built application to fit requirements', 'Utilizes Model-View-Controller architecture and RESTful backend design', 'Backend JavaScript functions execute dynamic SQL queries with error handling support'],
        stack: ['JavaScript', 'NodeJS', 'React', 'MySQL'],
        imgUrl: "entitymanager.png",
        github: "https://github.com/r-hoff/CS340-cakeys",
        link: null
    },
    {
        name: "Pizza Dough Planner",
        description: "A simple pizza dough planning application that allows users to add/delete ingredients and calculate the necessary measurements to make the desired number of pizzas.",
        bullets: ['Utilizes Unsplash public API to retrieve images based on user keyword searches', 'Designed and implemented with cognitive style heuristics in mind to support different types of users', 'Uses Sweetalert2 library for modals and user input collection/confirmation'],
        stack: ['JavaScript', 'Svelte', 'NodeJS'],
        imgUrl: "dough-app.png",
        github: "https://github.com/r-hoff/dough-app",
        link: "https://dough-app.vercel.app"
    },
    {
        name: "Portfolio Website",
        description: "You're looking at it! Minmalistic and fully responsive porfolio website built with modular/reactive components using React and customized Chakra UI design elements.",
        bullets: ['Special features such as light/dark mode toggle and mobile drawer menu, as well as several custom interactive components and animations', 'Components built to support accessibility wherever possible', 'Uses SwiperJS for carousel and EmailJS for user form collection', 'Hosted on a VPS running Ubuntu 20.04 and Apache'],
        stack: ['JavaScript', 'NodeJS', 'React', 'Vite', 'ChakraUI'],
        imgUrl: "portfolio-website.png",
        github: "https://github.com/r-hoff/personal-site",
        link: "https://rhoff.info"
    },
    {
        name: "Exercise Tracker",
        description: "A full stack application using an Express/Mongoose backend with React frontend. Allows users to create, read, update, and delete exercise entries.",
        bullets: ['Entries are managed via backend routes, stored in document based MongoDB database', 'Utilizes Model-View-Controller architecture', 'Frontend built with modular components and pages'],
        stack: ['JavaScript', 'NodeJS', 'React', 'MongoDB', 'Express'],
        imgUrl: "exercise-tracker.png",
        github: "https://github.com/r-hoff/exercise-tracker",
        link: null
    },
]