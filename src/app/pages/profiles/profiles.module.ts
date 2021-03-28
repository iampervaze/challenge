import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from '@app/components/components.module';
import { ProfilesComponent } from './profiles.component';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';
import { ProfileAddupdateComponent } from './profile-addupdate/profile-addupdate.component';
import { ProfileListComponent } from './profile-list/profile-list.component';

const routes: Routes = [
  {
    path: '',
    component: ProfilesComponent,
    children: [
      {
        path: '',
        component: ProfileListComponent
      },
      {
        path: ':id',
        component: ProfileAddupdateComponent
      }
    ]
  }
];

@NgModule({
  declarations: [ProfilesComponent, ProfileComponent, ProfileAddupdateComponent, ProfileListComponent],
  imports: [CommonModule, FormsModule, RouterModule.forChild(routes), ComponentsModule]
})
export class ProfilesModule {}
