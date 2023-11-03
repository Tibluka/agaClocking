import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  userForm: FormGroup = new FormGroup({
    bank: new FormControl('123', Validators.required),
    bankAccount: new FormControl('', Validators.required),
    bankAccountDigit: new FormControl('', Validators.required),
    bankAgency: new FormControl('', Validators.required),
    bankName: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    cpfCnpj: new FormControl('', Validators.required),
    userType: new FormControl(null, Validators.required),
    specialRequests: new FormArray([])
  })

  constructor(private userService: UserService,
    private ngbActiveModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  close() {
    this.ngbActiveModal.close();
  }

  async createUser() {
    if (this.userForm.invalid) {
      alert('Formulário inválido')
      return;
    }
    const success = await this.userService.createUser(this.userForm.value);
    if (success) this.close();
  }

  addToSpecialRequests(event) {
    let specialRequests = this.userForm.get('specialRequests') as FormArray
    specialRequests = new FormArray([new FormControl(event.value)]);
  }

}
