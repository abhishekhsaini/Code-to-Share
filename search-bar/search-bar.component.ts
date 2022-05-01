import { Component, OnInit } from '@angular/core';

import * as JSZip from 'jszip';
import * as JSZipUtils from '../assets/script/jszip-utils.js';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public urls = [
    'https://i.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
  ]
  
  downloadAsZip(): void {
    let count = 0;
    const zip = new JSZip();
    
    this.urls.forEach((url) => {
      const filename = url.split('/')[url.split('/').length - 1].split('?')[0];
      
      
      JSZipUtils.getBinaryContent(url, (err: any, data: any) => {
        if (err) {
          throw err;
        }
        
        zip.file(filename, data, { binary: true });
        count++;
        
        if (count === this.urls.length) {
          zip.generateAsync({ type: 'blob' }).then((content) => {
            const objectUrl: string = URL.createObjectURL(content);
            const link: any = document.createElement('a');
            
            link.download = 'sample-pdf-files.zip';
            link.href = objectUrl;
            link.click();
          });
        }
      });
    });
  }
  constructor() { }
  
  ngOnInit(): void {
  }
  
}
