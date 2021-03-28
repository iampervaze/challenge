import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentWrapperComponent, ContentComponent, LoadingComponent } from '@app/components';
import { NavComponent } from './nav/nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'ngx-moment';
import { RouterModule } from '@angular/router';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppHeaderComponent } from './app-header/app-header.component';

@NgModule({
  declarations: [
    AppHeaderComponent,
    NavComponent,
    LoadingComponent,
    ContentWrapperComponent,
    ContentComponent,
    DatepickerComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgbModule, MomentModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NavComponent,
    LoadingComponent,
    ContentWrapperComponent,
    ContentComponent,
    DatepickerComponent,
    AppHeaderComponent
  ]
})
export class ComponentsModule {}
