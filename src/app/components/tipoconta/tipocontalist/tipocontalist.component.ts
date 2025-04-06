import { Component, inject } from '@angular/core';
import { Tipoconta } from '../../../models/tipoconta';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseListComponent } from '../../baselist/baselist.component';
import { TipocontaService } from '../../../services/tipoconta.service';

@Component({
  selector: 'app-tipocontalist',
  imports: [CommonModule],
  templateUrl: './tipocontalist.component.html',
  styleUrl: './tipocontalist.component.scss'
})
export class TipocontalistComponent extends BaseListComponent<Tipoconta> 
{
    router = inject(Router);
    objetoService = inject(TipocontaService);
    PRIMARYKEY = 'id_tipoconta';
  
    constructor() {
      super();
      this.listaAll();
    }
  
    onShow() {
      super.novo('admin/tipoconta/new');
    }
  
    onEdit(conta: Tipoconta) {
      super.editarRota('admin/tipoconta/edit', conta);
    }
  
    onDelete(conta: Tipoconta) {
      super.remover(conta);
    }
}
