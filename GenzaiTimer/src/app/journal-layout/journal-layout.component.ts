import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalCardModel } from '../journal-components/event/add-event2/journal-card.model';
import { JournalService } from '../journal-components/event/add-event2/journal.service';



@Component({
  selector: 'app-journal-layout',
  templateUrl: './journal-layout.component.html',
  styleUrls: ['./journal-layout.component.css']
})
export class JournalLayoutComponent  {

  journals: JournalCardModel [] = [];

  constructor(private journalService:JournalService, private ps:JournalService, private router:Router) {}

  ngOnInit(): void{
    this.journalService.getJournals().subscribe((data: JournalCardModel []) =>{
      console.log("Fetching Journal.");
      for(var journal of data){
        console.log(journal);
        this.journals.push(journal);
      }
    });
  }

  removeJournal(journal: JournalCardModel){
    this.ps.removeJournal(journal);
    
    location.reload();
  }



}
