import { Component } from '@angular/core';

import { AngularFire, FirebaseObjectObservable } from "angularfire2";
/**
 * Generated class for the Connection component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'connection',
  templateUrl: 'connection.html'
})
export class Connection {

  status: FirebaseObjectObservable<any>
  constructor(public af: AngularFire) {
    this.status = this.af.database.object('.info/connected')
  }

}
