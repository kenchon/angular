import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div>{{msg}}</div>`
  //ブラケット構文
  //template: `<img [src]="image" />`

  //bind-xxxxx属性
  //template: `<img bind-src="image" />`

  //Interpolation
  //template: `<img src="{{image}}" />`  
})
export class AppComponent {
  msg: string = `Hello World!`
  //image = 'http://www.wings.msn.to/image/wings.jpg';
}
