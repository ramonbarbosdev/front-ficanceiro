import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipoconta } from '../../../models/tipoconta';

@Component({
  selector: 'app-tipocontadetails',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tipocontadetails.component.html',
  styleUrls: ['./tipocontadetails.component.scss']
})
export class TipocontadetailsComponent implements OnInit {

  cd_tipoconta!: string;
  nm_tipoconta!: string;

  route = inject(ActivatedRoute);
  router = inject(Router);

  object: Tipoconta = new Tipoconta();

  ngOnInit()
  {
    const params = this.route.snapshot.params;
    this.obterObjetoId(params);

    this.object = { id_tipoconta: 1, cd_tipoconta: '001', nm_tipoconta: 'Conta Corrente Editada' };
  }

  obterObjetoId(params: any)
  {
    const key = params['id'];
    console.log("obterObjetoId:", key);
  }

  onEdit(params: any)
  {
    this.cd_tipoconta = params.cd_tipoconta;
    this.nm_tipoconta = params.nm_tipoconta;
  }

  onSave()
  {
    if (this.object.id_tipoconta > 0)
    {
      alert("Editado com sucesso!");
      this.router.navigate(['/admin/tipoconta'],
      {
        state: { objectEditado: this.object }
      });
    }
    else
    {
      alert("Salvo com sucesso!");
      this.router.navigate(['/admin/tipoconta'],
      {
        state: { objectNovo: this.object }
      });
    }
  }
}
