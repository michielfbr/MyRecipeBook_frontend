# MyRecipeBook :stew:

A place to store and browse through the recipes you collect

## Table of Contents

- [Description](https://github.com/michielfbr/MyRecipeBook_frontend#description)
- [Screenshots](https://github.com/michielfbr/MyRecipeBook_frontend#screenshots)
- [Technology](https://github.com/michielfbr/MyRecipeBook_frontend#technology-used)
- [Goals](https://github.com/michielfbr/MyRecipeBook_frontend#goals-for-this-project)
- [Userstories](https://github.com/michielfbr/MyRecipeBook_frontend#user-stories)
- [Wireframe](https://github.com/michielfbr/MyRecipeBook_frontend#wireframe)
- [Repositories](https://github.com/michielfbr/MyRecipeBook_frontend#repositories)

## Description

MyRecipeBook is a ReactJS web app I built to solve my own need for a way to store and then browse through the recipes I have collected over the years. Reipes can be added, edited and deleted. Along with tags and their ingredients, which are stored in different tables in the database.

The goal of this project was to design and create a fullstack web app from scratch. Witing user stories, modeling a database, creating wireframes, build your own backend with all the neccesary endpoints, build your own frontend to talk to the backend and present the user enything it needs and finally style everything to your own liking.

A big portion of work has gone into the form, where a user can add or edit an {ingredient} to the [ingredients ] nested in the {recipe}. In the backend the {recipe} is decomposed to the recipe table, the ingredients table and the join table which holds the ingredients quantity and unit information.
A recipe search also look over 3 different tables to return you all the recipes.
The app styling is very clean, wich is the result of quite some effort on details there.

[^ back to top](https://github.com/michielfbr/MyRecipeBook_frontend#myrecipebook-stew)

## Screenshots

![MyRecipeBook_demo](https://www.michielbrongers.nl/files/MyRecipeBook/MyRecipeBook_demo.gif)

[^ back to top](https://github.com/michielfbr/MyRecipeBook_frontend#myrecipebook-stew)

## Technology Used

- JavaScript
- React
- Redux
- Axios
- Express
- REST API
- Sequelize as ORM
- PostgreSQL
- One-to-many models
- Many-to-many models
- CSS
- Bootstrap
- Typeahead (form autocomplete)
- Quill (rich text editor)

[^ back to top](https://github.com/michielfbr/MyRecipeBook_frontend#myrecipebook-stew)

## Goals for this Project

- build a full-stack app, following every step from idea to deployment
- have a MVP as working prototype in 1 week
- explore and implement new technologies

[^ back to top](https://github.com/michielfbr/MyRecipeBook_frontend#myrecipebook-stew)

## User Stories

A user can ...

- log in to see an overview of all its recipes
- search and filter its recipes
- click on a recipe to see its details
- navigate to a form to add a new recipe
- edit existing recipes
- set 1 recipe to "Cooking this today" to bookmark it
- see frequently cooked recipes, tracked by number of "Cooking this today"s

[^ back to top](https://github.com/michielfbr/MyRecipeBook_frontend#myrecipebook-stew)

[^ back up](https://github.com/michielfbr/MyRecipeBook_frontend#myrecipebook-stew)

## Wireframe

Go to [Figma](https://www.figma.com/file/sWsPpwSuUDY75SikKpJLNP/MyRecipeBook?node-id=0%3A1) to see the wireframes & design concept

[^ back to top](https://github.com/michielfbr/MyRecipeBook_frontend#myrecipebook-stew)

## Repositories

[MyRecipeBook_frontend](https://github.com/michielfbr/MyRecipeBook_frontend) [MyRecipeBook_server](https://github.com/michielfbr/MyRecipeBook_server)

[^ back to top](https://github.com/michielfbr/MyRecipeBook_frontend#myrecipebook-stew)
