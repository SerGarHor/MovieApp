import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceMovie } from 'src/app/shared/service/service.service';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.scss']
})
export class CreateMovieComponent implements OnInit {
  formulario: FormGroup;
  href: string = '/home'
  title: string = 'Crear pelicula'
  constructor(
    private formBuilder: FormBuilder,
    private service: ServiceMovie,
    private router: Router

    ) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      title: ['', Validators.required],
      poster_path: ['', Validators.required],
      price: ['', Validators.required],
      inventory: ['', Validators.required],
      overview: ['', Validators.required],
      vote_average: ['', Validators.required],
      release_date: ['', Validators.required],
    });
  }

  submitForm() {
    if (this.formulario.valid) {
        this.service.createMovie(this.formulario.value)
        this.router.navigate(['/home'])
    }
  }
}
