import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TerminalComponent } from './components/terminal-component/terminal-component.component';


const appRoutes: Routes = [
  {
    path: '',
    component: TerminalComponent,
    data: {cmd: 'ng generate component xyz'},    
  },
  {
    path: 'material',
    component: TerminalComponent,
    data: {cmd: 'ng add @angular/material'}
  },
  {
    path: 'pwa',
    component: TerminalComponent,
    data: {cmd: 'ng add @angular/pwa'}
  },
];

const emptyRoutes = [];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
