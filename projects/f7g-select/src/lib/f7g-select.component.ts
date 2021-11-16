import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'f7g-select',
  templateUrl: './f7g-select.component.html',
  styleUrls: ['./f7g-select.component.css'],
})
export class F7gSelectComponent implements OnInit {
  @Input() data: any = [];
  @Input() multiple: boolean = false;
  @Input() searcheable: boolean = false;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() selectedOption: string = '';

  @Output() output = new EventEmitter<any>();

  selectedData: any;
  constructor() {}

  ngOnInit(): void {
    this.selectedData = this.data.sort(
      (a: any, b: any) => (a.name > b.name && 1) || -1
    );
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
