import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { Router } from '@angular/router';
import { Player } from '../player';
import { PlayerDataService } from '../service/data/player-data.service';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
  styleUrls: ['./register-player.component.css']
})
export class RegisterPlayerComponent implements OnInit {
  player:Player
  j:number

  constructor(
    private playerservice:PlayerDataService,
    private router:Router
    
  ) { this.player=new Player();this.j=0;
       }

  ngOnInit() {
  }

  handleSave(){
    this.j+=1;
      if(this.j<3){
      (document.getElementById("1") as HTMLInputElement).disabled=true;
      }
      else{
      (document.getElementById("1") as HTMLInputElement).disabled=false;
      }
    this.playerservice.savePlayer(this.player).subscribe(data=>{console.log("executed")});
   
    // this.router.navigate(['game'])
  }
  handleRegister(){
    this.router.navigate(['game'])
  }
}
