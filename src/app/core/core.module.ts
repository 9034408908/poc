import { NgModule } from '@angular/core';
import * as fromContainer from './container';
import { UiKitModule } from '../ui-kit/ui.module';
import { RouterModule } from '@angular/router';

@NgModule({

  imports: [
    UiKitModule,
    RouterModule.forChild(fromContainer.routes)
  ],
  declarations: [...fromContainer.container]
})
export class CoreModule { }
