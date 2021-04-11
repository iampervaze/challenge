import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@app/components/components.module';
import { FormsModule } from '@angular/forms';
import { DesignPatternsComponent } from './design-patterns.component';
import { AbstractFactoryComponent} from './abstract-factory/abstract-factory.component';
const routes: Routes = [
  {
    path: '',
    component: DesignPatternsComponent,
    children: [
      {
        path: '',
        component: AbstractFactoryComponent
      }
    ]
  }
];


@NgModule({
  declarations: [DesignPatternsComponent, AbstractFactoryComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), ComponentsModule]
})
export class DesignPatternsModule { }