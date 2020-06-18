import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../container/auth/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showFiller = false;
  constructor(private myRoute: Router, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  // installPwa(): void {
  //   this.Pwa.promptEvent.prompt();
  // }

  logout() {
    // this.authenticationService.logout();
    localStorage.clear();
    this.myRoute.navigate(['']);
  }
}
