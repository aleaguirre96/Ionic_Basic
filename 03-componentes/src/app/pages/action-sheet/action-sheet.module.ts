import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { ActionSheetPage } from './action-sheet.page';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: ActionSheetPage
      }
    ]),
    ComponentsModule
  ],
  declarations: [ActionSheetPage]
})
export class ActionSheetPageModule {}
