import { Component, OnInit } from '@angular/core';
import { Player } from '../player';
import { PlayerDataService } from '../service/data/player-data.service';
import { TeamDataService } from '../service/data/team-data.service';
import { Team } from '../team';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  team:Team[];
  player:Player[];
  randomteam:Team[];
  randomPlayers:Player[];
  team1Player:Player[];
  team2Player:Player[];
  team3Player:Player[];
  number1=''
  number2=''
  number3=''
  number4=''
  number5=''
  number6=''
  a:number;
  randa:number;
  b:number;
  randb:number;
  c:number;
  randc:number;
  j:number;
  randj:number;
  k:number;
  randk:number;
  l:number;
  randl:number;
  t1:number;
  t2:number;
  t3:number;
  p1:number;
  p2:number;
  p3:number;
  n:number;
  winner:String;
  constructor(
    private teamservice:TeamDataService,
    private playerservice:PlayerDataService
    // private router:Router
  ) {this.t1=0;
    this.t2=0;
    this.t3=0;
    this.p1=0;
    this.p2=0;
    this.p3=0;
    }

  ngOnInit() {
    
  }
  randomTeam(){
    this.randomteam=[];
    this.teamservice.getTeam().subscribe(
    data=>{this.team=data;}
    )}
    
    randomPlayer(){
    this.randomPlayers=[];
    this.playerservice.getPlayersByTeam(this.team[0].teamname).subscribe(
      data=>
      {this.team1Player=data;this.playerservice.getPlayersByTeam(this.team[1].teamname).subscribe(
      data=>
      {this.team2Player=data;this.playerservice.getPlayersByTeam(this.team[2].teamname).subscribe(
      data=>
      {this.team3Player=data;
      console.log(this.team1Player);
      console.log(this.team2Player);
      console.log(this.team3Player);
      })})})
    
    }

    displayScores(){
     this.a=parseInt((document.getElementById("number1") as HTMLInputElement).value);
     this.randa=(Math.floor(Math.random()*(this.a))+1)*10;
     this.t1+=this.randa;

     this.b=parseInt((document.getElementById("number2") as HTMLInputElement).value);
     this.randb=(Math.floor(Math.random()*(this.b))+1)*10;
     this.t2+=this.randb;

     this.c=parseInt((document.getElementById("number3") as HTMLInputElement).value);
     this.randc=(Math.floor(Math.random()*(this.c))+1)*10;
     this.t3+=this.randc;
    }
    displayRound(){
      this.j=parseInt((document.getElementById("number4") as HTMLInputElement).value);
      this.randj=(Math.floor(Math.random()*(this.j))+1)*10;
      this.p1+=this.randj;
 
      this.k=parseInt((document.getElementById("number5") as HTMLInputElement).value);
      this.randk=(Math.floor(Math.random()*(this.k))+1)*10;
      this.p2+=this.randk;
 
      this.l=parseInt((document.getElementById("number6") as HTMLInputElement).value);
      this.randl=(Math.floor(Math.random()*(this.l))+1)*10;
      this.p3+=this.randl;
     }
    displayWinner(){
      this.n=Math.max(this.t1,this.t2,this.t3,this.p1,this.p2,this.p3);
      // console.log(this.n);
      if(this.n===this.t1)
      {this.winner=this.team1Player[0].name;}
      if(this.n===this.t2)
      {this.winner=this.team2Player[0].name;}
      if(this.n===this.t3)
      {this.winner=this.team3Player[0].name;}
      if(this.n===this.p1)
      {this.winner=this.team1Player[1].name;}
      if(this.n===this.p2)
      {this.winner=this.team2Player[1].name;}
      if(this.n===this.p3)
      {this.winner=this.team3Player[1].name;}
      
    }
}
    
  

