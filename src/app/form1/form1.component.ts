import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrl: './form1.component.css'
})
export class Form1Component implements OnInit {

  form = this.formBuilder.group({
    title: ['', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(60)
    ]]
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() { }

}
