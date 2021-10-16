import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'kanishk-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class KanishkNavbarComponent implements OnInit {

  @ViewChild('menuItems') sideNav!:ElementRef

  constructor(private renderer:Renderer2) { }

  ngOnInit(): void {
  }
  closeSidenav($event:any){
    this.renderer.setStyle(this.sideNav.nativeElement,'transform','')
  }
}
