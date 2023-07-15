import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TempleListComponent } from './components/temple-list/temple-list.component';
import { TempleDetailsComponent } from './components/temple-details/temple-details.component';
const routes: Routes = [
  { path: '', redirectTo: 'temples', pathMatch: 'full' },
  { path: 'temples', component: TempleListComponent },
  { path: 'temples/:id', component: TempleDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
