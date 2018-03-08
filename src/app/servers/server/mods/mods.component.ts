import {Component, Input, OnInit} from '@angular/core';
import { ModModel } from '../../../models/mod.model';

@Component({
  selector: 'app-mods',
  templateUrl: './mods.component.html',
  styleUrls: ['./mods.component.css']
})

export class ModsComponent implements OnInit {

  @Input() serverID: number;

  modList: ModModel[] = [
    new ModModel(731604991, 'Structures Plus (S+)', true),
    new ModModel(566885854, 'Death Helper', true),
    new ModModel(538827119, 'Omnicular v1.51', true),
    new ModModel(558079412, 'ACM V2.7.1294', true),
    new ModModel(812655342, 'Automated Ark', true),
    new ModModel(772235118, 'S.R.S - Rebalanced Stacks', true),
    new ModModel(590046776, 'Mini Industrial Forge', true),
    new ModModel(924619115, 'Editable Server UI (WBUI)', true),
    new ModModel(821530042, 'Upgrade Station v1.8i', true)
  ];


  constructor() { }

  ngOnInit() {
  }

}
