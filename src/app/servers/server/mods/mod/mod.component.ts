import {Component, Input, OnInit} from '@angular/core';
import {ModModel} from '../../../../models/mod.model';

@Component({
  selector: 'app-mod',
  templateUrl: './mod.component.html',
  styleUrls: ['./mod.component.css']
})
export class ModComponent implements OnInit {
  @Input() mod: ModModel;

  constructor() { }

  ngOnInit() {
  }

}
