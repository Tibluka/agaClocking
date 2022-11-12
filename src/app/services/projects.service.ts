import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Projects } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsData: Projects = new Projects();

  get projects() {
    return this.projectsData.projects;
  }

  constructor(private http: HttpClient) { }

  async listProjects() {
    this.projectsData = await this.http.get(`${environment.url}/list-projects`).toPromise() as any;
  }
}
