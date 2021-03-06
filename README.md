# Micro-frontend Project

_Micro-frontend architecture is a design approach in which a front-end app is decomposed into individual, semi-independent “microapps” working loosely together. The micro-frontend concept is vaguely inspired by, and named after, microservices._

## The benefits of the micro-frontend pattern include:

   - Micro-frontend architectures may be simpler, and thus easier to reason about and manage.
   - Independent development teams can collaborate on a front-end app more easily.
   - They can provide a means for migrating from an “old” app by having a “new” app running side by side with it.


## Micro Frontends with Webpack 5, Module Federation 

_Module Federation allows loading separately compiled and deployed code (like micro frontends or plugins) into an application. This plugin makes Module Federation work together with Angular and the CLI._

```sh
https://www.npmjs.com/package/@angular-architects/module-federation
npm i @angular-architects/module-federation
ng add @angular-architects/module-federation@next
```

> In this project, I have created three angular applications and one react application. which are shell, app one, and app two using angular and mfe4 using react
>
> Shell application is the main application and all other applications are going to display under the main navigation bar.
>
> App one is an angular application with routing enabled.
>
> App two is a normal angular application. 
> 
> App three is a react application to show that other frameworks can also join together using micro frontend


## Main Application where the Navigation bar is defined and linked to other applications
![image](https://user-images.githubusercontent.com/12700182/134022483-ab82d96b-475c-4f79-8423-07a467576f4e.png)
## This is the micro frontend  application one with sub routing enable build using angular
![image](https://user-images.githubusercontent.com/12700182/134022530-8a57c1f9-d0f7-47f0-9bdf-2ab9c0fb19b0.png)
## Micro frontend application one routing to the first component build using angular
![image](https://user-images.githubusercontent.com/12700182/134023370-4fff5303-584e-40e0-af02-67adc8435205.png)
## Micro frontend application one routing to the second component build using angular
![image](https://user-images.githubusercontent.com/12700182/134023509-c8383ef3-99b7-4d41-b848-64fe6930349e.png)
## This is the micro frontend  application two  build using angular
![image](https://user-images.githubusercontent.com/12700182/134023534-06bdce46-2901-4a07-b3ee-8c74be32d75f.png)
## This is the micro frontend  application three build using react
![image](https://user-images.githubusercontent.com/12700182/134023564-c12839a4-4824-4984-bed5-933957e4e0aa.png)
