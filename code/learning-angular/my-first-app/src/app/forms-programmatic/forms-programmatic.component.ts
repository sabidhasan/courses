import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms-programmatic',
  templateUrl: './forms-programmatic.component.html',
  styleUrls: ['./forms-programmatic.component.css']
})
export class FormsProgrammaticComponent implements OnInit {
  public reactiveForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, this.validateProjectName.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical', )
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  validateProjectName(control: FormControl) {
    if (control.value === 'Test') {
      return { invalidProjectName: true };
    }

    return null;
  }
}
