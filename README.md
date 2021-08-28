<h1 align="center"> Isomorphic - React Redux Ticket Tracker </h1>

![Screenshot_2021-08-28_17-56-11](https://user-images.githubusercontent.com/69680330/131215765-440ec26e-a2ab-43b4-b53d-bc07a940716e.png)
Note: This repository is created in order to fulfill my task for intern candidate at Bukit Vista.

## Description
React Redux Ticket Tracker is an website app created with isomorphic template. The main purpose of this app is to view and manage the ticket that already booked by guest. Guest are able to view their ticket availability and schedule their arrival time.

## Quick Start
#### Prerequisite
Before we begin with installation step, we should prepare our tools and software first such as
* NodeJS
* Package manager such as npm or yarn
* Git

#### Installation
Clone this repository with the following command.
```
git clone https://github.com/RobyCigar/internship-test/edit/main/README.md
```
Then open the root directory of this project.
```
cd internship-test
```
Begin the istallation with npm or yarn
```
npm install
// OR
yarn install
```
Note: If you encounter error with node-sass it's most likely your node version is incompatible with node-sass, [checkout this link](https://stackoverflow.com/questions/64625050/error-node-sass-version-5-0-0-is-incompatible-with-4-0-0/64626556#64626556)
Run the server
```
npm run start
// OR
yarn run
```

## User Story
When redirected to dashboard, user can input their ticket code. If the user input with lowercase, symbol, and space the error message comes up.
If the given code is unavailable in the database server the error message will shown.
![Screenshot_2021-08-28_17-53-37](https://user-images.githubusercontent.com/69680330/131215784-0e7b751f-d587-438c-bfb4-ed8dc7f4905f.png)

This application is already using localization on the menu bar and currently available in 5 different language such as English, Italy, Spain, China(traditional), and Arabic.
![image](https://user-images.githubusercontent.com/69680330/131216440-40bc6c2c-3aeb-4fc5-82f8-948f337ef0ac.png)


If the ticket code is valid, the user can view their ticket info such as property name, checkin date, checkout date. The data are changing depending on the server database.
![image](https://user-images.githubusercontent.com/69680330/131216279-c551d5b7-daf7-497e-aae2-3a728c96e514.png)

If the user had'nt fill the arrival time, the user can update their arrival time but only one chance is given otherwise if the user already fill the arrival time they cannot update it anymore. 
![Screenshot_2021-08-28_17-52-36](https://user-images.githubusercontent.com/69680330/131215776-dedb9257-85b2-4f7f-beff-1d4f441db9e6.png)



## Contribution
Feel free to contribute and make a pull request to this project :D
