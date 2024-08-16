import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrl: './template-driven-form.component.css'
})
export class TemplateDrivenFormComponent {
  val = {
    name: "kelamis",
    password: "26548",
    email: "kelamis62@gmail.com"
  }

  printMessage(loginForm: NgForm, event: any): void {

    console.log(loginForm.value.password);
    console.log("Backend is " + this.val.password)
  }
}
