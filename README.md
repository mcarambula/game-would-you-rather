# Would You Rather Project

This repository contains my implementation of the project "Would you rather" game (Redux assessment project for the [Udacity React Nanodegree Program](https://www.udacity.com/course/react-nanodegree--nd019)).

This project is an implementation of the game "would you rather" where the users will select if they would rather option A or option B of the question asked. Answering "neither" or "both" is against the rules.

Users will be able to answer questions, see which questions they haven’t answered, see how other people have voted, post questions, and see the ranking of users on the leaderboard.

## App Functionality

### Logging

The person using this application would be able to logging selecting a name from the list of existing users. Alternatively, he/she could create his own account clicking on the 'create a new user' link and filling his/her first name and last name. Once the user logs in, the polls page would be shown.

### Answered / unanswered polls

Once the user logs in, he would be able to toggle between his/her answered and unanswered polls. The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom). The user will be able to click on a particular question and answer it by choosing the option they like.

### Poll statistics

Upon voting in a poll, all of the information of an answered poll is displayed. The user's response is recorded and clearly visible on the poll detail page. Users can only vote once per poll; they aren't allowed to change their answer after they've voted.

### Creating a new poll

Users would be able to create their own poll going to the section 'Create a Question'. They will need to fill option A and option B.
Upon submitting the form, the home page will be shown with the new question added in the unanswered category.

### Leaderboard

Users would be able to see the positions of the user going to the 'Leaderboard' section.

### Log out

Any user would be able to log out clicking on the logout link, next to their user's information on the nav bar.


## Getting started

### Step 1:
Check out the project's "master" branch and install the latest version of [Node](https://nodejs.org/) or [Yarn](https://yarnpkg.com/en/docs/install) .

### Step 2:

After successfully finish the installation, cd into your project directory and run the command "npm install" if you installed Node or "yarn start" if you chosen Yarn. This will take a while for your first install as it will download all the project dependencies.

```
cd /game-would-you-rather
$ npm install
```

```
cd /game-would-you-rather
$ yarn install
```

### Step 3:
When the installation of the dependencies has finished, you should be able to do:

```
$ npm start
```

or

```
$ yarn start
```

This will start the local server for development and the project will be now running on: `http://localhost:3000/`
