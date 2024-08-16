import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field'; // Import MatFormFieldModule
import { MatInputModule } from '@angular/material/input'; // Import MatInputModule
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeButtonComponent } from './home-button/home-button.component';
import { AdvancedReactiveFormComponent } from './advanced-reactive-form/advanced-reactive-form.component';
import { MatStepperModule } from '@angular/material/stepper';
import { Form1Component } from './form1/form1.component'; // Import MatStepperModule for mat-horizontal-stepper
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core'; // Only needed for datepickers

@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    HomePageComponent,
    HomeButtonComponent,
    AdvancedReactiveFormComponent,
    Form1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // Add BrowserAnimationsModule here
    MatCardModule, // Add MatCardModule here
    MatFormFieldModule, // Add MatFormFieldModule here
    MatInputModule, // Add MatInputModule here
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatNativeDateModule,
    MatDatepickerModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
