import { Component, inject } from '@angular/core';
import { Conta } from '../../../models/conta';
import { Router } from '@angular/router';
import { ContaService } from '../../../services/conta.service';
import { CommonModule } from '@angular/common';
import { BaseListComponent } from '../../baselist/baselist.component';
import { TipocontaService } from '../../../services/tipoconta.service';

@Component({
  selector: 'app-contalist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contalist.component.html',
  styleUrl: './contalist.component.scss'
})
export class ContalistComponent extends BaseListComponent<Conta> {
  router = inject(Router);
  objetoService = inject(ContaService);
  PRIMARYKEY = 'id_conta';

  tipoConta: any[] = []; 
  tipoContaMap: { [id: number]: string } = {};
  tipoContaService = inject(TipocontaService);

  constructor() {
    super();
    this.listaAll();
    this.carregarTiposConta()
  }

  onShow() {
    super.novo('admin/conta/new');
  }

  onEdit(conta: Conta) {
    super.editarRota('admin/conta/edit', conta);
  }

  onDelete(conta: Conta) {
    super.remover(conta);
  }

  carregarTiposConta() {
    this.tipoContaService.findAll().subscribe({
      next: (tipos) => {
        this.tipoConta = tipos;
        this.tipoContaMap = tipos.reduce((acc, tipo) => {
          acc[tipo.id_tipoconta] = tipo.nm_tipoconta;
          return acc;
        }, {} as { [id: number]: string });
      },
      error: (error) => {
        console.error('Erro ao carregar tipos de conta', error);
      }
    });
  }

}
