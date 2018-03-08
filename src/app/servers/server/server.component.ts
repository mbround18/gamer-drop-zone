import {Component, Input, OnInit} from '@angular/core';
import {ServerModel} from '../../models/server.model';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  @Input() server: ServerModel;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
