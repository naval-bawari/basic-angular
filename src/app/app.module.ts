import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule
} from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule }     from './app-routing.module';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { EventComponent } from './event/event.component';
import { ChildComponent } from './child/child.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiComponent } from './api/api.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppMaterialModule } from './app-material.module'
import { ApiService } from './api.service';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { EmitEventComponent } from './emit-event/emit-event.component';
import { ChildEventComponent } from './child-event/child-event.component';
import { StringPipePipe } from './string-pipe.pipe';
import { ToastrModule } from 'ng6-toastr-notifications';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    TodoAppComponent,
    EventComponent,
    ChildComponent,
    ApiComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    UserComponent,
    EmitEventComponent,
    ChildEventComponent,
    StringPipePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDeuithVoGOIPV_vO0l0ZbuVuWuFY2hIJA'
    })   
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
    {provide: HTTP_INTERCEPTORS, useClass: ApiService, multi: true}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }