# F7G Packages

This repo contains various packages used in the F7G ecosystem for Angular applications.

## Build

Before building a package make sur to increment its version in its relevant `package.json` file located in its root.
To build a package use the command `ng build package-name --configuration production`. Not using configuration production will produce an error at deploy time on NPM.

## Deploy

To deploy an existing build go to its dist location using `cd dist/package-name` and run `npm publish`.
You should already publish right with your NPM account in order to do so.
