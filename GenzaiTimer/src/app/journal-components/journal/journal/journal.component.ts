import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalService } from '../../event/add-event2/journal.service';
import { JournalCardModel } from '../../event/add-event2/journal-card.model';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  @Input() title: string;
  @Input() description: string;

  constructor(private ps:JournalService, private router:Router) {
    this.title = "no title given or loading error";
    this.description = "no description given or loading error";
   }

  ngOnInit(): void {
  }

  removeJournal(journal:JournalCardModel){
    this.ps.removeJournal(journal);
    location.reload();
  }

}
