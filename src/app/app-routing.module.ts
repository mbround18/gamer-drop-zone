import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AppComponent} from './app.component';
import {ServerComponent} from './servers/server/server.component';

// const appRoutes: Routes = [
//   {
//     path: 'compose',
//     component: ComposeMessageComponent,
//     outlet: 'popup'
//   },
//   {
//     path: 'admin',
//     loadChildren: 'app/admin/admin.module#AdminModule',
//     canLoad: [AuthGuard]
//   },
//   {
//     path: 'crisis-center',
//     loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
//     data: {preload: true}
//   },
//   {path: '', redirectTo: '/superheroes', pathMatch: 'full'},
//   {path: '**', component: PageNotFoundComponent}
// ];

const appRoutes: Routes = [
  {
    path: 'overview',
    component: AppComponent,
    data: {title: 'Heroes List'}
  },
  {
    path: '',
    redirectTo: '/overview',
    pathMatch: 'full'
  },
  {
    path: 'server/:id',
    component: ServerComponent,
    data: { }
  },
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only

      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule {
}
