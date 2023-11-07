import { NgModule } from "@angular/core";
import { ChangeLangComponent } from './change-lang/change-lang.component';
import { TranslateModule } from "@ngx-translate/core";


@NgModule({
  imports: [TranslateModule],
  declarations: [
    ChangeLangComponent
  ],
  exports: [ChangeLangComponent],
})
export class ComponentModule { }
