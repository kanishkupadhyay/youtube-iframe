import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private arr: string[] = ["Kanishk Upadhyay", "Angular Developer", "Software Developer","Codinova Technologies"];
  public typewriter_display: string = ""; 

  private _canType: boolean = true;

  private _writerIndex = 0;

  public ngOnInit(): void {
    this.typingInitiating(this._writerIndex);
  }

  public typingInitiating(index: number): void {
    if(this._canType){
    if(this.arr[index] !== undefined){
   this.typeStringWithDelay(this.arr[index]);
    } else {
      this._writerIndex = 0;
      this.typeStringWithDelay(this.arr[this._writerIndex]);
    }
    }
  }

  private typeStringWithDelay(element: string, index: number = 0): void {
    if(element[index] !== undefined){
      setTimeout(() => {
        this.typewriter_display += element[index];
        this.typeStringWithDelay(element, index + 1);
        }, 150);
    } else {
      this.eraseStringWithDelay();
    }
  }

  private eraseStringWithDelay: () => void = () => {
    if(this.typewriter_display.length > 0){
      setTimeout(() => {
        this.typewriter_display = this.typewriter_display.substring(0, this.typewriter_display.length - 1);
        this.eraseStringWithDelay();
      }, 100);
    } else {
      this._writerIndex += 1;
      this.typingInitiating(this._writerIndex);
    }
  }
}
