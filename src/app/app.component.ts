import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  })
export class AppComponent {
  title = 'ProjectManager';
  onClick : String = '';

  disViewTasks () :void {
    this.onClick  ='viewTasks';
  }
}
