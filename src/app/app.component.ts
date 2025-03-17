import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { App1Component } from './components/app1/app1.component';
import { HeaderComponent } from "./header/header.component";
import { BannerComponent } from './components/banner/banner.component';
import { FeaturesComponent } from './components/features/features.component';
import { CustomersComponent } from './components/customers/customers.component';
import { SeamlessComponent } from './components/seamless/seamless.component';
import { PercentageComponent } from './components/percentage/percentage.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TeamComponent } from './components/team/team.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { JoinComponent } from './components/join/join.component';
import { ReadyComponent } from './components/ready/ready.component';
import { FooterComponent } from './footer/footer.component';
 // Importez NgBootstrap

@Component({
  selector: 'app-root',
  imports: [NgbModule,HeaderComponent,BannerComponent,FeaturesComponent,CustomersComponent,SeamlessComponent,PercentageComponent,PricingComponent,TeamComponent,TestimonialComponent,JoinComponent,ReadyComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'netflix-Clone';
}
