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
    HttpClientModule
  ],
  providers: [TempleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
