import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-hill-code',
    templateUrl: './hill-code.component.html',
    styleUrls: ['./hill-code.component.scss']
})
export class HillCodeComponent implements OnInit {
    textBox1: string = '';
    textBox2: string = '';
    textBox3: string = '';
    textBox4: string = '';
    textBox5: string = '';
    textBox6: string = '';
    textBox7: string = '';
    textBox8: string = '';
    textBox9: string = '';
    constructor() { }

    ngOnInit(): void {

    }

    readFileForEncode(input): any {

        let file = input.files[0];
        let reader = new FileReader();
        reader.readAsText(file);

        reader.onload = () => {
            if (reader.result) {
                this.button1_Click(reader.result);
            };
            reader.onerror = function () {
                alert(reader.error);
            };
        }
    }


    private button1_Click(input) {
        let ks = [

            [this.textBox1, this.textBox2, this.textBox3],
            [this.textBox4, this.textBox5, this.textBox6],
            [this.textBox7, this.textBox8, this.textBox9]
        ];
        let ki = [...Array(3)].map(e => Array(3));

        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (ks[i][j] == 'a') ki[i][j] = 0;
                if (ks[i][j] == 'b') ki[i][j] = 1;
                if (ks[i][j] == 'c') ki[i][j] = 2;
                if (ks[i][j] == 'd') ki[i][j] = 3;
                if (ks[i][j] == 'e') ki[i][j] = 4;
                if (ks[i][j] == 'f') ki[i][j] = 5;
                if (ks[i][j] == 'g') ki[i][j] = 6;
                if (ks[i][j] == 'h') ki[i][j] = 7;
                if (ks[i][j] == 'i') ki[i][j] = 8;
                if (ks[i][j] == 'j') ki[i][j] = 9;
                if (ks[i][j] == 'k') ki[i][j] = 10;
                if (ks[i][j] == 'l') ki[i][j] = 11;
                if (ks[i][j] == 'm') ki[i][j] = 12;
                if (ks[i][j] == 'n') ki[i][j] = 13;
                if (ks[i][j] == 'o') ki[i][j] = 14;
                if (ks[i][j] == 'p') ki[i][j] = 15;
                if (ks[i][j] == 'q') ki[i][j] = 16;
                if (ks[i][j] == 'r') ki[i][j] = 17;
                if (ks[i][j] == 's') ki[i][j] = 18;
                if (ks[i][j] == 't') ki[i][j] = 19;
                if (ks[i][j] == 'u') ki[i][j] = 20;
                if (ks[i][j] == 'v') ki[i][j] = 21;
                if (ks[i][j] == 'w') ki[i][j] = 22;
                if (ks[i][j] == 'x') ki[i][j] = 23;
                if (ks[i][j] == 'y') ki[i][j] = 24;
                if (ks[i][j] == 'z') ki[i][j] = 25;
            }
        }


        let inp = [];
        let sr: Array<string> = input.split('')
        let i = 0
        while (!(sr.length == i)) {
            // console.log(sr[i]);
            inp.push(sr[i]);
            i++
        }


        let h_m = 0;
        for (let i = 0; i < inp.length; i++) {
            if (this.isCharacterALetter(inp[i])) h_m++;
        }

        let kalk_a = 0, kalk_b = 0, kalk_c = 0, kalk_d = 0, kalk_e = 0, kalk_f = 0, kalk_g = 0, kalk_h = 0, kalk_i = 0, kalk_j = 0, kalk_k = 0, kalk_l = 0, kalk_m = 0, kalk_n = 0, kalk_o = 0, kalk_p = 0;
        let kalk_q = 0, kalk_r = 0, kalk_s = 0, kalk_t = 0, kalk_u = 0, kalk_v = 0, kalk_w = 0, kalk_x = 0, kalk_y = 0, kalk_z = 0;
        for (let i = 0; i < inp.length; i++)
        {
            if (this.isCharacterALetter(inp[i]))
            {
                if (inp[i] == 'a') kalk_a++;
                if (inp[i] == 'b') kalk_b++;
                if (inp[i] == 'c') kalk_c++;
                if (inp[i] == 'd') kalk_d++;
                if (inp[i] == 'e') kalk_e++;
                if (inp[i] == 'f') kalk_f++;
                if (inp[i] == 'g') kalk_g++;
                if (inp[i] == 'h') kalk_h++;
                if (inp[i] == 'i') kalk_i++;
                if (inp[i] == 'j') kalk_j++;
                if (inp[i] == 'k') kalk_k++;
                if (inp[i] == 'l') kalk_l++;
                if (inp[i] == 'm') kalk_m++;
                if (inp[i] == 'n') kalk_n++;
                if (inp[i] == 'o') kalk_o++;
                if (inp[i] == 'p') kalk_p++;
                if (inp[i] == 'q') kalk_q++;
                if (inp[i] == 'r') kalk_r++;
                if (inp[i] == 's') kalk_s++;
                if (inp[i] == 't') kalk_t++;
                if (inp[i] == 'u') kalk_u++;
                if (inp[i] == 'v') kalk_v++;
                if (inp[i] == 'w') kalk_w++;
                if (inp[i] == 'x') kalk_x++;
                if (inp[i] == 'y') kalk_y++;
                if (inp[i] == 'z') kalk_z++;
            }
        }
        let p = 0;
        let vek = [...Array(h_m)].map(e => Array(3));
        for (let i = 0; i < inp.length; i++) {
            if (this.isCharacterALetter(inp[i])) {
                vek[p][0] = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
                vek[p][1] = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
                if (inp[i] == 'a') vek[p][2] = 0;
                if (inp[i] == 'b') vek[p][2] = 1;
                if (inp[i] == 'c') vek[p][2] = 2;
                if (inp[i] == 'd') vek[p][2] = 3;
                if (inp[i] == 'e') vek[p][2] = 4;
                if (inp[i] == 'f') vek[p][2] = 5;
                if (inp[i] == 'g') vek[p][2] = 6;
                if (inp[i] == 'h') vek[p][2] = 7;
                if (inp[i] == 'i') vek[p][2] = 8;
                if (inp[i] == 'j') vek[p][2] = 9;
                if (inp[i] == 'k') vek[p][2] = 10;
                if (inp[i] == 'l') vek[p][2] = 11;
                if (inp[i] == 'm') vek[p][2] = 12;
                if (inp[i] == 'n') vek[p][2] = 13;
                if (inp[i] == 'o') vek[p][2] = 14;
                if (inp[i] == 'p') vek[p][2] = 15;
                if (inp[i] == 'q') vek[p][2] = 16;
                if (inp[i] == 'r') vek[p][2] = 17;
                if (inp[i] == 's') vek[p][2] = 18;
                if (inp[i] == 't') vek[p][2] = 19;
                if (inp[i] == 'u') vek[p][2] = 20;
                if (inp[i] == 'v') vek[p][2] = 21;
                if (inp[i] == 'w') vek[p][2] = 22;
                if (inp[i] == 'x') vek[p][2] = 23;
                if (inp[i] == 'y') vek[p][2] = 24;
                if (inp[i] == 'z') vek[p][2] = 25;
                p++;
            }
        }
        let res = [...Array(h_m)].map(e => Array(3));
        for (let i = 0; i < h_m; i++) {
            res[i][0] = (vek[i][0] * ki[0][0] + vek[i][1] * ki[1][0] + vek[i][2] * ki[2][0]) % 26;
            res[i][1] = (vek[i][0] * ki[0][1] + vek[i][1] * ki[1][1] + vek[i][2] * ki[2][1]) % 26;
            res[i][2] = (vek[i][0] * ki[0][2] + vek[i][1] * ki[1][2] + vek[i][2] * ki[2][2]) % 26;
        }

        let ress = '';
        for (let i = 0; i < h_m; i++) {
            for (let j = 0; j < 3; j++) {
                if (res[i][j] == 0) ress += "a";
                if (res[i][j] == 1) ress += "b";
                if (res[i][j] == 2) ress += "c";
                if (res[i][j] == 3) ress += "d";
                if (res[i][j] == 4) ress += "e";
                if (res[i][j] == 5) ress += "f";
                if (res[i][j] == 6) ress += "g";
                if (res[i][j] == 7) ress += "h";
                if (res[i][j] == 8) ress += "i";
                if (res[i][j] == 9) ress += "j";
                if (res[i][j] == 10) ress += "k";
                if (res[i][j] == 11) ress += "l";
                if (res[i][j] == 12) ress += "m";
                if (res[i][j] == 13) ress += "n";
                if (res[i][j] == 14) ress += "o";
                if (res[i][j] == 15) ress += "p";
                if (res[i][j] == 16) ress += "q";
                if (res[i][j] == 17) ress += "r";
                if (res[i][j] == 18) ress += "s";
                if (res[i][j] == 19) ress += "t";
                if (res[i][j] == 20) ress += "u";
                if (res[i][j] == 21) ress += "v";
                if (res[i][j] == 22) ress += "w";
                if (res[i][j] == 23) ress += "x";
                if (res[i][j] == 24) ress += "y";
                if (res[i][j] == 25) ress += "z";
            }
        }
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(ress));
        element.setAttribute('download', 'outputEncode.txt');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }



    button4_Click() {
        let ks = [
            [this.textBox1, this.textBox2, this.textBox3],
            [this.textBox4, this.textBox5, this.textBox6],
            [this.textBox7, this.textBox8, this.textBox9]
        ];


        let ki = [...Array(3)].map(e => Array(3));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (ks[i][j] == 'a') ki[i][j] = 0;
                if (ks[i][j] == 'b') ki[i][j] = 1;
                if (ks[i][j] == 'c') ki[i][j] = 2;
                if (ks[i][j] == 'd') ki[i][j] = 3;
                if (ks[i][j] == 'e') ki[i][j] = 4;
                if (ks[i][j] == 'f') ki[i][j] = 5;
                if (ks[i][j] == 'g') ki[i][j] = 6;
                if (ks[i][j] == 'h') ki[i][j] = 7;
                if (ks[i][j] == 'i') ki[i][j] = 8;
                if (ks[i][j] == 'j') ki[i][j] = 9;
                if (ks[i][j] == 'k') ki[i][j] = 10;
                if (ks[i][j] == 'l') ki[i][j] = 11;
                if (ks[i][j] == 'm') ki[i][j] = 12;
                if (ks[i][j] == 'n') ki[i][j] = 13;
                if (ks[i][j] == 'o') ki[i][j] = 14;
                if (ks[i][j] == 'p') ki[i][j] = 15;
                if (ks[i][j] == 'q') ki[i][j] = 16;
                if (ks[i][j] == 'r') ki[i][j] = 17;
                if (ks[i][j] == 's') ki[i][j] = 18;
                if (ks[i][j] == 't') ki[i][j] = 19;
                if (ks[i][j] == 'u') ki[i][j] = 20;
                if (ks[i][j] == 'v') ki[i][j] = 21;
                if (ks[i][j] == 'w') ki[i][j] = 22;
                if (ks[i][j] == 'x') ki[i][j] = 23;
                if (ks[i][j] == 'y') ki[i][j] = 24;
                if (ks[i][j] == 'z') ki[i][j] = 25;
            }
        }

        let kio = [...Array(3)].map(e => Array(3));
        let det = 0;
        det = (ki[0][0] * ki[1][1] * ki[2][2] + ki[0][1] * ki[1][2] * ki[2][0] + ki[0][2] * ki[1][0] * ki[2][1] - ki[0][2] * ki[1][1] * ki[2][0] - ki[0][1] * ki[1][0] * ki[2][2] - ki[0][0] * ki[1][2] * ki[2][1]) % 26;
        if (det < 0) det = det + 26;

        kio[0][0] = ki[1][1] * ki[2][2] - ki[1][2] * ki[2][1]; kio[1][0] = -(ki[1][0] * ki[2][2] - ki[1][2] * ki[2][0]); kio[2][0] = ki[1][0] * ki[2][1] - ki[1][1] * ki[2][0];
        kio[0][1] = -(ki[0][1] * ki[2][2] - ki[0][2] * ki[2][1]); kio[1][1] = ki[0][0] * ki[2][2] - ki[0][2] * ki[2][0]; kio[2][1] = -(ki[0][0] * ki[2][1] - ki[0][1] * ki[2][0]);
        kio[0][2] = ki[0][1] * ki[1][2] - ki[0][2] * ki[1][1]; kio[1][2] = -(ki[0][0] * ki[1][2] - ki[0][2] * ki[1][0]); kio[2][2] = ki[0][0] * ki[1][1] - ki[0][1] * ki[1][0];

        let deto = 0;
        for (deto = 0; deto < 100; deto++) {
            if (((det * deto) % 26) == 1) break;
        }

        let res = [...Array(3)].map(e => Array(3));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                kio[i][j] = kio[i][j] % 26;
                kio[i][j] = (kio[i][j] * deto) % 26;
                if (kio[i][j] < 0) kio[i][j] = kio[i][j] + 26;

                if (kio[i][j] == 0) res[i][j] = 'a';
                if (kio[i][j] == 1) res[i][j] = 'b';
                if (kio[i][j] == 2) res[i][j] = 'c';
                if (kio[i][j] == 3) res[i][j] = 'd';
                if (kio[i][j] == 4) res[i][j] = 'e';
                if (kio[i][j] == 5) res[i][j] = 'f';
                if (kio[i][j] == 6) res[i][j] = 'g';
                if (kio[i][j] == 7) res[i][j] = 'h';
                if (kio[i][j] == 8) res[i][j] = 'i';
                if (kio[i][j] == 9) res[i][j] = 'j';
                if (kio[i][j] == 10) res[i][j] = 'k';
                if (kio[i][j] == 11) res[i][j] = 'l';
                if (kio[i][j] == 12) res[i][j] = 'm';
                if (kio[i][j] == 13) res[i][j] = 'n';
                if (kio[i][j] == 14) res[i][j] = 'o';
                if (kio[i][j] == 15) res[i][j] = 'p';
                if (kio[i][j] == 16) res[i][j] = 'q';
                if (kio[i][j] == 17) res[i][j] = 'r';
                if (kio[i][j] == 18) res[i][j] = 's';
                if (kio[i][j] == 19) res[i][j] = 't';
                if (kio[i][j] == 20) res[i][j] = 'u';
                if (kio[i][j] == 21) res[i][j] = 'v';
                if (kio[i][j] == 22) res[i][j] = 'w';
                if (kio[i][j] == 23) res[i][j] = 'x';
                if (kio[i][j] == 24) res[i][j] = 'y';
                if (kio[i][j] == 25) res[i][j] = 'z';
            }
        }

        this.textBox1 = ""; this.textBox2 = ""; this.textBox3 = "";
        this.textBox4 = ""; this.textBox5 = ""; this.textBox6 = "";
        this.textBox7 = ""; this.textBox8 = ""; this.textBox9 = "";

        this.textBox1 = res[0][0]; this.textBox2 = res[0][1]; this.textBox3 = res[0][2];
        this.textBox4 = res[1][0]; this.textBox5 = res[1][1]; this.textBox6 = res[1][2];
        this.textBox7 = res[2][0]; this.textBox8 = res[2][1]; this.textBox9 = res[2][2];

    }

    readFileForDecode(input): any {

        let file = input.files[0];
        let reader = new FileReader();
        reader.readAsText(file);

        reader.onload = () => {
            if (reader.result) {
                this.button2_Click(reader.result);
            };
            reader.onerror = function () {
                alert(reader.error);
            };
        }
    }

    private button2_Click(input) {
        let ks = [

            [this.textBox1, this.textBox2, this.textBox3],
            [this.textBox4, this.textBox5, this.textBox6],
            [this.textBox7, this.textBox8, this.textBox9]
        ];

        let ki = [...Array(3)].map(e => Array(3));
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (ks[i][j] == 'a') ki[i][j] = 0;
                if (ks[i][j] == 'b') ki[i][j] = 1;
                if (ks[i][j] == 'c') ki[i][j] = 2;
                if (ks[i][j] == 'd') ki[i][j] = 3;
                if (ks[i][j] == 'e') ki[i][j] = 4;
                if (ks[i][j] == 'f') ki[i][j] = 5;
                if (ks[i][j] == 'g') ki[i][j] = 6;
                if (ks[i][j] == 'h') ki[i][j] = 7;
                if (ks[i][j] == 'i') ki[i][j] = 8;
                if (ks[i][j] == 'j') ki[i][j] = 9;
                if (ks[i][j] == 'k') ki[i][j] = 10;
                if (ks[i][j] == 'l') ki[i][j] = 11;
                if (ks[i][j] == 'm') ki[i][j] = 12;
                if (ks[i][j] == 'n') ki[i][j] = 13;
                if (ks[i][j] == 'o') ki[i][j] = 14;
                if (ks[i][j] == 'p') ki[i][j] = 15;
                if (ks[i][j] == 'q') ki[i][j] = 16;
                if (ks[i][j] == 'r') ki[i][j] = 17;
                if (ks[i][j] == 's') ki[i][j] = 18;
                if (ks[i][j] == 't') ki[i][j] = 19;
                if (ks[i][j] == 'u') ki[i][j] = 20;
                if (ks[i][j] == 'v') ki[i][j] = 21;
                if (ks[i][j] == 'w') ki[i][j] = 22;
                if (ks[i][j] == 'x') ki[i][j] = 23;
                if (ks[i][j] == 'y') ki[i][j] = 24;
                if (ks[i][j] == 'z') ki[i][j] = 25;
            }
        }

        let inp = [];
        let sr: Array<string> = input.split('')
        let i = 0
        while (!(sr.length == i)) {
            inp.push(sr[i]);
            i++
        }

        let h_m = 0;
        for (let i = 0; i < inp.length; i++) {
            if (this.isCharacterALetter(inp[i])) h_m++;
        }

        let p = 0;
        let prom = [...Array(h_m / 3)].map(e => Array(3));
        for (let i = 0; i < h_m; i++) {
            if ((i % 3) == 0 && i != 0) p++;

            if (inp[i] == 'a') prom[p][i % 3] = 0;
            if (inp[i] == 'b') prom[p][i % 3] = 1;
            if (inp[i] == 'c') prom[p][i % 3] = 2;
            if (inp[i] == 'd') prom[p][i % 3] = 3;
            if (inp[i] == 'e') prom[p][i % 3] = 4;
            if (inp[i] == 'f') prom[p][i % 3] = 5;
            if (inp[i] == 'g') prom[p][i % 3] = 6;
            if (inp[i] == 'h') prom[p][i % 3] = 7;
            if (inp[i] == 'i') prom[p][i % 3] = 8;
            if (inp[i] == 'j') prom[p][i % 3] = 9;
            if (inp[i] == 'k') prom[p][i % 3] = 10;
            if (inp[i] == 'l') prom[p][i % 3] = 11;
            if (inp[i] == 'm') prom[p][i % 3] = 12;
            if (inp[i] == 'n') prom[p][i % 3] = 13;
            if (inp[i] == 'o') prom[p][i % 3] = 14;
            if (inp[i] == 'p') prom[p][i % 3] = 15;
            if (inp[i] == 'q') prom[p][i % 3] = 16;
            if (inp[i] == 'r') prom[p][i % 3] = 17;
            if (inp[i] == 's') prom[p][i % 3] = 18;
            if (inp[i] == 't') prom[p][i % 3] = 19;
            if (inp[i] == 'u') prom[p][i % 3] = 20;
            if (inp[i] == 'v') prom[p][i % 3] = 21;
            if (inp[i] == 'w') prom[p][i % 3] = 22;
            if (inp[i] == 'x') prom[p][i % 3] = 23;
            if (inp[i] == 'y') prom[p][i % 3] = 24;
            if (inp[i] == 'z') prom[p][i % 3] = 25;
        }

        let prom_res_i = [...Array(h_m / 3)].map(e => Array(3));
        for (let i = 0; i < h_m / 3; i++) {
            prom_res_i[i][0] = (prom[i][0] * ki[0][0] + prom[i][1] * ki[1][0] + prom[i][2] * ki[2][0]) % 26;
            prom_res_i[i][1] = (prom[i][0] * ki[0][1] + prom[i][1] * ki[1][1] + prom[i][2] * ki[2][1]) % 26;
            prom_res_i[i][2] = (prom[i][0] * ki[0][2] + prom[i][1] * ki[1][2] + prom[i][2] * ki[2][2]) % 26;
        }

        let ress = '';
        for (let i = 0; i < (h_m / 3); i++) {
            for (let j = 0; j < 3; j++) {
                if (j == 2) {
                    if (prom_res_i[i][j] == 0) ress += "a";
                    if (prom_res_i[i][j] == 1) ress += "b";
                    if (prom_res_i[i][j] == 2) ress += "c";
                    if (prom_res_i[i][j] == 3) ress += "d";
                    if (prom_res_i[i][j] == 4) ress += "e";
                    if (prom_res_i[i][j] == 5) ress += "f";
                    if (prom_res_i[i][j] == 6) ress += "g";
                    if (prom_res_i[i][j] == 7) ress += "h";
                    if (prom_res_i[i][j] == 8) ress += "i";
                    if (prom_res_i[i][j] == 9) ress += "j";
                    if (prom_res_i[i][j] == 10) ress += "k";
                    if (prom_res_i[i][j] == 11) ress += "l";
                    if (prom_res_i[i][j] == 12) ress += "m";
                    if (prom_res_i[i][j] == 13) ress += "n";
                    if (prom_res_i[i][j] == 14) ress += "o";
                    if (prom_res_i[i][j] == 15) ress += "p";
                    if (prom_res_i[i][j] == 16) ress += "q";
                    if (prom_res_i[i][j] == 17) ress += "r";
                    if (prom_res_i[i][j] == 18) ress += "s";
                    if (prom_res_i[i][j] == 19) ress += "t";
                    if (prom_res_i[i][j] == 20) ress += "u";
                    if (prom_res_i[i][j] == 21) ress += "v";
                    if (prom_res_i[i][j] == 22) ress += "w";
                    if (prom_res_i[i][j] == 23) ress += "x";
                    if (prom_res_i[i][j] == 24) ress += "y";
                    if (prom_res_i[i][j] == 25) ress += "z";
                }
            }
        }
        console.log(ress);
        

        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(ress));
        element.setAttribute('download', 'outputDecode.txt');

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);

    }

    isCharacterALetter(char) {
        return (/[a-zA-Z]/).test(char);
    }

}
