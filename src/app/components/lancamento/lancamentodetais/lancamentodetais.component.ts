import { Component, inject } from '@angular/core';
import { BaseFormComponent } from '../../baseform/baseform.component';
import { Lancamento } from '../../../models/lancamento';
import { LancamentoService } from '../../../services/lancamento.service';
import { SelectComponent } from "../../component/select/select.component";
import { InputTextComponent } from '../../component/input-text/input-text.component';
import { Conta } from '../../../models/conta';
import { ContaService } from '../../../services/conta.service';
import { InputDateComponent } from '../../component/input-date/input-date.component';
import { InputNumberComponent } from '../../component/input-number/input-number.component';
import { InputTextareaComponent } from '../../component/input-textarea/input-textarea.component';

@Component({
  selector: 'app-lancamentodetais',
  imports: [SelectComponent, InputTextComponent, InputDateComponent, InputNumberComponent, InputTextareaComponent],
  templateUrl: './lancamentodetais.component.html',
  styleUrl: './lancamentodetais.component.scss'
})
export class LancamentodetaisComponent  extends BaseFormComponent<Lancamento> {
  service = inject(LancamentoService);
  redirectRoute = '/admin/lancamento';
  primaryKey: keyof Lancamento = 'id_lancamento';

  conta: Conta[] = [];
  contaService =  inject(ContaService)

  status: any[] = [];


  override ngOnInit(): void {
    super.ngOnInit(); 
    this.carregarConta();
    this.carregarStatus()
  }
  

  carregarConta() {
    this.contaService.findAll().subscribe({
      next: (item) => {
        this.conta = item;
      },
      error: (error) => {
        console.error('Erro ao carregar tipos de conta', error);
      }
    });
  }
  carregarStatus() {
    this.service.findStatus().subscribe({
      next: (item) => {
        this.status = item;
      },
      error: (error) => {
        console.error('Erro ao carregar tipos de conta', error);
      }
    });
  }

}
