import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-number',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-number.component.html',
  styleUrl: './input-number.component.scss'
})
export class InputNumberComponent {
 @Input() model: any;
  @Output() modelChange = new EventEmitter<any>();

  @Input() label!: string;
  @Input() inputId!: string;
  @Input() placeholder: string = '';
  @Input() required: boolean = false;

  format(value: any): string {
    if (value == null || value === '') return '';
    return parseFloat(value).toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  parse(value: string): number {
    if (!value) return 0;
    const parsed = value.replace(/\./g, '').replace(',', '.');
    return parseFloat(parsed);
  }

  onInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    const parsedValue = this.parse(value);
    this.modelChange.emit(parsedValue);
    this.model = parsedValue;
  }

  onBlur(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = this.format(this.model);
  }
}
