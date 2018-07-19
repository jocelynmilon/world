import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  emails$;

  control: FormControl;
  public form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,

  ) {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit() {

  }
  loginWithGoogle() {
    this.authService.loginWithGoogle();
  }
  loginWithFacebook() {
    this.authService.loginWithFacebook();
  }




}

