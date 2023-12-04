import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Projects } from '../models/projects';
import { LoadingService } from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  private projectsData: Projects = new Projects();

  get projects() {
    return this.projectsData.projects.sort((a, b) => {
      if (a.dateHourCreated < b.dateHourCreated) {
        return 1
      }
      return -1;
    });
  }

  constructor(private http: HttpClient, private loadingService: LoadingService) { }

  async listProjects() {
    this.loadingService.setStatus(true);
    this.projectsData = await this.http.get(`${environment.url}/list-projects`).toPromise() as any;
    this.loadingService.setStatus(false);
  }

  async addProject(project) {
    try {
      await this.http.post(`${environment.url}/add-project`, project).toPromise();
      return true;
    } catch (error) {
      return false;
    }
  }

}
