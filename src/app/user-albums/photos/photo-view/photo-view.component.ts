import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-view',
  templateUrl: './photo-view.component.html',
  styleUrls: ['./photo-view.component.scss']
})
export class PhotoViewComponent implements OnInit {
  @Input() photo: any;
  constructor() { }

  ngOnInit() {
  }

}
