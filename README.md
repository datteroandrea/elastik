# Elastik

Elastik is a Backend framework made in Node to design easy scalable web applications.

# Setup

1. install node and npm.
2. use the following npm command to install elastik framework globally in your system (you need root/admin permissions).

`npm install -g elastik`

# How it works?


## Dependencies

Automatically installs the required dependencies (i.e. express)

`elastik dependencies`

## Version Control

By default elastik uses git as the version control however you can choose to use git, other version control systems or none.
The settings of the version control of the project are saved in the config.json.
On every component initialization the elastik framework creates a commit.

`elastik repo`

## Components

The elastik frameworks has 3 type sof components used to build you web application which are:

**Api**

Used to make the routes of your web app.

`elastik api`

**Service**

Used to provide services to the user like Authentication and Authorization.

`elastik service`

**Module**

Used to handle data or provide helpful methods for you APIs.

`elastik module`

# In Development

## Security

Elastik installs dependencies to protect your web application (i.e. helmet).
Elastik creates configuration files and protects your api keys and other web app private data.

`elastik security`
