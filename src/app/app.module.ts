import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {InfoComponent} from './info/info.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {ModComponent} from './servers/server/mods/mod/mod.component';
import {ModsComponent} from './servers/server/mods/mods.component';

const appRoutes: Routes = [
  {
    path: 'overview',
    component: AppComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    ModComponent,
    ServersComponent,
    ServerComponent,
    ModsComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
