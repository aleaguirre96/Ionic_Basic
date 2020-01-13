import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaNacimiento: Date = new Date();
  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
  }

  cambioFecha( event ) {
    console.log('ionChange ', event);
    this.cdRef.detectChanges();
    console.log('Date: ', new Date( event.detail.value ) );
  }

}
