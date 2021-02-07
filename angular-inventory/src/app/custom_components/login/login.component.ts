import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  @Input() error: string  ='';
  form: FormGroup = new FormGroup({
    username: new FormControl('a'),
    password: new FormControl('b'),
  });

  constructor(private router: Router,
    private location: Location,
    private authService: AuthenticationService) { }

  ngOnInit(): void {
  }

  login()
  {
    if(this.authService.ValidateUser(this.form.controls.username.value, this.form.controls.password.value))
    {
      this.router.navigate(['/dashboard']);
    }else{
      console.log('auth failed');
    }
    
    
  }

}
