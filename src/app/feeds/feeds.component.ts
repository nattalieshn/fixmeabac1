import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-feeds',
  templateUrl: './feeds.component.html',
  styleUrls: ['./feeds.component.scss']
})
export class FeedsComponent implements OnInit {
  title = 'FixMe Abac';
  report: Observable<any[]>;
  constructor(private db: AngularFireDatabase) {
    this.report = this.db.list('/report/open').valueChanges();
    console.log(this.report);
  }

  ngOnInit() {
  }

}




