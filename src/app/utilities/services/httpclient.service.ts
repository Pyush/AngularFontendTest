import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http: HttpClient) { }

  public getUsers() {
    return this.http.get(environment.API_URL + 'users', {
      observe: 'response',
      responseType: 'json'
    });
  }

  public getUserAlbumsById(albumId: number) {
    return this.http.get(environment.API_URL + 'albums?userId=' + albumId, {
      observe: 'response',
      responseType: 'json'
    });
  }

  public getPhotosByAlbumId(photoId: number) {
    return this.http.get(environment.API_URL + 'photos?albumId=' + photoId, {
      observe: 'response',
      responseType: 'json'
    });
  }
}
