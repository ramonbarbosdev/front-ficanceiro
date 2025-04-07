import { Component, inject } from '@angular/core';
import { BaseFormComponent } from '../../baseform/baseform.component';
import { Lancamento } from '../../../models/lancamento';
import { LancamentoService } from '../../../services/lancamento.service';
import { SelectComponent } from "../../component/select/select.component";
import { InputTextComponent } from '../../component/input-text/input-text.component';
import { Conta } from '../../../models/conta';
import { ContaService } from '../../../services/conta.service';
import { InputDateComponent } from '../../component/input-date/input-date.component';

@Component({
  selector: 'app-lancamentodetais',
  imports: [SelectComponent, InputTextComponent, InputDateComponent],
  templateUrl: './lancamentodetais.component.html',
  styleUrl: './lancamentodetais.component.scss'
})
export class LancamentodetaisComponent  extends BaseFormComponent<Lancamento> {
  service = inject(LancamentoService);
  redirectRoute = '/admin/lancamento';
  primaryKey: keyof Lancamento = 'id_lancamento';

  conta: Conta[] = [];
  contaService =  inject(ContaService)

  override ngOnInit(): void {
    super.ngOnInit(); 
    this.carregarConta();
  }
  

  carregarConta() {
    this.contaService.findAll().subscribe({
      next: (tipos) => {
        this.conta = tipos;
      },
      error: (error) => {
        console.error('Erro ao carregar tipos de conta', error);
      }
    });
  }

}
