import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServersComponent } from './servers.component';
import {ServerComponent} from './server/server.component';
import {ModsComponent} from './server/mods/mods.component';
import {ModComponent} from './server/mods/mod/mod.component';

describe('ServersComponent', () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ServersComponent,
        ServerComponent,
        ModsComponent,
        ModComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
