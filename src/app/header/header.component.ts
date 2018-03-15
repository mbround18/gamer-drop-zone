import {Component, Input, isDevMode, OnInit} from '@angular/core';

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
    if (isDevMode()) {
      this.availableTabs.push('DevTab');
    }
  }

  switchActiveTab($event) {
    this.activeTab = $event.toString();
  }


}
