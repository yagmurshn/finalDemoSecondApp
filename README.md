![Alt text](public/nucal.svg?raw=true "NUCAL")

# NUCAL UI Application

NUCAL UI Application is a vueJS output which have the ui entries you have drawn in studio.

## Installation and Prerequisite

Use the node packaging manager [npm](https://www.npmjs.com/) to install dependencies.

```
Refresh your local package index first by typing;
sudo apt-get update

# To install Node.js:
sudo apt-get install nodejs

# Check that the install was successful by querying node for its version number:
node -v

# You’ll also install npm, the Node.js package manager. You can do this by installing the npm package with apt:
sudo apt-get install npm

```

## Set up the Node version of the project

Being able to switch between Node versions quickly was really helpful while developing, n is a really handy program that makes switching between Node versions effortless.

``` 
Node version of the project is 20.10.0, Iron, Active LTS  
Active LTS - New features, bug fixes, and updates that have been audited by the LTS team and 
have been determined to be appropriate and stable for the release line.
```

```
# Install a program called n that will let us easily switch between Node versions.
sudo npm install -g n

# Changing to a specific version
# You need a specific version 18.16.0 the project is waiting to be run
# Simply specify the version number you want like this as below:
sudo n 20.10.0

```

## Usage

After initial **project prerequisites**, below steps should be followed;

`Make sure you're in the project directory.`

#### Installation of project dependencies
```
# When you're running npm run setup in the project's root, 
it installs all of the npm dependencies into the project's node_modules directory.
npm run setup
```

#### Running the server and viewing the project on locally
```
# You should be able to start the http-server by running the following from your project's root directory
npm run serve:web
```

## Contributing
NUCAL Development Team, managed by **Yagmur SAHIN, Technical Executive**

For the slightest issue, please send an email discussing what you would like to report.

[Contact Us](mailto:yagmur.sahin@nucal.com)

[Website](https://nucal.com)

## License
[MIT](https://choosealicense.com/licenses/mit/)


