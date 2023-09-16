import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
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
    private loginService: LoginService,
    private loadingService: LoadingService) { }

  ngOnInit(): void {
  }

  login() {
    this.loadingService.setStatus(true);
    this.loginService.login(this.userForm.value).subscribe((access: any) => {
      this.loadingService.setStatus(false);
      localStorage.setItem('user_agaclocking', JSON.stringify(access.user));
      localStorage.setItem('tkn_ack', access.token);
      this.router.navigate(['/']);
    }, err => {
      this.loadingService.setStatus(false);
      alert(err.status)
    })
  }

}
