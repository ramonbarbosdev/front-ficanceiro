import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipoconta } from '../../../models/tipoconta';
import Swal from 'sweetalert2'
import { TipocontaService } from '../../../services/tipoconta.service';

@Component({
  selector: 'app-tipocontadetails',
  standalone: true,
  imports: [FormsModule],
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
              this.router.navigate(['/admin/tipoconta'], {
                state: {
                  ['objectEditado']: this.object
                }
              });
            });
          },
          error: (error) => {
            Swal.fire({
              icon: 'error',
              title: `Erro ${error.status}`,
              text: error.error?.message || 'Erro ao atualizar o objeto.',
              confirmButtonText: 'OK'
            });
          }
        });
      }

    
    }
}
