import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


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
        /* definir a rota inicial do projeto */
        path: "",
        pathMatch: "full",
        redirectTo: "/autenticar-usuario"
    }
];


