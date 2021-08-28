<h1 align="center"> Isomorphic - React Redux Ticket Tracker </h1>

![Screenshot_2021-08-28_17-56-11](https://user-images.githubusercontent.com/69680330/131215765-440ec26e-a2ab-43b4-b53d-bc07a940716e.png)
Note:
* This repository is created in order to fulfill my task for intern candidate at Bukit Vista.
* Due to efficiency, my work is on `src/containers/Widgets/index.js` and for redux on `src/redux/ticket` folder.

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

## Product expectation
1. Clean this sample library (you can download it on [**Resource**](https://paper.dropbox.com/doc/Front-End-Programmer-Test--AZ5Y2fhszy~Iq4deYIVx0y7LAg-WiMIkfOvDeC6qUIzWMlYA#:uid=780682314737050563546578&h2=Resource) section of this document)
    
- [x] Make it so that is has only 1 page dashboard. **Remove all unnecessary functions, but keep the layout.**
- [x] Remove other sidebar menu, and create new one, call it “Guest details”

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A91713E9BC24E395634A35D5F0A196353629F3EA6A2703CDAA9B6CC31773AFE2_1553337464515_Screen+Shot+2019-03-23+at+18.37.32.png)

2. On the project folder, work on the ‘CustomApp’ folder to make any modification, follow the wireframe below. 
- [x] Create a text field to search booking code with data validation:
- [x] All capital letter
- [x] No space and special characters, only **alphanumerical**
- [x] Use form with validation component
- [x] Add prompt text “Your booking code” to languageProvider>locales JSON file and call it instead of hard-coding
- [x] Add menu to the sidebar. “Guest portal” text should be called from the locales JSON as well
![](https://d2mxuefqeaa7sj.cloudfront.net/s_A91713E9BC24E395634A35D5F0A196353629F3EA6A2703CDAA9B6CC31773AFE2_1553339384855_Screen+Shot+2019-03-23+at+19.09.26.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A91713E9BC24E395634A35D5F0A196353629F3EA6A2703CDAA9B6CC31773AFE2_1553337955302_Screen+Shot+2019-03-23+at+18.45.31.png)

3. Display guest details from the matching query using API
- [x] API call: 
        - https://bv-online-assessment.herokuapp.com/api/bookings [GET]
        - https://bv-online-assessment.herokuapp.com/api/bookings/:booking_code [GET]
- [x] Use this booking code and hit the API call for example to test the data: 
        - HIJ12345
        - HIJ12346
        - HIJ12347
- [x] If the arrival time not set, show helper text “Please set your arrival time”
- [x] Use the card layout and matching gutter and style to display the result
- [ ] Add and call all static texts from locales JSON file
![](https://d2mxuefqeaa7sj.cloudfront.net/s_A91713E9BC24E395634A35D5F0A196353629F3EA6A2703CDAA9B6CC31773AFE2_1553339439925_Screen+Shot+2019-03-23+at+19.10.07.png)
![](https://d2mxuefqeaa7sj.cloudfront.net/s_A91713E9BC24E395634A35D5F0A196353629F3EA6A2703CDAA9B6CC31773AFE2_1553338658478_Screen+Shot+2019-03-23+at+18.57.07.png)

4. Update data if arrival time changed
- [x] API call:
        - PUT 
        - https://bv-online-assessment.herokuapp.com/api/bookings/:booking_code/update-eta 
        - Body:
            - arrival_time 
            - example: arrival_time = 19:00 [String]
- [ ] Give feedback to user if success or failed
- [x] Use time picker
![](https://d2mxuefqeaa7sj.cloudfront.net/s_A91713E9BC24E395634A35D5F0A196353629F3EA6A2703CDAA9B6CC31773AFE2_1553339511209_Screen+Shot+2019-03-23+at+19.11.04.png)
![](https://d2mxuefqeaa7sj.cloudfront.net/s_A91713E9BC24E395634A35D5F0A196353629F3EA6A2703CDAA9B6CC31773AFE2_1553339511222_Screen+Shot+2019-03-23+at+19.11.10.png)

![](https://d2mxuefqeaa7sj.cloudfront.net/s_A91713E9BC24E395634A35D5F0A196353629F3EA6A2703CDAA9B6CC31773AFE2_1553338766183_Screen+Shot+2019-03-23+at+18.59.17.png)



## Contribution
* To edit the main dashboard page, go to `src/containers/Widgets/index.js`
* To edit the card, go to `src/Widgets/BookingInfo.js`
* To configure the dataflow of the ticket, go to `src/redux/ticket`
* To configure the route, go to `src/container/App/AppRoute.js` or `src/router`
* To add the localization word, go to `languageProviders/locales` folder


Feel free to contribute and make a pull request to this project :D
