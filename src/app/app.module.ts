import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTabsModule} from '@angular/material/tabs';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { MatIconModule} from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


import { HomeComponent } from './movieapp/home/home.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { DetailComponent } from './shared/components/detail/detail.component';
import { ToolbarComponent } from './shared/components/toolbar/toolbar.component';
import { CreateMovieComponent } from './movieapp/create-movie/create-movie.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    DetailComponent,
    ToolbarComponent,
    CreateMovieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTabsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    RouterModule,
    BrowserAnimationsModule

  ],
  providers: [DecimalPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
