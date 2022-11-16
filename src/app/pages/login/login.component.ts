import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private router: Router,
    private loginService: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.userForm.value).subscribe((access: any) => {
      localStorage.setItem('user_agaclocking', JSON.stringify(access.user));
      this.router.navigate(['/home']);
    },err=>{
      alert(err.status)
    })
  }

}
