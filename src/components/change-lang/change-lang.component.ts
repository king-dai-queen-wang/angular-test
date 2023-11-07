import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-change-lang',
  templateUrl: './change-lang.component.html',
  styleUrls: ['./change-lang.component.scss']
})
export class ChangeLangComponent {
  switchLang = 'switchlanguage';
  constructor(public translate: TranslateService) {

  }
  changeLang() {
    const targetLang = this.translate.currentLang === 'en-US' ? 'zh-CN': 'en-US';
    this.translate.use(targetLang);
  }
}
