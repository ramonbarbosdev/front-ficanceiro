import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from '../../../services/conta.service';
import { Tipoconta } from '../../../models/tipoconta';
import Swal from 'sweetalert2';
import { Conta } from '../../../models/conta';
import { FormsModule } from '@angular/forms';
import { TipocontaService } from '../../../services/tipoconta.service';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from '../../component/input-text/input-text.component';
import { SelectComponent } from '../../component/select/select.component';
import { BaseFormComponent } from '../../baseform/baseform.component';

@Component({
  selector: 'app-contadetails',
  standalone: true,
  imports: [FormsModule, CommonModule, InputTextComponent, SelectComponent],
  templateUrl: './contadetails.component.html',
  styleUrl: './contadetails.component.scss'
})
 export class ContadetailsComponent extends BaseFormComponent<Conta> {
  service = inject(ContaService);
  
  redirectRoute = '/admin/conta';
  primaryKey: keyof Conta = 'id_conta';

  tipoConta: Tipoconta[] = [];
  tipoContaService =  inject(TipocontaService)

  override ngOnInit(): void {
    super.ngOnInit(); 
    this.carregarTiposConta();
  }

  carregarTiposConta() {
    this.tipoContaService.findAll().subscribe({
      next: (tipos) => {
        this.tipoConta = tipos;
      },
      error: (error) => {
        console.error('Erro ao carregar tipos de conta', error);
      }
    });
  }
}
