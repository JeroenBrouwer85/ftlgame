import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.css']
})
export class ScannerComponent implements OnInit {
  @ViewChild('search') searchElement: ElementRef;
scannedUser:string;
scanInput:string;
  constructor() {

    this.scannedUser="Unknown";
    this.scanInput="";


  }

  ngOnInit(): void {
    setTimeout(()=>{ // this will make the execution after the above boolean has changed
      this.searchElement.nativeElement.focus();
    },50);

  }

  resetScan(){

  }

  processScan(){
    console.log(this.scanInput);
    if(this.scanInput==="0005846983"){
      this.scannedUser="Jeroen Brouwer";
    }

    if(this.scanInput==="0005794233"){
      this.scannedUser="Martijn Brouwer";
    }

    if(this.scanInput==="0003329095"){
      this.scannedUser="Holly Schöne";
    }

    if(this.scanInput==="0005912795"){
      this.scannedUser="Nils van Lokven";
    }

    if(this.scanInput==="0003265787"){
      this.scannedUser="Geert v.d. Wiel";
    }
    this.scanInput='';
    this.resetScan();
  }

}
