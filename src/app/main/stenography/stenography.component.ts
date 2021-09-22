import { Component, OnInit } from '@angular/core';
// import * from "../../../assets/stenography"
declare const steg: any

@Component({
  selector: 'app-stenography',
  templateUrl: './stenography.component.html',
  styleUrls: ['./stenography.component.scss']
})
export class StenographyComponent implements OnInit {
  encodeImg: string = "";
  encodeText: string = "";
  decodeText: string = "";
  encodeResult: string;
  constructor() { }

  ngOnInit(): void {
    console.log(steg);

  }

  readURL(input) {
    console.log(input.files["0"]);

    let reader = new FileReader();
    reader.onload = (e) => {
      // console.log(myReader.result);
      this.encodeImg = e.target.result as string;
    };
    reader.readAsDataURL(input.files["0"]);
  }

  hideText() {
    console.log('dfadsf');
    this.encodeResult = steg.encode(this.encodeText, this.encodeImg);
  }

  decode() {
    // var reader = new FileReader();
    // reader.onload = (e) => {
    // console.log(e.target.result);
    this.decodeText += steg.decode(this.encodeResult);
    // }
    // reader.readAsDataURL(input.files["0"]);

  }
}
