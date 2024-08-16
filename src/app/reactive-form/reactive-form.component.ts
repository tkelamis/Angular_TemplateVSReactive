import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent implements OnInit {
  /*form = new FormGroup({
    name: new FormControl('elianis', { validators: [Validators.required] }),
    password: new FormControl('', { validators: [Validators.required] }),
    email: new FormControl('', { validators: [Validators.required] }),
  })   Ακριβώς το ίδιο μπορώ να το γράψω με την βοήθεια του formBuilder όπως παρακάτω*/

 

  constructor(private formBuilder: FormBuilder) { }

  form = this.formBuilder.group({
    name: ['elianis', {
      validators: [Validators.required, Validators.minLength(6)],
      updateOn:'blur'
    }],
    password: ['', [Validators.required, Validators.minLength(6)]],
    email: ['', [Validators.required], Validators.minLength(6)]
  })

  ngOnInit() {

  }

  showMessage(form:FormGroup): void {
    console.log(form.value)
  }
}
