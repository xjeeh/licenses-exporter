# Overview
A tool to export the licenses in package.json from javascript projects into .csv files. 

## Requirments
- Node
- Typescript

## Instructions
1. Run `npm install` to install the project dependencies
2. Insert the **local path** of your repositories in [repositories.json](repositories.json)
3. Run `npm start`
5. Check the output on console to ensure that all exports were succeeded
4. Check the generated folder [licenses](/licenses/) for your .csv files


## QA
- Q: Does it only works for JS repos? A: Yes
- Q: It's saying "Error when trying to get licenses from...". What's happening? A: There's 2 possibilities: 1: The project's package.json needs to be at the root folder. You can provisionally move this file to the root folder ;)
 2: The provided path is wrong or the folder doesn't exist  

