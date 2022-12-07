export class CalenderCardModel{
    date: string;
    title: string;
    description: string;
    time: string;

    constructor(date: string, title: string, description: string, time: string){
        this.date = date;
        this.title = title;
        this.description = description;
        this.time = time;
    }
}