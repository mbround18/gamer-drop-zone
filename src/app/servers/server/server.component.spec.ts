import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerComponent } from './server.component';
import {ModsComponent} from './mods/mods.component';
import {ModComponent} from './mods/mod/mod.component';

describe('ServerComponent', () => {
  let component: ServerComponent;
  let fixture: ComponentFixture<ServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ServerComponent,
        ModsComponent,
        ModComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerComponent);
    component = fixture.componentInstance;
    // component.server = new ServerModel(1, 'test', 'localhost:7777', true);
    fixture.detectChanges();
  });

  it('should create', () => {

    expect(component).toBeTruthy();
  });
});
