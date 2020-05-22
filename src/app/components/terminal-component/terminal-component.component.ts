import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-terminal-component',
  templateUrl: './terminal-component.component.html',
  styleUrls: ['./terminal-component.component.scss']
})
export class TerminalComponent implements OnInit, OnDestroy {

  //@Input()
  cmd: String;

  constructor( private route: ActivatedRoute,
    private router: Router) { }

  ngOnDestroy(): void {
    console.log("destroy");
  }

  ngOnInit(): void {
    console.log("init");
     this.route.data.subscribe(data => {     
      this.cmd = data.cmd;
      console.log("cmd is :"+ data.cmd);
    });
  }

 /*  navigateTo() {
    this.router.navigate([''])
  } */

  

}
