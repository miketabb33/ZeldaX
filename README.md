# ZeldaX

ZeldaX is a turn based pvp battle simulator. Currently, the 2 player game features a mage class and 2 races (Human and Orc). Use up to 6 actions to bring your opponents health bar down to zero before they do.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
The application uses:
ruby 2.4.1 
rails 5.2.2 
postgres

### Installing
Start by navigating to the project in your command line.

Install the required gems with:
```
$ bundler install
```
If you dont have bundler installed then install bundler gem with:

```
$ gem install bundler
```

Next, a database is required to run the server:
```
$ rake db:create
```

Now, run the server and play
$ rails server

End with an example of getting some data out of the system or using it for a little demo

### Or play online
Visit this link to play online:

```
https://zeldax.herokuapp.com/
```

## How To Play
Start by navigating to the project in your command line and running the server
```
$ rails s
```
After the server is running enter the following URL into a browser window:
```
http://localhost:3000/
```
The URL will prompt an intro screen

Select Fight to begin!

Insight for your controls:
![fight instructions](https://i.ibb.co/SxFSbP2/Screen-Shot-2018-12-30-at-12-37-13-PM.png)

Mana is used as a resource to spend on actions. The user regains mana in the amount of character spirit at the beginning of their turn.

Use actions to bring your opponents health down to zero before they do. 

## Running the tests

Unit tests are handled by Jasmine. To view the unit tests enter this URL while the server is running.
```
http://localhost:3000/specs
```

To run integration tests, enter the following in to the console:

```
$ cucumber
```
## Viewing the Code
The game code is located in:
```
app/assets/javascripts
```
Take a look at
```
app/assets/javascripts/application.js
```
to see how the code flows.

## Intent

ZeldaX is intended to be a role-playing game with an "interact with the world" mode and a "fight mode". The game is inspired by Game Freak's Pokemon Red and Blizzards World of Warcraft. The user begins by creating a level 1 character with little abilities and gear. During the character creation, the user selects 1 of 8 classes for their character to be (like mage or warrior). Each class gives way to a different user experience. The user interacts with the world via a overhead view and is able to freely roam the world to engage with non-player computers and other players. Engaging with an enemy will bring the user to "fight mode" where the user uses actions in attempt to defeat the enemy. Defeating the enemy will reward the user with treasures (like in game currency, gear, items, and experience). The goal of the game is to travel the world and get to level 60.


