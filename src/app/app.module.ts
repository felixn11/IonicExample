import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { GithubUsers } from '../providers/github-users';
import { UserDetails } from '../pages/user-details/user-details';

@NgModule({
  declarations: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetails
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetails
  ],
  providers: [GithubUsers]
})
export class AppModule {}