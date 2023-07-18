import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TempleListComponent } from './components/temple-list/temple-list.component';
import { TempleDetailsComponent } from './components/temple-details/temple-details.component';
import { TempleFormComponent } from './components/temple-form/temple-form.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HoverEffectDirective } from './directives/hover-effect.directive';
import { TempleService } from './services/temple.service';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    TempleListComponent,
    TempleDetailsComponent,
    TempleFormComponent,
    SearchComponent,
    NavbarComponent,
    FooterComponent,
    HoverEffectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatToolbarModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,

    RouterModule,
  ],
  providers: [TempleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
