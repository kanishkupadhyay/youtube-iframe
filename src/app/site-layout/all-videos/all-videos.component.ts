import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../service/api-service.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-all-videos',
  templateUrl: './all-videos.component.html',
  styleUrls: ['./all-videos.component.scss']
})
export class AllVideosComponent implements OnInit{
  allVideos:any=[]
  loader=true
  columns=2
  constructor(private apiService:ApiServiceService ,public breakpointObserver: BreakpointObserver) {
    this.apiService.getAllVideos().subscribe(data=>{
      this.allVideos = data
      if(this.allVideos) {
        this.loader = false
      }
    })
   }

 
   ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 1044px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.columns = 2
        } else {
         this.columns = 1
        }
      });
}
}
