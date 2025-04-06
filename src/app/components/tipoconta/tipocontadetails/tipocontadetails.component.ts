import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tipoconta } from '../../../models/tipoconta';
import Swal from 'sweetalert2'
import { TipocontaService } from '../../../services/tipoconta.service';
import { SelectComponent } from "../../component/select/select.component";
import { InputTextComponent } from '../../component/input-text/input-text.component';
import { BaseFormComponent } from '../../baseform/baseform.component';

@Component({
  selector: 'app-tipocontadetails',
  standalone: true,
  imports: [FormsModule, InputTextComponent],
  templateUrl: './tipocontadetails.component.html',
  styleUrls: ['./tipocontadetails.component.scss']
})
export class TipocontadetailsComponent  extends BaseFormComponent<Tipoconta> {
  service = inject(TipocontaService);
  redirectRoute = '/admin/tipoconta';
  primaryKey: keyof Tipoconta = 'id_tipoconta';
}
