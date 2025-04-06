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

@Component({
  selector: 'app-contadetails',
  standalone: true,
  imports: [FormsModule, CommonModule, InputTextComponent, SelectComponent],
  templateUrl: './contadetails.component.html',
  styleUrl: './contadetails.component.scss'
})
export class ContadetailsComponent
{
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private objectoService = inject(ContaService);
  private tipoContaService = inject(TipocontaService);
  PRIMARYKEY = 'id_conta';

  object: Conta = new Conta();
  tipoConta: Tipoconta[] = [];

    ngOnInit()
    {
      const id = this.route.snapshot.params['id'];
      this.carregarTiposConta();

      if (id) this.onEdit(id);
     
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

    private onEdit(id: number): void 
    {
      {
        this.objectoService.findById(id).subscribe({
          next: (data: any) => {
            this.object = data;
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: `Erro ${error.status}`,
              text: error.error?.message || 'Erro ao buscar o objeto.',
              confirmButtonText: 'OK'
            });
          }
        });
        
      }
    }

    onSave(): void
    {
      const isEdit = (this.object as any)[this.PRIMARYKEY] > 0;
      
      if(isEdit)
      {
        this.objectoService.update(this.object).subscribe({
          next: () => {
            Swal.fire({
              title: 'Editado com sucesso!' ,
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/admin/conta']);
            });
          },
          error: (e) => {
            Swal.fire({
              icon: 'error',
              title: e.error.code,
              text: e.error.error,
              confirmButtonText: 'OK'
            });
          }
        });
      }
      else
      {
        this.objectoService.save(this.object).subscribe({
          next: () => {
            Swal.fire({
              title: 'Cadastrado com sucesso!' ,
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/admin/conta']);
            });
          },
          error: (e) => {
            Swal.fire({
              icon: 'error',
              title: e.error.code,
              text: e.error.error|| 'Erro ao cadastrar o objeto.',
              confirmButtonText: 'OK'
            });
          }
        });
      }

    
    }
}
