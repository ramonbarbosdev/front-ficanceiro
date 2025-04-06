import { Component, inject } from '@angular/core';
import { Conta } from '../../../models/conta';
import { Router } from '@angular/router';
import { ContaService } from '../../../services/conta.service';
import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contalist',
  imports: [CommonModule],
  templateUrl: './contalist.component.html',
  styleUrl: './contalist.component.scss'
})
export class ContalistComponent {
  lista: Conta[] = [];
  router = inject(Router);
  objetoService =  inject(ContaService);
  PRIMARYKEY = "id_conta";

  constructor()
  {
    this.listaAll();   
  }

    novo()
    {
      this.router.navigate(['admin/conta/new']);
    }
    editar(object: any)
    {
      this.router.navigate(['admin/conta/edit', object[this.PRIMARYKEY]]);
    }
  
  listaAll() {
    
      this.objetoService.findAll().subscribe({
        next: (lista: any[]) =>{
          this.lista = lista;
        },
        error: (error: any) => {
          Swal.fire({
            icon: 'error',
            title: 'Erro '+error.status,
            text: 'Erro ao buscar os dados!',
            confirmButtonText: 'OK'
          });
        }
      });
    }

    
      remover(object: any)
      {
          Swal.fire({
            title: "Deseja realmente excluir?",
            text: "Você não poderá reverter isso!",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Sim",
            cancelButtonText: "Cancelar",
            denyButtonText: `Não`
          }).then((result) => {
    
            if (result.isConfirmed)
            {
              this.objetoService.deletar(object[this.PRIMARYKEY]).subscribe({
                next: (response: any) =>
                {
                  Swal.fire("Registro deletado!", "", "success");
                  this.listaAll();
    
                },
                error: (e: any) => {

                  Swal.fire({
                    icon: 'error',
                    title: 'Erro '+e.error.code,
                    text: e.error.error,
                    confirmButtonText: 'OK'
                  });
                }
              });
           
            }
            else if (result.isDenied)
            {
              Swal.fire("Registro não excluido!", "", "info");
            }
          });
      }
}
