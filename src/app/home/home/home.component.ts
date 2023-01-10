import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/_shared/home/home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  images: any[] =[];
  homeBanner: any[]=[];
  responsiveOptions: any
  latestWork: any[] = [];
  objectives:any;
  problemStatement: any

  constructor(private homeService: HomeService){
    this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3,
          numScroll: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }

  ngOnInit(): void {
   
    this.homeService.getHomeData().subscribe((res:any) => {
      console.log(res)
      this.homeBanner = res.banner;
      this.latestWork = res.latestWork;
      this.objectives = res.objectives;
      this.problemStatement = res.problem_statement;
      console.log(this.objectives);
      
    });
    
  }

}
