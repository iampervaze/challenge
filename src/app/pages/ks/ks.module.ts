import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { KsComponent } from './ks.component';
import { ComponentsModule } from '@app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: KsComponent
  }
];

@NgModule({
  declarations: [KsComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ComponentsModule]
})
export class KsModule {}
