import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rotation',
  templateUrl: './rotation.component.html',
  styleUrls: ['./rotation.component.scss']
})
export class RotationComponent implements OnInit {

  textValue: string;
  coding_result: string;
  stairsValue: number = 2;
  constructor() { }

  ngOnInit(): void {

  }

  codeAlgorizm() {
    if (this.textValue) {
      let arr: Array<string[]> = [];
      for (let index = 0; index < (this.stairsValue || 2); index++) {
        arr.push(this.textValue.split(' ').join('').split('').filter((res, j) => (j % this.stairsValue) == index));
      }
      this.coding_result = arr.map(res => res.join('')).join('');
    }
    else alert('Please write correct text into textarea')
  }

}
