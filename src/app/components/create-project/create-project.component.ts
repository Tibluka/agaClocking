import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProjectsService } from 'src/app/services/projects.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {


  projectForm: FormGroup = new FormGroup({
    projectName: new FormControl('', Validators.required),
    active: new FormControl(true, Validators.required)
  })

  constructor(private userService: UserService,
    private ngbActiveModal: NgbActiveModal,
    private projectService: ProjectsService) { }

  ngOnInit(): void {
  }

  close() {
    this.ngbActiveModal.close();
  }

  async addProject() {
    if (this.projectForm.invalid) {
      alert('Formulário inválido')
      return;
    }
    const success = await this.projectService.addProject(this.projectForm.value);
    if (success) this.close();
  }


}
