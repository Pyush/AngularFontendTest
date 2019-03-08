import { Component, OnInit } from '@angular/core';
import {HttpclientService} from '../services/httpclient.service';
import {HttpResponse} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-user-albums',
  templateUrl: './user-albums.component.html',
  styleUrls: ['./user-albums.component.scss']
})
export class UserAlbumsComponent implements OnInit {
  albums: any[];
  userId: number;
  constructor(private route: ActivatedRoute,
              public router: Router,
              private httpclientService: HttpclientService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userId = params['id'];
    });

    this.getAlbums();
  }

  getAlbums() {
    this.httpclientService.getUserAlbumsById(this.userId).subscribe(
      (res: HttpResponse<any>) => {
        const response = res.body;
        console.log('response', response);
        if (response !== null && response !== undefined) {
          this.albums = response;
        }
      },
      error => {
        console.log('error', error);
      },
      () => {
      });
  }

}
