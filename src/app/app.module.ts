import { IonicStorageModule } from '@ionic/storage-angular';
import { ComponentModule } from './component/component.module';
import { PipeModule } from './pipe/pipe.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { InterceptorService} from '../app/servicio/interceptor.service';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component'; 
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    
    BrowserModule, 
     IonicModule.forRoot(), 
     AppRoutingModule,
     HttpClientModule,
     ComponentModule,
     PipeModule,
     IonicStorageModule.forRoot(),
    
    
      ],

    
     
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
              { provide: HTTP_INTERCEPTORS,  useClass: InterceptorService, multi:true}
              ],
  bootstrap: [AppComponent],
})
export class AppModule {}
