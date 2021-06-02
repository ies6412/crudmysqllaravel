import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(img:string):string {
    console.log('imagen',img)
    if(!img){
      const url='../../../assets/sinimagen.jpg';
      return url;
  }
    
    return img;
   }
}
