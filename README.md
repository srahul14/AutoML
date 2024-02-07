# App Description
## AutoML is a web application designed to help users interact with PLAI's Ensemble Squared automatic machine learning system. The focus of our application is to make the system convenient and user-friendly; it guides the user through all the steps necessary to make predictions of tabular data, even if they are not experts in ML. We include a third-party integration with Kaggle, allowing users to access even more data to explore and use with the system for competitions.

#  Project Task Requirements / Goals

## Minimum Requirements:
### 1. Login/account page :heavy_check_mark:
* Allow Guest/Incognito mode :heavy_check_mark:
* Allow sign up with email and password for multiple jobs, no hash required :heavy_check_mark:
### 2. Tutorial (step by step guided mode)  :heavy_check_mark:
### 3. Casual and advanced user parameters for model generation :warning: 
##### (Not possible with current system due to lack of exported configuration parameters from ensemble)
* Show minimal options to complete job to casual users and show maximum applicable options available to advanced users :x:
* We show options for different user payment tiers instead :heavy_check_mark:
* Allow toggle button at sign up :heavy_check_mark:
### 4. Nav Bar for different pages :heavy_check_mark:

## Standard Requirements:
### 1. Kaggle integration (dataset import/viewer, add api key to account) :heavy_check_mark:
### 2. Add/remove associated jobs to account with collaborators (add with email) :heavy_check_mark:
### 3. Control dashboard (with jobs progress, datasets) :heavy_check_mark:
* On site progress indicator for jobs :heavy_check_mark:
* Timer for the job on page :heavy_check_mark:
### 4.Tabular uploading screen (maybe other) data viewer/explorer :warning:
* Allow user to make minor corrections to data :x:
* Allow verification of data? Pre confirmation and summary stats :heavy_check_mark:
### 5. Prediction data results on site :x: (Downloading to local or exporting to Kaggle done instead, seemed more useful than a static display of the data)
### 6. Added integration with sendGrid tool that has been used to create email template (that is saved on that sendGrid app) and sends email to users when:   :heavy_check_mark:
* They signed up :heavy_check_mark:
* Their training has completed :heavy_check_mark:
* Their prediction has completed :heavy_check_mark:
* Someone shared a Job :heavy_check_mark:
### 7. Added logs viewing capability for each job that has been submitted:  :heavy_check_mark:
* Search error :heavy_check_mark:
* Search output :heavy_check_mark:
* Prediction error :heavy_check_mark:
* Prediction output :heavy_check_mark:

## Stretch Requirements:
### 1. Image/object recognition datatype support :x:
### 2. Graphs or visuals to support models/input data? (Tableau/D3js) :x:
### 3. Payment system integration for long jobs :heavy_check_mark:
### 4. Changing Ensemble^2 backend to allow support for prediction target column names, job names, and folder names with spaces , access prediction files to allow download through our app. :heavy_check_mark:


# Usage of Tech from Units 1-5 in the Project

### Unit 1: HTML, CSS, JS
#### We used CSS for styling all of our UI to maintain consistency. We used Javascript in both our front end (React) and back end (Express running on Node) systems. HTML on our front end acts as an entry point for our React app.
### Unit 2: React 
#### We used React and React-Redux to create the frontend of our system. We incorporate React’s JSX throughout the front end of our application to build various React components that work together to make our application modular and work efficiently.
### Unit 3: Node & Express
#### We implemented a Node backend for our system that communicated with both the frontend and the Ensemble^2 systems. We used Express and Cors to implement our backend.
### Unit 4: MongoDB 
#### We used a MongoDB collection to store our users and ML jobs. We used Mongoose to interact with our modeled data and perform operations such as creation, modification, and deletion as necessary to keep our application running smoothly.
### Unit 5: Release Engineering 
#### We have deployed our app on Heroku using continuous deployment through GitHub Actions. To maintain high code quality and consistency, we have followed many best industry practices such as requiring code reviews on pull requests and incorporated continuous integration as part of our development process.

# Description of ‘Above and Beyond’ Functionality

### Scaling Ensemble^2 (for the other team as well) and advanced ssh tunneling:   
#### The “above and beyond” part of this feature is extending our understanding of the current PLAI Ensemble^2 infrastructure to scale/flex in certain ways to avoid code breakage and involves minimal code change. A new ensemble instance was created, namely ensemble_squared_2 with the updated code (which can callback at a passed API route and also includes some bug fixes). Additionally, we added the following to the system:
* SSH tunneling for multiple connections through a proxy server (Paramiko library).
* The backend now supports another parameter with a “-u” flag for storing the callback API URL. After the shell scripts are run, it makes a patch request to the callback URL ending with the “isSuccess” flag in the body which notifies the user/server.
* Support for prediction target column names, job names, and folder names with spaces.

### Kaggle Streaming:
#### The Kaggle integration system incorporates an “above and beyond” functionality on the backend when it moves data files to and from Kaggle’s servers. The Kaggle API is still a work in progress and as such has numerous inconsistencies, errors, and missing functionality that had to be mitigated for the project to work. To start, the dataset format varied between zipped and standard CSV files which made reading metadata such as column names challenging and required multiple approaches to work. The column names were frequently blank when the API was called which required the reading of the zipped or unzipped file to return the appropriate values. To save time, only enough of the file was read to get these values.  This was fairly easy for uncompressed files, but for compressed files, it required reading zip entries and unzipping simultaneously without exceeding memory space to process properly. As the API is still in progress, the actual uploading of files coming back to Kaggle from Ensemble was uploaded via the Kaggle python library for stability. This approach required the following: 
* Custom python wrappers, to wrap the Kaggle library’s functions that needed to be called from our Express backend.
* Temporary files for uploading and reading data that needed to be created and cleaned up in sync with running both Python and Node environments and avoiding issues regarding race conditions or asynchronous events.
* Setting parameters and environment variables appropriately, such as credentials and passing data between the two languages when system arguments had a fairly small size limit. 
#### Communicating between Node and Python proved challenging due to limitations such as size constraints of both disk space for temporary files and system arg limits that can vary from machine to machine. Overall, this approach provides reasonable running time and use of system resources and allows full functionality of the Kaggle integration. 

# Description of Next Steps

#### Our next steps consist of a few different features and integrations that would benefit the app. We plan on adding image dataset support for training object recognition models and integrating Google Sheets for additional tabular data. We also plan to allow modification and customization of models with additional parameters and visualizations of the data to help users make the most of the system.
---
# Sketches:
## Dashboard Sketch
![Dashboard Sketch](./cpsc455-Dashboard.png?raw=true "Login/Signup")
## Data Viewer Sketch
![Data Viewer Sketch](./cpsc455-Data viewer.png?raw=true "Discover")
## Login Sketch
![Login Sketch](./Login_signup.png?raw=true "Login/Signup")

#  Setup Links:
## https://www.freecodecamp.org/news/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0/
## https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66
## https://material-ui.com/
## https://www.codementor.io/@rajjeet/step-by-step-how-to-add-redux-to-a-react-app-11tcgslmvi
## https://medium.com/how-to-react/config-eslint-and-prettier-in-visual-studio-code-for-react-js-development-97bb2236b31a#:~:text=Open%20the%20terminal%20in%20your,Code%20formatter%20and%20install%20it.
## https://stackabuse.com/handling-authentication-in-express-js
## https://bezkoder.com/node-js-jwt-authentication-mysql/
