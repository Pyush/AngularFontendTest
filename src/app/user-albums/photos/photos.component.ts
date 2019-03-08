import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpclientService} from '../../services/httpclient.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent implements OnInit {
  photos: any[];
  albumId: number;
  constructor(private route: ActivatedRoute,
              public router: Router,
              private httpclientService: HttpclientService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.albumId = params['id'];
    });

    this.getAlbums();
  }

  getAlbums() {
    this.httpclientService.getPhotosByAlbumId(this.albumId).subscribe(
      (res: HttpResponse<any>) => {
        const response = res.body;
        console.log('response', response);
        if (response !== null && response !== undefined) {
          this.photos = response;
        }
      },
      error => {
        console.log('error', error);
      },
      () => {
      });
  }
}
