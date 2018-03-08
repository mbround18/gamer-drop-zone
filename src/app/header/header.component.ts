import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  activeTab: string;
  availableTabs: string[] = [
    'overview'
  ];

  constructor() {
    this.activeTab = 'overview';
  }

  ngOnInit() {
  }

  switchActiveTab($event) {
    this.activeTab = $event.toString();
  }

}
