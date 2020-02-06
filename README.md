# _Mountain Biking RPG_

#### _Unit Testing Practice for Epicodus_, _6 Feb. 2020_

#### By _**Brandan Sayarath, Joshua Hellman**_

## Description

_This application is a rpg based game where a player can play as a mountain biker.  The player gains experience by riding trails.  The more difficult the trail, the more EXP (experience) points the player can earn.  The goal of the game is to obtain 100 EXP points and win the cup prize!_

## Specifications:

| Specification | Example Input | Example Output |
| ------------- |:-------------:| --------------:|
| Player chooses the environment they would like to ride in (Mud, Forest, Desert) | Forest | Forest level loads
| Player chooses the bicycle they would like to ride (Santa Cruz, Yeti, Cannondale) | Cannondale  | Cannondale bike loads in the environment |
| Player presses "Start Ride" and they start riding down the mountain | "Start Ride"  | Coutner for EXP points starts |
| If a player falls off their bike, they lose all EXP points | Player falls off  | Ride EXP counter restarts at zero |
| If a player decides to take a break, their EXP points are stored in the "Total EXP" countner  | Player takes break | EXP Total Counter stores current Ride EXP counter. |
| When the player reaches 100 Total EXP points, the player wins the cup!  | Player reaches 100 EXP | Player wins, and finish line is displayed. |


## Setup/Installation Requirements

* _First, clone this repository to your desktop by navigating to the desktop in the Terminal (entering "cd desktop" in the Terminal) and then entering "git clone" followed by the url to this repository._
* _Once the project directory is cloned to your desktop, navigate to the directory in the terminal by entering "cd" followed by the name of this repository in the Terminal._
* _Confirm that you have navigated to the project directory by entering "pwd" in the Terminal._
* _Once you have navigated to the directory in the terminal, open the contents of the directory in a text editor or IDE of your choice (e.g., to open the contents of the directory in Visual Studio Code, enter the command "code ." in the Terminal)._
* _Open index.html in a browser of your choice (e.g., Google Chrome)._

## Technologies Used

_Git, HTML, CSS, JavaScript, jQuery, npm, webpack, Jest_

### License

*This webpage is licensed under the MIT license.*

Copyright (c) 2020 **_Brandan Sayarath, Joshua Hellman_**