import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-album-view',
  templateUrl: './album-view.component.html',
  styleUrls: ['./album-view.component.scss']
})
export class AlbumViewComponent implements OnInit {
  @Input() album: any;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  gotoPhotos(id) {
    this.router.navigate([id + '/photos']);
  }
}
