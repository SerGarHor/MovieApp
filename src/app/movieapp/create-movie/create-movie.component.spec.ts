import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateMovieComponent } from './create-movie.component';

describe('CreateMovieComponent', () => {
  let component: CreateMovieComponent;
  let fixture: ComponentFixture<CreateMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateMovieComponent],
      imports: [FormsModule, ReactiveFormsModule, RouterTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should submit the form when valid', () => {
    spyOn(component['router'], 'navigateByUrl');

    // Set form values
    component.formulario.controls['title'].setValue('Test Title');
    component.formulario.controls['poster_path'].setValue('https://example.com/image.jpg');
    component.formulario.controls['price'].setValue(9.99);
    component.formulario.controls['inventory'].setValue(10);
    component.formulario.controls['overview'].setValue('Test description');
    component.formulario.controls['vote_average'].setValue(7.5);
    component.formulario.controls['release_date'].setValue('2023-06-04');

    // Trigger form submission
    component.submitForm();

    // Expect router to navigate to '/home'
    expect(component['router'].navigateByUrl).toHaveBeenCalledWith('/home');
  });
});
