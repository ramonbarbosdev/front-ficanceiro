import { Component, inject } from '@angular/core';
import { BaseListComponent } from '../../baselist/baselist.component';
import { Lancamento } from '../../../models/lancamento';
import { Router } from '@angular/router';
import { LancamentoService } from '../../../services/lancamento.service';
import { ContaService } from '../../../services/conta.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lancamentolist',
  imports: [CommonModule],
  templateUrl: './lancamentolist.component.html',
  styleUrl: './lancamentolist.component.scss'
})
export class LancamentolistComponent extends BaseListComponent<Lancamento> {
  router = inject(Router);
  objetoService = inject(LancamentoService);
  PRIMARYKEY = 'id_lancamento';

  conta: any[] = []; 
  contaMap: { [id: number]: string } = {};
  contaService = inject(ContaService);

  status: any[] = []; 
  statusMap: { [id: number]: string } = {};

  constructor() {
    super();
    this.listaAll();
    this.carregarConta();
    this.carregarStatus(); 
  }
  

  onShow() {
    super.novo('admin/lancamento/new');
  }

  onEdit(object: any) {
    super.editarRota('admin/lancamento/edit', object);
  }

  onDelete(object: any) {
    super.remover(object);
  }

  carregarConta() {
    this.contaService.findAll().subscribe({
      next: (item) => {
        this.conta = item;
        this.contaMap = item.reduce((acc, item) => {
          acc[item.id_conta] = item.nm_conta;
          return acc;
        }, {} as { [id: number]: string });
      },
      error: (error) => {
        console.error('Erro ao carregar tipos de conta', error);
      }
    });
  }
  carregarStatus() {
    this.objetoService.findStatus().subscribe({
      next: (item) => {
        this.status = item;
        this.statusMap = item.reduce((acc: { [x: string]: any; }, item: { id_statuslancamento: string | number; ds_statuslancamento: any; }) => {
          acc[item.id_statuslancamento] = item.ds_statuslancamento;
          return acc;
        }, {} as { [id: number]: string });
      },
      error: (error) => {
        console.error('Erro ao carregar tipos de conta', error);
      }
    });
  }

}
