import { Component , EventEmitter ,OnInit , Output } from '@angular/core';

@Component({
    selector : 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit{
     
    @Output() serverCreated = new EventEmitter();
    @Output() ('bpcreated')  bluePrintedCreated = new EventEmitter();

    public newServerName: string;
    public newServerContent: string;

    constructor() {}

    onAddServer(){
        this.serverCreated.emit({serverName: this.newServerName , serverContent: this.newServerContent});
    }
    onAddBlueprint(){
        this.serverCreated.emit({serverName: this.newServerName , serverContent: this.newServerContent});
    }
    ngOnInit(){

        
    }
}