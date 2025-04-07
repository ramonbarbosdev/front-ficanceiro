import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-date',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
  <div class="form-group">
    <label [for]="inputId">{{ label }}</label>
    <input
      class="form-control"
      type="date"
      [id]="inputId"
      [name]="inputId"
      [value]="model ?? null"
      (input)="onInputChange($event)"
      [placeholder]="placeholder"
      [required]="required"
    />
  </div>
`
})
export class InputDateComponent {
  @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();

  @Input() label!: string;
  @Input() inputId!: string;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;

  onInputChange(event: Event)
  {
    const value = (event.target as HTMLInputElement).value;
    this.modelChange.emit(value);
  }
}
