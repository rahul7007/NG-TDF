import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tdf';
  topics = ["Angular", "React", "Vue"]
  topicHasError = true

  validateTopic(value:string){
    if(value==='default'){
      this.topicHasError = true
    } else{
      this.topicHasError = false
    }
  }

  userModel = new User('rob', 'rob@abx', '123', 'default', 'morning', true)
}
