export class SettingsModel
{
    work: number;
    shortBreak: number;
    longBreak: number;
    interval: number;

    constructor(work: number, shortBreak: number, longBreak: number, interval: number)
    {
        this.work = work;
        this.shortBreak = shortBreak;
        this.longBreak = longBreak;
        this.interval = interval;
    }
}