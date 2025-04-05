import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { TipocontalistComponent } from './components/tipoconta/tipocontalist/tipocontalist.component';
import { TipocontadetailsComponent } from './components/tipoconta/tipocontadetails/tipocontadetails.component';
import { ContalistComponent } from './components/conta/contalist/contalist.component';
import { ContadetailsComponent } from './components/conta/contadetails/contadetails.component';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: PrincipalComponent, children:
        [
            {path: 'tipoconta', component: TipocontalistComponent},
            {path: 'tipoconta/new', component: TipocontadetailsComponent},
            {path: 'tipoconta/edit/:id', component: TipocontadetailsComponent},
            {path: 'conta', component: ContalistComponent},
            {path: 'conta/new', component: ContadetailsComponent},
            {path: 'conta/edit/:id', component: ContadetailsComponent},
        ]
    },

];
