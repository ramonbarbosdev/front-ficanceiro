import { Directive, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Directive() // Usamos @Directive aqui pois não é um componente visual
export abstract class BaseFormComponent<T> implements OnInit {
  protected route = inject(ActivatedRoute);
  protected router = inject(Router);

  object: T = {} as T;
  abstract service: { findById: Function, update: Function, save: Function };
  abstract redirectRoute: string;
  abstract primaryKey: keyof T;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) this.onEdit(id);

  }

  private onEdit(id: number): void {
    this.service.findById(id).subscribe({
      next: (data: T) => {
        this.object = data;
      },
      error: (error: { status: any; error: { message: any; }; }) => {
        Swal.fire({
          icon: 'error',
          title: `Erro ${error.status}`,
          text: error.error?.message || 'Erro ao buscar o objeto.',
          confirmButtonText: 'OK'
        });
      }
    });
  }

  onSave(): void {
    const isEdit = this.object[this.primaryKey] && Number(this.object[this.primaryKey]) > 0;

    const obs$ = isEdit
      ? this.service.update(this.object)
      : this.service.save(this.object);

    obs$.subscribe({
      next: () => {
        Swal.fire({
          title: isEdit ? 'Editado com sucesso!' : 'Cadastrado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          this.router.navigate([this.redirectRoute]);
        });
      },
      error: (error: { status: any; error: { message: any; }; }) => {
        Swal.fire({
          icon: 'error',
          title: `Erro ${error.status}`,
          text: error.error?.message || 'Erro ao salvar o objeto.',
          confirmButtonText: 'OK'
        });
      }
    });
  }
}
