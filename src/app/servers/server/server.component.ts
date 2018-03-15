import {Component, Input, OnInit} from '@angular/core';
import {ServerModel} from '../../models/server.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: []
})
export class ServerComponent implements OnInit {
  @Input() server: ServerModel = new ServerModel(0, 'Server not found!', 'cat', true);

  constructor(public sanitizer: DomSanitizer) {
  }

  ngOnInit() {
  }

}
