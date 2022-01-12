import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'f7g-select',
  templateUrl: './f7g-select.component.html',
  styleUrls: ['./f7g-select.component.css'],
})
export class F7gSelectComponent implements OnInit, OnChanges {
  @Input() data: any = [];
  @Input() multiple: boolean = false;
  @Input() searcheable: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() selectedOption: string = '';
  @Input() required: boolean = false;

  @Output() output = new EventEmitter<any>();

  select = this.required
    ? new FormControl(null, [Validators.required])
    : new FormControl(null);

  selectedData: any;
  constructor() {}

  ngOnInit(): void {
    this.selectedData = this.data.sort(
      (a: any, b: any) => (a.name > b.name && 1) || -1
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data.firstChange === false) {
      this.selectedData = changes.data.currentValue.sort(
        (a: any, b: any) => (a.name > b.name && 1) || -1
      );
    }
  }

  onKey(event: any) {
    this.selectedData = this.search(event.value);
  }

  search(value: string) {
    let filter = value.toLowerCase();
    return this.data.filter((option: any) =>
      option.name.toLowerCase().includes(filter)
    );
  }

  emitValue(event: any) {
    if (typeof event.value === 'string') {
      this.output.emit([event.value]);
    } else {
      this.output.emit(event.value);
    }
  }
}
