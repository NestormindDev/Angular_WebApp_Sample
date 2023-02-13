import { Component } from '@angular/core';
import { AzureService } from 'src/services/azure.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Azure Function Testing';
  constructor(private azureService:AzureService) { }
  clickMe()
  {
     this.azureService.getHelloWord()
     .subscribe(
      (response: any) => {
        debugger
          alert(response);
      }, 
      (error: any) => {
        alert("error: "+JSON.stringify(error));
      })
   }
}
