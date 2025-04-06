import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipoconta } from '../../../models/tipoconta';
import Swal from 'sweetalert2'
import { TipocontaService } from '../../../services/tipoconta.service';
import { SelectComponent } from "../../component/select/select.component";
import { InputTextComponent } from '../../component/input-text/input-text.component';

@Component({
  selector: 'app-tipocontadetails',
  standalone: true,
  imports: [FormsModule, InputTextComponent],
  templateUrl: './tipocontadetails.component.html',
  styleUrls: ['./tipocontadetails.component.scss']
})
export class TipocontadetailsComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private objectoService = inject(TipocontaService);

  object: Tipoconta = new Tipoconta();

    ngOnInit()
    {
      const id = this.route.snapshot.params['id'];
      if (id)
      {
        this.onEdit(id);
      }
    }

    private onEdit(id: number): void 
    {
      {
        this.objectoService.findById(id).subscribe({
          next: (data: Tipoconta) => {
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
      const isEdit = this.object.id_tipoconta > 0;
      
      if(isEdit)
      {
        this.objectoService.update(this.object).subscribe({
          next: () => {
            Swal.fire({
              title: 'Editado com sucesso!' ,
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(() => {
              this.router.navigate(['/admin/tipoconta']);
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
              this.router.navigate(['/admin/tipoconta']);
            });
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: `Erro ${error.status}`,
              text: error.error?.message || 'Erro ao cadastrar o objeto.',
              confirmButtonText: 'OK'
            });
          }
        });
      }

    
    }
}
