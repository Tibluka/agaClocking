import { Component, OnInit } from '@angular/core';
import { GraphicsService } from 'src/app/services/graphics.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.scss']
})
export class GraphicsComponent implements OnInit {

  get users() {
    return this.graphicsService.users;
  } 

  constructor(private graphicsService: GraphicsService) { 
    this.graphicsService.listUsers();
  }

  ngOnInit(): void {
  }

}
