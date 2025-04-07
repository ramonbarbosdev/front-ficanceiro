import { Routes } from '@angular/router';
import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { TipocontalistComponent } from './components/tipoconta/tipocontalist/tipocontalist.component';
import { TipocontadetailsComponent } from './components/tipoconta/tipocontadetails/tipocontadetails.component';
import { ContalistComponent } from './components/conta/contalist/contalist.component';
import { ContadetailsComponent } from './components/conta/contadetails/contadetails.component';
import { LancamentolistComponent } from './components/lancamento/lancamentolist/lancamentolist.component';
import { LancamentodetaisComponent } from './components/lancamento/lancamentodetais/lancamentodetais.component';
import { authGuard } from './auth/auth.guard';

export const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'admin', component: PrincipalComponent,  canActivateChild: [authGuard],  children:
        [
            {path: 'tipoconta', component: TipocontalistComponent},
            {path: 'tipoconta/new', component: TipocontadetailsComponent},
            {path: 'tipoconta/edit/:id', component: TipocontadetailsComponent},
            {path: 'conta', component: ContalistComponent},
            {path: 'conta/new', component: ContadetailsComponent},
            {path: 'conta/edit/:id', component: ContadetailsComponent},
            {path: 'lancamento', component: LancamentolistComponent},
            {path: 'lancamento/new', component: LancamentodetaisComponent},
            {path: 'lancamento/edit/:id', component: LancamentodetaisComponent},
        ]
    },

];
