import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  @Output()
  create = new EventEmitter();
 
 
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      noms: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });

  }
  createMessage() {
    console.log('form.valid', this.form.valid);
    if (this.form.valid) {
      this.create.emit(this.form);
    }
  }
}
