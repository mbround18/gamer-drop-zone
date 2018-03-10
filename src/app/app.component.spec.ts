import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {HeaderComponent} from './header/header.component';
import {InfoComponent} from './info/info.component';
import {ServersComponent} from './servers/servers.component';
import {ServerComponent} from './servers/server/server.component';
import {ModsComponent} from './servers/server/mods/mods.component';
import {ModComponent} from './servers/server/mods/mod/mod.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        InfoComponent,
        ServersComponent,
        ServerComponent,
        ModsComponent,
        ModComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Gamer Drop Zone'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Gamer Drop Zone');
  }));
  // it('should contain element `app-header`', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('app-header').exists).toBeTruthy();
  // }));
});
