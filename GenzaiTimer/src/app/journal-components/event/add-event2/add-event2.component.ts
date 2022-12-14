import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JournalCardModel } from './journal-card.model';
import { JournalService } from './journal.service';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-event2',
  templateUrl: './add-event2.component.html',
  styleUrls: ['./add-event2.component.css']
})
export class AddEvent2Component implements OnInit {

  constructor(private ps:JournalService, private router:Router) { }

  ngOnInit(): void {
  }

  addJournal(journal:JournalCardModel){
    this.ps.addJournal(journal);
    this.router.navigate(['/journal']);
  }

}
