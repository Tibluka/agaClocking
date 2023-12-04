import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './projects.component';
import { RouterModule } from '@angular/router';
import { ProjectItemModule } from 'src/app/components/project-item/project-item.module';



@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectItemModule,
    RouterModule.forChild([
      { path: '', component: ProjectsComponent }
    ])
  ]
})
export class ProjectsModule { }
