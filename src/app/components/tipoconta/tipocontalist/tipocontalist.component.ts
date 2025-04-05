import { Component, inject } from '@angular/core';
import { Tipoconta } from '../../../models/tipoconta';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tipocontalist',
  imports: [CommonModule],
  templateUrl: './tipocontalist.component.html',
  styleUrl: './tipocontalist.component.scss'
})
export class TipocontalistComponent
{
  lista: Tipoconta[] = [];

  constructor()
  {
    this.lista = [
      {id_tipoconta: 1,cd_tipoconta: '001', nm_tipoconta: 'Conta Corrente'},
    ];

    let carroNovo = history.state.objectNovo;
    let objectEditado = history.state.objectEditado; 

    if(carroNovo)
    {
      this.lista.push(carroNovo);
    }
    
    if(objectEditado)
    {
      let indice = this.lista.findIndex((item) => item.id_tipoconta == objectEditado.id_tipoconta);
      if (indice != -1)
      {
        this.lista[indice] = objectEditado;
      }
      else
      {
        this.lista.push(objectEditado);
      }
    }
    
  }

  router = inject(Router);


  novo()
  {
    this.router.navigate(['admin/tipoconta/new']);

  }
  editar(object: Tipoconta)
  {
    
    this.router.navigate(['admin/tipoconta/edit', object.id_tipoconta]);
  }

  remover(object: any){
      let indice = this.lista.findIndex((item) => item.id_tipoconta == object.id_tipoconta);
      if (indice != -1)
      {
        this.lista.splice(indice, 1);
      }
  }
}
