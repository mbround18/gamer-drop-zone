import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {ServerModel} from '../models/server.model';
import {ServerService} from './server.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: []
})
export class ServersComponent implements OnInit {
  servers$: Observable<ServerModel[]>;

  private selectedId: number;

  constructor(
    private service: ServerService,
    private route: ActivatedRoute
    ) {
  }

  ngOnInit() {
    this.servers$ = this.route.paramMap
      .switchMap((params: ParamMap) => {
        // (+) before `params.get()` turns the string into a number
        this.selectedId = +params.get('id');
        return this.service.getServers();
      });
  }

}
