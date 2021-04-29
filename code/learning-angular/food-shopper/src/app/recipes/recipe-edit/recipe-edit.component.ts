import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

enum EditMode {
  'EDIT',
  'CREATE'
}

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  routeId: number;
  isEditing: EditMode;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.routeId = +params['id'];
      this.isEditing = params['id'] ? EditMode.EDIT : EditMode.CREATE;
    });
  }

}
