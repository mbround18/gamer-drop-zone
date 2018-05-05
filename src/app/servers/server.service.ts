import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import {Injectable} from '@angular/core';
import {ServerModel} from '../models/server.model';
import {Observable} from 'rxjs/Observable';


const SERVERS = [
  new ServerModel(1, '[SE][Cluster] Gamer Drop Zone [PVP][15x]', 'ark.boop.ninja:27015', true),
  new ServerModel(2, '[Rag][Cluster] Gamer Drop Zone [PVP][15x]', 'ark.boop.ninja:27016', true)
];

// new ServerModel(3, '[Aber][Cluster] Gamer Drop Zone [PVP][15x]', 'ark.boop.ninja:27017', true)

@Injectable()
export class ServerService {

  constructor() {
  }

  getServers() {
    return Observable.of(SERVERS);
  }

  getServer(id: number | string) {
    return this.getServers()
      .map(heroes => heroes.find(hero => hero.id === +id));
  }
}
