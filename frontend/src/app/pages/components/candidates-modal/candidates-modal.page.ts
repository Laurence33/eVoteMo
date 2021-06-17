import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidates-modal',
  templateUrl: './candidates-modal.page.html',
  styleUrls: ['./candidates-modal.page.scss'],
})
export class CandidatesModalPage implements OnInit {
 // Data passed in by componentProps
 @Input() position: string;
 @Input() candidates: string;

  constructor() { }

  ngOnInit() {
  }

}
