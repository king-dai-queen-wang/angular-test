import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '我的angular项目';
  constructor() {

  }

  alertMsg() {
    alert('弹出消息:' + this.title)
  }
  getTemplateStr() {
    return `这是字符串模板${this.title}`
  }
}
