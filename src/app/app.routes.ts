import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginGuard } from './guards/login.guard';
import { CreateTasksComponent } from './components/pages/create-tasks/create-tasks.component';
import { ListTasksComponent } from './components/pages/list-tasks/list-tasks.component';
import { EditTasksComponent } from './components/pages/edit-tasks/edit-tasks.component';


export const routes: Routes = [
    {
        path: "autenticar-usuario",
        component: LoginComponent
    },
    {
        path: "criar-usuario",
        component: RegisterComponent
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [LoginGuard]
    },
    {
        path: "create-tasks",
        component: CreateTasksComponent,
        canActivate: [LoginGuard]
    },
    {
        path: "list-tasks",
        component: ListTasksComponent,
        canActivate: [LoginGuard]
    },
    {
        path: "edit-tasks",
        component: EditTasksComponent,
        canActivate: [LoginGuard]
    },
    {
        /* definir a rota inicial do projeto */
        path: "",
        pathMatch: "full",
        redirectTo: "/autenticar-usuario"
    }
];


