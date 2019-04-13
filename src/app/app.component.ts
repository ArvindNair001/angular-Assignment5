import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { CounterService } from './counter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activeCount: number;
  inactiveCount: number;
  constructor(private usersService: UsersService, private counterService: CounterService){
    this.usersService.statusChanged.subscribe(
      ()=> {
        console.log("user status changed");
        this.refreshCount();
      }
    );
  }
  activeUsers: string[];
  inactiveUsers: string[];

  ngOnInit(){
    this.activeUsers = this.usersService.activeUsers;
    this.inactiveUsers = this.usersService.inactiveUsers;
    this.refreshCount();
  }

  refreshCount(){
    this.activeCount = this.counterService.activeActions;
    this.inactiveCount = this.counterService.inactiveActions;
  }
}
