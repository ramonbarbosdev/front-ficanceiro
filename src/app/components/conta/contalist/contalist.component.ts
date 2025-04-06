import { Component, inject } from '@angular/core';
import { Conta } from '../../../models/conta';
import { Router } from '@angular/router';
import { ContaService } from '../../../services/conta.service';
import { CommonModule } from '@angular/common';
import { BaseListComponent } from '../../baselist/baselist.component';

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

  constructor() {
    super();
    this.listaAll();
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
}
