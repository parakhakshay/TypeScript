// Angular framework:
// in the programming, a framework is a skelton or blue print of the code
// that provides structure for application
// Typescript is superset of javascript which means it has all features of javascript and more.
// It is object oriented language like c++ , java etc.
// it is used to develop web applications
// angular is one such framework developed by google
// Angular is written in the type language
// the official angular documentation:
// https://angular.io/docs
// Angular was created by the team internally google.
// AngularJs/Angular 1.0 was released in 2012
// AngularJs was JavaScript FrameWork.
// In 2016 the Angular team has Joined with TypeScript team at Microsoft
// and introduced into the TypeScript Frame Work
// Next version is Angular 2.0 and was written in TypeScript.
// why to choose Angular?:
// it Single page application
// mobile compatibility
// cross platform can be server, desktops or mobile
// Works with Ionic FrameWork:which allows us to build mobile app using angular
// two way binding
// supports animation
// supports dom Manipulations
// free and open source
// Angular 4 directly after Angular 2.0 because of angular router ambiguity.
// Router 3.3.0 was released so that is why they skipped angular 4
// Angular CLI--> Command Line Interface which allows us to work with angular projects from creation to deployment.
// In version 14 Angular DevTools: its a browser extension that enable us to debug angular application
// React = is Library but angular is framework
// complex project always prefers Angular
// simple projects prefer React
// Use of NodeJs in Angular:
// NodeJs gives you tool that allows you to download library and packages that is been used in Angular
// provides Live server to run Angular application
// to install first you need NodeJS
// and now select a particular folder now type command
// open cmd in the selected folder and type npm install -g @angular/cli@14.0.6
// and to check version of Angular type ng version in that cmd
// to see command of angular  ng help in that cmd
// to create new project ng new angularapp //here angularapp is project name
// it will ask you add Angular routing its upto you
// now it will ask for stylesheet to choose select the particular stylesheet in this case I'll be selecting CSS
// ng serve command can be used to build and start web server

// ~ is for latest version (tilde sign)
// ^ is for any update major/minor but if last digit is changed not the first digit example 14.0.6 so number 14 will change then it will be major update
// but if 0.6 got changed then it will be a patch file
// all source code stored in to the src folder in side angular app folder
// single page application because we find only index.html the angular folder which is provided by the angularFrameWork
// that file is executed in browser
// starting point of angular is main.ts file
// polyFills.ts useful to compatible run the angular app in different different browser
// any word start from @ symbol is known as decorator


// Databinding: its nothing but the communication between component
// also we can data binding keeps component (ts) an view (html) is sync with each other
// there are three types of databindings:
// OneWay : It means when ever the value changes in ts file it reflects on UI(HTML). But not vice versa.
// string interpoliation
// ts...>html
// syntax:
//          {{}}
// property binding
// one way data binding in which we bind dom elements 
// Event binding
// TwoWay : Its like oneway + EventEmitter(). We can send data back to TS file from HTML.
// ThreeWay : Its just like TwoWay+ NgModel. We can get data from user input box and send data back to TS
