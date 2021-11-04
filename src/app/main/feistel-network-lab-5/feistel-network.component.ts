import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feistel-network',
  templateUrl: './feistel-network.component.html',
  styleUrls: ['./feistel-network.component.scss']
})
export class FeistelNetworkComponent implements OnInit {
  sizeOfBlock = 128; //в DES розмір блока 64 біт, але оскільки в unicode символ в два раза довший, то збільшимо блок також в два раза
  sizeOfChar = 16; //розмір одного символа (in Unicode 16 bit)
  shiftKey = 2; //зсув ключа 
  quantityOfRounds = 16; //кількість раундів
  Blocks: Array<string> = [];
  EncodeKeyWord: string = '0ljh';
  DecodeKeyWord: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  StringToRightLength(input: string): string {
    while (((input.length * this.sizeOfChar) % this.sizeOfBlock) != 0){
      input += "#";
    }
    return input;
  }

  CutStringIntoBlocks(input: string) {
    this.Blocks = new Array((input.length * this.sizeOfChar) / this.sizeOfBlock); //new string[] ==> new Array(length)

    let lengthOfBlock = input.length / this.Blocks.length;

    for (let i = 0; i < this.Blocks.length; i++) {
      this.Blocks[i] = input.substr(i * lengthOfBlock, lengthOfBlock);
      this.Blocks[i] = this.StringToBinaryFormat(this.Blocks[i]);
    }
  }

  CutBinaryStringIntoBlocks(input: string) {
    this.Blocks = new Array(input.length / this.sizeOfBlock);

    let lengthOfBlock = input.length / this.Blocks.length;

    for (let i = 0; i < this.Blocks.length; i++){
      this.Blocks[i] = input.substr(i * lengthOfBlock, lengthOfBlock);
    }
  }

  StringToBinaryFormat(input: string): string {
    let output: string = "";

    for (let i = 0; i < input.length; i++) {
      let char_binary: string = input[i].charCodeAt(0).toString(2) // Convert.ToStrin ==> charCodeAt(0).toString(2)

      while (char_binary.length < this.sizeOfChar){
        char_binary = "0" + char_binary;
      }
      output += char_binary;
    }

    return output;
  }

  CorrectKeyWord(input: string, lengthKey: number): string {
    if (input.length > lengthKey) {
      input = input.substr(0, lengthKey);
    }
    else {
      while (input.length < lengthKey) {
        input = "0" + input;
      }
    }
    return input;
  }

  EncodeDES_One_Round(input: string, key: string): string {
    let L: string = input.substr(0, input.length / 2);
    let R: string = input.substr(input.length / 2, input.length / 2);

    return (R + this.XOR(L, this.f(R, key)));
  }

  XOR(s1: string, s2: string): string {
    let result: string = "";

    for (let i = 0; i < s1.length; i++) {
      let a = Boolean(parseInt(s1[i].toString(), 32));
      let b = Boolean(parseInt(s2[i].toString(), 32));

      if ((a && !b) || (!a && b))
        result += "1";
      else
        result += "0";
    }
    return result;
  }

  f(s1: string, s2: string): string {
    return this.XOR(s1, s2);
  }

  KeyToNextRound(key: string): string {
    for (let i = 0; i < this.shiftKey; i++) {
      key = key[key.length - 1] + key;
      key = this.remove(key, key.length - 1);
    }

    return key;
  }

  KeyToPrevRound(key: string): string {
    for (let i = 0; i < this.shiftKey; i++) {
      key = key + key[0];
      key = this.remove(key, 0, 1);
    }

    return key;
  }

  StringFromBinaryToNormalFormat(input: string): string {
    let output: string = "";

    while (input.length > 0) {
      let char_binary: string = input.substr(0, this.sizeOfChar);
      input = this.remove(input, 0, this.sizeOfChar);

      let a = 0;
      let degree = char_binary.length - 1;

      char_binary.split('').forEach(c => {
        a += parseInt(c.toString(), 32) * +Math.pow(2, degree--);
      })

      output += String.fromCharCode(a);

    }
    return output;
  }



  DecodeDES_One_Round(input: string, key: string): string {
    let L: string = input.substr(0, input.length / 2);
    let R: string = input.substr(input.length / 2, input.length / 2);

    return (this.XOR(this.f(L, key), R) + L);
  }

  encode(input) {
    if (this.EncodeKeyWord.length > 0) {
      let s: string = "";

      let key = this.EncodeKeyWord;

      let sr: Array<string> = input.split('\n')
      let i = 0
      while (!(sr.length == i)) {
        s += sr[i];
        i++
      }

      s = this.StringToRightLength(s);

      this.CutStringIntoBlocks(s);

      key = this.CorrectKeyWord(key, s.length / (2 * this.Blocks.length));

      key = this.StringToBinaryFormat(key);

      for (let j = 0; j < this.quantityOfRounds; j++) {
        for (let i = 0; i < this.Blocks.length; i++) {
          this.Blocks[i] = this.EncodeDES_One_Round(this.Blocks[i], key);
        }
        key = this.KeyToNextRound(key);
      }

      key = this.KeyToPrevRound(key);

      this.DecodeKeyWord = this.StringFromBinaryToNormalFormat(key);

      let result = "";

      for (let i = 0; i < this.Blocks.length; i++) {
        result += this.Blocks[i];
      }
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.StringFromBinaryToNormalFormat(result)));
      element.setAttribute('download', 'outputEncode.txt');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);

    }
    else {
      alert("Введіть ключ!");
    }

  }
  decode(input) {
    if (this.DecodeKeyWord.length > 0) {
      let s: string = "";

      let key: string = this.StringToBinaryFormat(this.DecodeKeyWord);

      let sr: Array<string> = input.split('\n')
      let i = 0
      while (!(sr.length == i)) {
        s += sr[i];
        i++
      }

      s = this.StringToBinaryFormat(s);

      this.CutBinaryStringIntoBlocks(s);

      for (let j = 0; j < this.quantityOfRounds; j++) {
        for (let i = 0; i < this.Blocks.length; i++)
          this.Blocks[i] = this.DecodeDES_One_Round(this.Blocks[i], key);

        key = this.KeyToPrevRound(key);
      }

      key = this.KeyToNextRound(key);

      this.EncodeKeyWord = this.StringFromBinaryToNormalFormat(key);
      // this.DecodeKeyWord = this.StringFromBinaryToNormalFormat(key);

      let result: string = "";

      for (let i = 0; i < this.Blocks.length; i++) {
        result += this.Blocks[i];
      }
      var element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(this.StringFromBinaryToNormalFormat(result)));
      element.setAttribute('download', 'outputDecode.txt');

      element.style.display = 'none';
      document.body.appendChild(element);

      element.click();

      document.body.removeChild(element);

    }
    else {
      alert("Введіть ключ!");
    }
  }

  readFileForEncode(input): any {

    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => {
      if (reader.result) {
        this.encode(reader.result);
      };
      reader.onerror = function () {
        alert(reader.error);
      };
    }
  }

  readFileForDecode(input): any {

    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsText(file);

    reader.onload = () => {
      if (reader.result) {
        this.decode(reader.result);
      };
      reader.onerror = function () {
        alert(reader.error);
      };
    }
  }

  remove(string: string, indexStart: number, indexEnd?: number): string {
    let s
    if (indexEnd) {
      if (indexEnd == indexStart) {
        s = string.slice(indexStart);
        s = string.replace(s, '');
      } else {
        s = string.slice(indexStart, indexEnd);
        s = string.replace(s, '');
      }

    } else {
      s = string.slice(indexStart);
      s = string.split('').splice(0, indexStart).join('');
    }
    return s

  }

}
