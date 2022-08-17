
![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Prime Solo Project Starting Repo

_Duration: 2 week sprint_

Secret Stash allow users to share their recipe with the Secret Stash community. The Home page shows all recipes from all users. My Stash shows the logged user recipe. From there the user can add a new recipe, or upon reviewing their recipe they can edit or delete it.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](www.heroku.com)

## Challenges
I faced two challenges while building this application.

The first challenge was POST. I was uncertain how to set up with post router and SQL as I have three tables, recipe, ingredient and instruction. The ingredient and instruction cannot be updated unless I have the recipe ID. I figured out that I can have more than one SQL in a router. The first SQL would enter into recipe table the title and return the recipe ID, so it can be pass along to the ingredient and instruction table. As for inserting the ingredient and instruction table, couldn't wrap my head around going about those as it's dynamic. With Liz helped we figured out that we'll need to loop through each inputs for the ingredient and instruction so it can loop through and insert each new inputs.

Second challenge was the PUT. Again with the dynamic inputs it was hard to grab onto the ID I was trying to change. First attempted was able to grab onto the ID, but if I only change one input in the ingredient or instruction row, it would return the untouch values empty. Second attempt, I could not target the ID and it would change anything in the same column. With Liz help, I was able to target the ID, change the input and return any values I did not touch/change.

## Next Steps

I would like to implment a search bar, option to upload image, and view for favorite recipes.


## Prerequisites

This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

Create a new database called `secret_stash` and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

Additional data in database.sql.

## Development Setup Instructions

- Run `npm install`
- Run `npm run server`
- Run `npm run client`
- Navigate to `localhost:3000`

if Material UI did not come in package.json:
- Run npm install @mui/material @emotion/react @emotion/styled

If package.jason does not have react, redux, and logger:

- Run `npm install redux@4 react-redux@7`
- Run `npm install redux-logger@3`


## Production Build

Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- Start postgres if not running already by using `brew services start postgresql`
- Run `npm start`
- Navigate to `localhost:5000`


## Screen Recordings
https://user-images.githubusercontent.com/83591115/185019283-f44a39d5-b22d-42a2-89fb-62bae2ecdfd4.mov

https://user-images.githubusercontent.com/83591115/185019327-a6eb253a-f205-4de8-92d7-f6c2d4c0747c.mov

https://user-images.githubusercontent.com/83591115/185019363-5d3ff702-eb05-4fae-9bc5-9544277785a1.mov


## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thanks to our insturctors - Liz and Dane for their guidance and dynamatic teaching skills. Last, but not least Thanks to all my classmates for their support and estatic attitude. Specail Thanks to Maria Isabel, Avery, Issac, Deigo, Nate, and Mike for being rubber duckies, providing insight, and debugging!
