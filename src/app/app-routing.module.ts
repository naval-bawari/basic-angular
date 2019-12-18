import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TodoAppComponent } from './todo-app/todo-app.component';
import { EventComponent } from './event/event.component';
import { ApiComponent } from './api/api.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { FormComponent } from './form/form.component';
import { EmitEventComponent } from './emit-event/emit-event.component';
import { 
  AuthGuardService as AuthGuard 
} from './auth-guard.service';

const routes: Routes = [

  { path: 'todo', component: TodoAppComponent, canActivate: [AuthGuard]  },
  { path: '', component: LoginComponent}, 
  { path: 'event', component: EventComponent, canActivate: [AuthGuard]  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] }, 
  { path: 'service', component: ApiComponent , canActivate: [AuthGuard] }, 
  { path: 'user', component: UserComponent, canActivate: [AuthGuard]  },
  { path: 'eventemit', component: EmitEventComponent, canActivate: [AuthGuard]  },
  { path: 'form', component: FormComponent, canActivate: [AuthGuard]  },
  {path: '**', redirectTo: ''} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
