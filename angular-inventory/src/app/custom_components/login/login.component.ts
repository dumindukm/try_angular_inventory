import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()  name:  string ="a";
  @Input()  password:  string ="b";
  constructor(private router: Router,
    private location: Location,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login()
  {
    if(this.authService.ValidateUser(this.name, this.password))
    {
      this.router.navigate(['/dashboard']);
    }
    console.log(this.name);
    
  }

}
