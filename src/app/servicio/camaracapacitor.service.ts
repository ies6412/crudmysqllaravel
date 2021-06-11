// import { Storage } from '@ionic/storage-angular';
import { Camaracap } from './../interface/camaracap';

import { Injectable } from '@angular/core';
import { CameraResultType,Plugins,CameraSource,
         FilesystemDirectory,
         CameraPhoto,
         FilesystemEncoding,
         Capacitor} from '@capacitor/core';

import {Platform} from '@ionic/angular';
import { toBase64String } from '@angular/compiler/src/output/source_map';

const {Camera,Storage,Filesystem}=Plugins
@Injectable({
  providedIn: 'root'
})
export class CamaracapacitorService {
 
  public photoca:Camaracap[]=[];
  private Photo_storage:string='photos';
  // private platform:Platform;

  constructor(private platform:Platform) {
    this.platform=platform
   }

    async addphoto(){

          const image = await Camera.getPhoto({
                 quality: 90,
                allowEditing: true,
                resultType: CameraResultType.Uri,
                source:CameraSource.Camera
         })

         
  const saveimage= await this.savephoto(image);
  
  this.photoca.unshift(saveimage);
// 

  //  this.photoca.unshift({
  //   filepath:'...',
  //   webviewpath:image.webPath
  // })
   
        }


    private  async savephoto(camaraphot:CameraPhoto){

      const imagebase64=  await this.readbase64(camaraphot)
      
      const filename= new Date().getTime()+'.jpeg'
      
      const saverfile= await Filesystem.writeFile({
        path: filename,
        data: imagebase64,
        directory: FilesystemDirectory.Data,
        
      })
     
        
      if(this.platform.is("hybrid"))
      {
         
        
        return {
               
          //coje de la interfaz
           filepath: saverfile.uri,
           webviewpath: Capacitor.convertFileSrc(saverfile.uri)
         }
      }
      else{

        

            return {
                        filepath: filename,
                        webviewpath: camaraphot.webPath
                  }
          }


      
    }   


    
    private   async readbase64(camera:CameraPhoto)
    {
      if(this.platform.is("hybrid"))
      {
         const file= await Filesystem.readFile({
           path:camera.path
         })
         return file.data;
         
      }
      else{
            const response= await fetch(camera.path)
            const blob=await response.blob();
            return await this.convertobase64(blob) as string;
          } 

    }

    convertobase64=(blob:Blob)=>new Promise((resolve,reject)=>{
      const reader=new FileReader();
      reader.onerror=reject
      reader.onload=()=>{
        resolve(reader.result)
      }
      reader.readAsDataURL(blob)
      
    })

public async loadSave(){
  const photolist=await Storage.get({key: this.Photo_storage})
this.photoca=JSON.parse(photolist.value)|| []
if(!this.platform.is("hybrid"))
{
   for(let photo of this.photoca)
   {
     const readfile=await Filesystem.readFile({
       path:photo.filepath,
       directory: FilesystemDirectory.Data
     });
   }

}

}
    
      
}
