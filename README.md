# TDF (Template Driven Form)

The purpose of this project is to implement template driven form with validations
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.2.

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# 1-Setting the project and adding bootstrap

### Generate the project in the same directory

&emsp; ng new appName --directory ./

### Add bootstrap

&emsp; Copy the css CDN from https://getbootstrap.com/ and add in index.html
&ensp; <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css">

# 2-Add HTML form

### Add a bootstrap form with different components

# 3-Binding Data with ngForm

### import FormsModule in app.module.ts
### add a template reference variable(userForm) to the form tag to hold the ngForm directive
#### &emsp; when we use a form tag, angular attaches an ngForm directive to the form tag which gives valuable info about that paricular form. It tells what the values of the different form contols are and wheather the values are valid or invalid. We can get the form value using *{{userForm.value | json}}*.
#### &emsp; Add *ngModel* directive to each of the form elements. Using this we can let angular know which form controls have to be track.
#### &emsp; Add *name* attricute to each of the form elements, as name is required along with *ngModel* directive.
#### we'll ge the value as:
`
{ "name": "", "email": "", "phone": "", "topic": "", "timePreference": "", "subscription": "" }
`
#### &emsp; Angular also provides *ngModelGroup* directives. For example, we can create a sub group of different fields of the address in the form. *ngModelGroup="address"*. we'll ge the value as:
`
{ "name": "", "email": "", "phone": "", "topic": "", "timePreference": "", "subscription": "", "address": { "state": "", "city": "", "pin": "" } }
`

# 4-Bind form data to a model

### As users enter the form data, we'll capture the changes and update an instance of the model that can later be sent to the server.

#### generate a model class inside:
#### &emsp; ng generate class User
#### add user model inside it.
#### create instance of the model in app.component.ts. By having this instance of the model, it is possible to  bind the userModel data to enrollment form. Use case for this is to update the existing data.
#### display it using {{userModel | json}}
#### bind userModel to enrollment form, using squeare brackets, *[ngModel]*
#### e.g replace ngModel with *[ngModel]="userForm.name"* for the name input. After this we need to implement two way binding in order see the live update of userModel value in web, as property binding is one way binding. To implement property binding, we can use *banana in a box* syntax of the ngModel directive. *[(ngModel)]*
#### with two way binding, we always have the model & view in sync.