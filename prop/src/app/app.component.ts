import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <input type="button" (click)="back=!back;fore=!fore" value="Background"/>
    <div [ngStyle]="styles">
    {{msg}}
    </div>`
  //ブラケット構文
  //template: `<img [src]="image" />`

  //bind-xxxxx属性
  //template: `<img bind-src="image" />`

  //Interpolation
  //template: `<img src="{{image}}" />`  
})
export class AppComponent {
  msg: string = `Hello World!`;
  style = {
    backgroundColor: '#12346b',
    color: '#fff',
    fontWeight: 'bold',
    margin: '15px',
    padding: '15px'
  };
  back = false;
  fore = false;

  get styles(){
    return {
      'background-color': this.back ? '#12346b': '',
      'color': this.fore ? '#fff': '',
      fontWeight: 'bold',
      margin: '15px',
      padding: '15px'
    };
  };

  //image = 'http://www.wings.msn.to/image/wings.jpg';
}
