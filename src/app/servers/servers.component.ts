import { Component, OnInit } from '@angular/core';
import {ServerModel} from '../models/server.model';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: ServerModel[] = [
    new ServerModel(1, '[SE][Cluster] Gamer Drop Zone [PVP][15x]', 'ark.boop.ninja:27015', true),
    new ServerModel(1, '[Rag][Cluster] Gamer Drop Zone [PVP][15x]', 'ark.boop.ninja:27016', true)
  ];

  constructor() { }

  ngOnInit() {
  }

}
