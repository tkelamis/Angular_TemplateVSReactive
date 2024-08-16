import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdvancedReactiveFormComponent } from './advanced-reactive-form/advanced-reactive-form.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'reactive', component: ReactiveFormComponent },
  { path: 'template', component: TemplateDrivenFormComponent },
  { path: 'advanced', component: AdvancedReactiveFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
