import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private router: Router) { }

  onItemClick(e: any) {
    const item = e.itemData;
    console.log('Item clicked:', item);
    if (item.path) {
      console.log('Navigating to:', item.path);
      this.router.navigate([item.path]).then(success => {
        if (success) {
          console.log('Navigation successful!');
        } else {
          console.log('Navigation failed!');
        }
      }).catch(err => {
        console.error('Navigation error:', err);
      });
    } else {
      console.warn('Path not defined for this item:', item);
    }
  }

  toggle: boolean = false;

  onValueChanged(e: any) {
    this.toggle = e.value;
  }
  navigation: any[] = [
    { id: 1, text: "Home", icon: "home", path: "home" },
    { id: 2, text: "About", icon: "about", path: "about" },
    { id: 3, text: "Trash", icon: "trash", path: "trash" },
    { id: 4, text: "Spam", icon: "mention", path: "spam" }
];
isDrawerOpen: Boolean = false;
  ngOnInit() {}
}
