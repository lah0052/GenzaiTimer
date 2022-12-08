import { Component, OnInit } from '@angular/core';

let quotes = [
  {
    quote: "Don't give up!",
    author: "Chris"
  },
  {
    quote: "Hang in there!",
    author: "Jordan"
  },
  {
    quote: "You got this!",
    author: "Luke"
  },
  {
    quote: "Keep going!",
    author: "Chris1"
  },
  {
    quote: "You're doing great!",
    author: "Jordan1"
  },
  {
    quote: "Keep up the hard work!",
    author: "Luke1"
  },
]

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  show = true
  quote = "log"
  constructor() {
   }

  ngOnInit(): void {
    this.sendQuote()
    setInterval(() => {
      this.sendQuote() 
    }, 10000);
  }

  async sendQuote() {

    let tempQuote = quotes[Math.floor(Math.random() * 5)].quote
    while (tempQuote == this.quote) {
      tempQuote = quotes[Math.floor(Math.random() * 5)].quote
    }
    this.quote = tempQuote
    this.show = true
    await sleep(5000)
    this.show = false
  }
}
