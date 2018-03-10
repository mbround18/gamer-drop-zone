import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {InfoComponent} from './info/info.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {ModComponent} from './servers/server/mods/mod/mod.component';
import {ModsComponent} from './servers/server/mods/mods.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {ServerService} from './servers/server.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InfoComponent,
    ModComponent,
    ServersComponent,
    ServerComponent,
    ModsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    ServerService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
