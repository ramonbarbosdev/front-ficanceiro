import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="form-group">
      <label [for]="inputId">{{ label }}</label>
      <select
        class="form-control"
        [id]="inputId"
        [name]="inputId"
        [value]="model"
        (change)="onChange($event)"
        [required]="required"
      >
        <option value="" disabled selected>Selecione um tipo</option>
        <option *ngFor="let item of options" [value]="item[valueField]">
          {{ item[labelField] }}
        </option>
      </select>
    </div>
  `
})
export class SelectComponent {
  @Input() label!: string;
  @Input() inputId!: string;
  @Input() required: boolean = false;

  @Input() options: any[] = [];
  @Input() valueField: string = 'id';
  @Input() labelField: string = 'label';

  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();

  onChange(event: Event) {
    const value = (event.target as HTMLSelectElement).value;
    this.modelChange.emit(value);
  }
}
