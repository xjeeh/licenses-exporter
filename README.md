# Overview

A tool to export the licenses in package.json from javascript/typescript projects into .csv files.

## Requirements

- Node
- Typescript

## Instructions

1. Run `npm install` to install the dependencies
2. Insert the **local folder** of your repositories and the **repositories** that you want to extract the dependencies in [repositories.json](repositories.json):

<p align="center">
    <img src="img/config.png" width="300"/>
    <p><em><b>Important:</b> you need to install these project dependencies before proceeding to the next step</em></p>
<p>

3. Run `npm start`
4. Check the output on console to ensure that all exports were succeeded
5. Check the generated folder [licenses](/licenses/) for your .csv files

## QA

**Q:** Does it only works on TS/JS repos?

**A:** Yes

---

**Q:** It says `"Error when trying to get licenses from..."`. What's happening?

**A:** There are 2 possibilities:

1: The project's package.json needs to be at the root folder. You can provisionally move this file to the root folder ;)

2: The provided path is wrong or the folder doesn't exist
