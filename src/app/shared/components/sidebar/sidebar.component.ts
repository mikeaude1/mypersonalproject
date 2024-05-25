import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  onItemClick(e: any) {
    if (e.itemData.text) {
        console.log(e.itemData.text + ' has been clicked!');
    }
    else if (e.itemData.icon) {
        console.log(e.itemData.icon.charAt(0).toUpperCase() + e.itemData.icon.slice(1) + ' has been clicked!');
    }
}
toggle: boolean = false;

onValueChanged(e: any) {
    this.toggle = e.value;
}
  constructor() { }

  ngOnInit() {
  }

}
