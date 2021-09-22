import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-algorizm',
  templateUrl: './algorizm.component.html',
  styleUrls: ['./algorizm.component.scss']
})
export class AlgorizmComponent implements OnInit {
  // alphabetUpper: Array<string> = [
  //   ' ',
  //   'А', 'Б', 'В',
  //   'Г', 'Ґ', 'Д',
  //   'Е', 'Є', 'Ж',
  //   'З', 'И', 'І',
  //   'Ї', 'Й', 'К',
  //   'Л', 'М', 'Н',
  //   'О', 'П', 'Р',
  //   'С', 'Т', 'У',
  //   'Ф', 'Х', 'Ц',
  //   'Ч', 'Ш', 'Щ',
  //   'Ь', 'Ю', 'Я'
  // ]
  alphabetLover: Array<string> = ['а', 'б', 'в', 'г', 'ґ', 'д', 'е', 'є', 'ж', 'з', 'и', 'і', 'ї', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ю', 'я']
  abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  textValue: string;
  coding_result: string;
  variantValue: number = 13;
  constructor() { }

  ngOnInit(): void {

  }

  codeAlgorizm() {
    // if (this.textValue && this.textValue.split("").some(res => (this.alphabetLover.includes(res) || this.alphabetUpper.includes(res))) && this.textValue.split("").some(res => !this.isCharacterALetter(res))) {
    //   console.log(this.textValue.split("").some(res => this.isCharacterALetter(res)));

    //   this.coding_result = this.textValue.split("").map(res => this.alphabetLover.includes(res) ? this.alphabetLover[(this.alphabetLover.indexOf(res) + (this.variantValue || 13)) % this.alphabetLover.length - 1] : this.alphabetUpper[(this.alphabetUpper.indexOf(res) + (this.variantValue || 13)) % this.alphabetUpper.length - 1]).join("")
    // } else if (!this.textValue) {
    //   alert('Please write text into textarea')
    // } else if(this.textValue.split("").some(res => this.abc.includes(res.toLowerCase()))) {

    //   this.coding_result = this.textValue.split("").map(res => this.abc.includes(res) ? this.abc[(this.abc.indexOf(res) + (this.variantValue || 13)) % this.abc.length - 1] : res).join("")
    // } 
    // else alert('Please write correct text into textarea')
    if (this.textValue && this.textValue.toLowerCase().split("").some(res => (this.alphabetLover.includes(res))) && this.textValue.split("").some(res => !this.isCharacterALetter(res))) {
      this.coding_result = this.textValue.toLowerCase().split("").map(res => this.alphabetLover.includes(res) ? this.alphabetLover[(this.alphabetLover.indexOf(res) + (+this.variantValue)) % this.alphabetLover.length] : res).join("")
    } else if (!this.textValue) {
      alert('Please write text into textarea')
    } else if (this.textValue.split("").some(res => this.abc.includes(res.toLowerCase()))) {

      this.coding_result = this.textValue.split("").map(res => this.abc.includes(res) ? this.abc[(this.abc.indexOf(res) + (+this.variantValue || 13)) % this.abc.length] : res).join("")
    }
    else alert('Please write correct text into textarea')
  }

  decodeAlgorizm() {
    if (this.coding_result && this.coding_result.toLowerCase().split("").some(res => (this.alphabetLover.includes(res))) && this.textValue.split("").some(res => !this.isCharacterALetter(res))) {
      let code: string = this.coding_result;
      this.coding_result = this.coding_result.toLowerCase().split("").map(res => {
        if (this.alphabetLover.includes(res)) {
          let shift: number = (this.alphabetLover.indexOf(res) - (+this.variantValue));
          if (shift < 0) shift = shift + this.alphabetLover.length;
          return this.alphabetLover[shift]
        }
        else { return res }
      }).join("")
      this.coding_result += `\n${code}`;
    } else if (!this.textValue) {
      alert('Please write text into textarea')
    } else if (this.textValue.split("").some(res => this.abc.includes(res.toLowerCase()))) {
      let code: string = this.coding_result;
      this.coding_result = this.coding_result.toLowerCase().split("").map(res => {
        if (this.alphabetLover.includes(res)) {
          let shift: number = (this.abc.indexOf(res) - (+this.variantValue));
          if (shift < 0) shift = shift + this.abc.length;
          return this.abc[shift]
        }
        else { return res }
      }).join("")
      this.coding_result += `\n\n\n\n\n\n\n\n${code}`;
    }
    else alert('Please write correct text into textarea')
  }

  isCharacterALetter(char) {
    return (/[a-zA-Z]/gm).test(char) && char == ' '
  }

}
