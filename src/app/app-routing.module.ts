import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PoolQuestionComponent } from './pool-question/pool-question.component';
import {AdminViewComponent} from './admin-view/admin-view.component';

const routes: Routes = [
    { path: '', component: PoolQuestionComponent },
    { path: 'app-login', component: LoginComponent },
    {path : 'app-pool-question', component : PoolQuestionComponent},
    {path: 'app-admin-view',component : AdminViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
