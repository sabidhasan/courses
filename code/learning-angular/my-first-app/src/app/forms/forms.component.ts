import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('formRef') private formRef: NgForm;
  public subscriptionTypes = ['basic', 'advanced', 'pro'];
  public defaultSubscription = 'advanced';

  constructor() { }

  ngOnInit(): void {
  }

  handleSubmit() {
    console.log(this.formRef.value);
  }
}
