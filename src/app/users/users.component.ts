import {Component, OnInit} from '@angular/core';
import {HttpclientService} from '../services/httpclient.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users: any[];

  constructor(private httpclientService: HttpclientService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.httpclientService.getUsers().subscribe(
      (res: HttpResponse<any>) => {
        const response = res.body;
        console.log('response', response);
        if (response !== null && response !== undefined) {
          this.users = response;
        }
      },
      error => {
        console.log('error', error);
      },
      () => {
      });
  }
}
