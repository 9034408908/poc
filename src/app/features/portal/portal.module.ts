import { NgModule } from '@angular/core';
import * as fromContainer from './container';
import { RouterModule } from '@angular/router';
import { UiKitModule } from 'src/app/ui-kit/ui.module';

@NgModule({
  imports: [
    UiKitModule,
    RouterModule.forChild(fromContainer.routes),
    

  ],
  declarations: [...fromContainer.container]
})
export class PortalModule { }