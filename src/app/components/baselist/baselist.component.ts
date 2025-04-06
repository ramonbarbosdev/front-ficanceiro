import { Directive } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Directive()
export abstract class BaseListComponent<T extends { [key: string]: any }>
{
  lista: T[] = [];
  abstract objetoService: any;
  abstract router: Router;
  abstract PRIMARYKEY: string;

  constructor() {}

  novo(route: string) {
    this.router.navigate([route]);
  }
  
  editarRota(route: string, object: T): void {
    this.router.navigate([route, object[this.PRIMARYKEY]]);
  }

  listaAll() {
    this.objetoService.findAll().subscribe({
      next: (lista: T[]) => {
        this.lista = lista;
      },
      error: (error: any) => {
        Swal.fire({
          icon: 'error',
          title: 'Erro ' + error.status,
          text: 'Erro ao buscar os dados!',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  remover(object: T) {
    Swal.fire({
      title: 'Deseja realmente excluir?',
      text: 'Você não poderá reverter isso!',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
      denyButtonText: `Não`
    }).then((result) => {
      if (result.isConfirmed) {
        this.objetoService.deletar(object[this.PRIMARYKEY]).subscribe({
          next: (response: any) => {
            Swal.fire(response.message, '', 'success');
            this.listaAll();
          },
          error: (e: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Erro ' + e.error.code,
              text: e.error.error,
              confirmButtonText: 'OK'
            });
          }
        });
      } else if (result.isDenied) {
        Swal.fire('Registro não excluido!', '', 'info');
      }
    });
  }
}
