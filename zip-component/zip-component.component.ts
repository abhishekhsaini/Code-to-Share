import { Component, OnInit } from '@angular/core';

import * as AdmZip from 'adm-zip';

@Component({
  selector: 'app-zip-component',
  templateUrl: './zip-component.component.html',
  styleUrls: ['./zip-component.component.scss']
})
export class ZipComponentComponent implements OnInit {
  
  public urls = [
    'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
  ]
  
  downloadAsZip(): void {
    let count =0;
    const zip = new AdmZip();
    
    this.urls.forEach((url) => {
      const filename = url.split('/')[url.split('/').length - 1].split('?')[0];

      // var content = fs.readFile(url,(err, data) => {
      //   if(err){
      //     throw err;
      //   }
      // })
      // content = fs.readFile(url);
      zip.addFile(filename, Buffer.from(url, "utf-8"));

    });
    zip.writeZip("test.zip");
    console.log('created successfully');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
