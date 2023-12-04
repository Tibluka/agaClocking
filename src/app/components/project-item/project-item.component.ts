import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { User } from 'src/app/models/graphics';
import { Project } from 'src/app/models/projects';

@Component({
  selector: 'app-project-item',
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss']
})
export class ProjectItemComponent implements OnInit {


  @Input() project: Project = new Project();
  @Input() index: number;

  @Output() deleteOutput = new EventEmitter();
  @Output() updateOutput = new EventEmitter();

  deleteState: boolean = false;

  constructor(private ngbModal: NgbModal) { }

  ngOnInit(): void {
  }

  swipeRight() {
    this.deleteState = true;
  }

  swipeLeft() {
    this.deleteState = false;
  }

  deleteProject() {
    this.deleteOutput.emit(this.project);
  }

  updateProject() {
    this.updateOutput.emit(this.project);
  }


}
