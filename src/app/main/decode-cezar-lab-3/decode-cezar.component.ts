import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-decode-cezar',
  templateUrl: './decode-cezar.component.html',
  styleUrls: ['./decode-cezar.component.scss']
})
export class DecodeCezarComponent implements OnInit {
  alphabetEng: string = "abcdefghijklmnopqrstuvwxyz";
  alphabetUkr: string = "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя"
  textValue: string;
  coding_result: string;
  constructor() { }

  ngOnInit(): void {

  }

  decodeAlgorizm() {
    let text: string = this.textValue.toLowerCase();
    let maxRepeat: number = 0, maxRepeatValue = 0;
    let sum: string = '', sumbol = '';
    for (let j = 0; j < text.length; j++) {
      sumbol = text[j];
      for (let i = 0; i < text.length; i++) {
        if (this.isCharacterALetter(text[i]) && text[i] == sumbol)
          maxRepeatValue += 1;
      }
      if (maxRepeatValue > maxRepeat) {
        maxRepeat = maxRepeatValue;
        sum = text[j];

      }
      maxRepeatValue = 0;
    }

    let s1: number = 4, s2 = 0;
    if (this.alphabetEng.includes(sum)) {
      for (let i = 0; i < this.alphabetEng.length; i++) {
        if (this.alphabetEng[i] == sum) s2 = i;
      }
      let shift: number = (s1 - s2) % 26;
      if (shift < 0) shift = shift * (-1);

      let decodeLetterPos: number;
      let code: string = "";
      for (let i = 0; i < text.length; i++) {
        if (!this.isCharacterALetter(text[i])) {
          code += text[i];
          continue;
        }
        let pos;
        let letter = text[i];
        pos = this.alphabetEng.indexOf(letter);
        decodeLetterPos = pos - shift;
        if (decodeLetterPos < 0) decodeLetterPos = decodeLetterPos + this.alphabetEng.length;
        code += this.alphabetEng[decodeLetterPos];
      }
      this.coding_result = code;
      code = "";
    } else {
      for (let i = 0; i < this.alphabetUkr.length; i++) {
        if (this.alphabetUkr[i] == sum) s2 = i;
      }
      console.log(this.alphabetUkr.split("").length);

      let shift: number = (s1 - s2) % this.alphabetUkr.split("").length;
      if (shift < 0) shift = shift * (-1);

      let decodeLetterPos: number;
      let code: string = "";
      for (let i = 0; i < text.length; i++) {
        if (!this.isCharacterALetter(text[i])) {
          code += text[i];
          continue;
        }
        let pos;
        let letter = text[i];
        pos = this.alphabetUkr.indexOf(letter);
        decodeLetterPos = pos - shift;
        if (decodeLetterPos < 0) decodeLetterPos = decodeLetterPos + this.alphabetUkr.length;
        code += this.alphabetUkr[decodeLetterPos];
      }
      this.coding_result = code;
      code = "";
    }


  }
  isCharacterALetter(char) {
    return (/[a-zA-Z]/).test(char) || this.alphabetUkr.includes(char)
  }

}
