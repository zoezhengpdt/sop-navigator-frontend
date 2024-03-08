# JavaScript Template

A JavaScript project template to save you time and energy.

[![Build Status](https://github.com/oneTakeda/devops-javascript-repository-template/workflows/build/badge.svg)](https://github.com/oneTakeda/devops-javascript-repository-template/actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=oneTakeda_devops-javascript-repository-template&metric=alert_status&token=1dc4a18c84eca55e4be0781ef71a67ad65c7d355)](https://sonarcloud.io/summary/new_code?id=oneTakeda_devops-javascript-repository-template)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=oneTakeda_devops-javascript-repository-template&metric=coverage&token=1dc4a18c84eca55e4be0781ef71a67ad65c7d355)](https://sonarcloud.io/summary/new_code?id=oneTakeda_devops-javascript-repository-template)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=oneTakeda_devops-javascript-repository-template&metric=reliability_rating&token=1dc4a18c84eca55e4be0781ef71a67ad65c7d355)](https://sonarcloud.io/summary/new_code?id=oneTakeda_devops-javascript-repository-template)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=oneTakeda_devops-javascript-repository-template&metric=security_rating&token=1dc4a18c84eca55e4be0781ef71a67ad65c7d355)](https://sonarcloud.io/summary/new_code?id=oneTakeda_devops-javascript-repository-template)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=oneTakeda_devops-javascript-repository-template&metric=sqale_rating&token=1dc4a18c84eca55e4be0781ef71a67ad65c7d355)](https://sonarcloud.io/summary/new_code?id=oneTakeda_devops-javascript-repository-template)

## Install

Request a new GitHub Repository via [Issue Form](https://github.com/oneTakeda/devops-repo-automation/issues/new?assignees=&labels=javascript&projects=&template=a2-repo-create-request-form.yml&title=%5BGitHub+Repository+Creation+Request%5D%3A+Create%20Repo%20from%20javascript%20Template) and select this template from the dropdown along with the rest of the information needed.

## Usage

### File configuration

1. Configure the `package.json` file.
1. Configure the `.github/workflows/build.yml` file
1. Update this README with your info
1. Rename/replace other files/folders as needed and configure their content
1. Add publishConfig to `package.json` like this:
  `"publishConfig":{"registry":"https://takedaawsuseast.jfrog.io/artifactory/api/npm/NPMREPOSITORYHERE/"}`
1. Uncomment the npm login and publish step in the `.github/workflows/release.yml` 

### GitHub configuration

1. The release job requires a secret to be defined for the NPM registry authentication.  Replace the placeholder with your secret.  A registry can be requested [here](https://github.com/oneTakeda/devops-repo-automation/issues/new?assignees=&labels=&projects=&template=c1-jfrog-repo-create-form.yml&title=%5BJFrog+Repository+Creation+Request%5D%3A+) if needed.