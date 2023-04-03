import { Component } from '@angular/core';
import { EnrollmentService } from './enrollment.service';
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

  constructor(private _enrSerive: EnrollmentService){}

  validateTopic(value:string){
    if(value==='default'){
      this.topicHasError = true
    } else{
      this.topicHasError = false
    }
  }

  userModel = new User('rob', 'rob@abx', '123', 'default', 'morning', true)

  submitFormData(){
    // console.log(this.userModel)
    this._enrSerive.enroll(this.userModel)
    .subscribe(
      data=>console.log('success!', data),
      error=>console.log('error', error)
    )
  }
}
