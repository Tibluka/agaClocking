import { Component, OnInit } from '@angular/core';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  get projectList() {
    return this.projectService.projects;
  }

  constructor(private projectService: ProjectsService) {
    this.projectService.listProjects();
  }

  ngOnInit(): void {
  }

  deleteUser(user) {
    debugger

  }

}
