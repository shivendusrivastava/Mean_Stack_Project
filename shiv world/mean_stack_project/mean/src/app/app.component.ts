// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'app';  
// }
import {Component} from '@angular/core';
@Component({
selector:'app-root',
template:`<div>
<h1>{{pageTitle}}</h1>
</div><br/>`

})

export class AppComponent{
pageTitle: string = 'Shiv World';

}