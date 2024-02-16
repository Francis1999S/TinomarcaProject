import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { BBDDComponent } from './components/bbdd/bbdd.component';
import { CVComponent } from './components/cv/cv.component';
import { ResultsComponent } from './components/results/results.component';
import { TermsComponent } from './components/terms/terms.component';
import { TinogastagobComponent } from './components/tinogastagob/tinogastagob.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'terms', component: TermsComponent},
  { path: 'home', component: HomeComponent },
  { path: '7fcC09UsfpmYTOqeJCUay4AHrkiBC4K9teaDmbcXv6TtiAMh4MP5pMAwt2Hpi1pRY132vkXEW2YjYIwxCJvjr1Wofg29CMeFgF0Q5be3qguZL2yiMHZjoBS0eLtsTaz8LhxS3zP1g5qmWCs4LJC6Qg', component: LoginComponent },
  { path: '5VawIOyKYCvy7jA6jSYhj6yX1tukL0p4FTYyUZpRyS6S9LsiyvbCSIPFa5w8D4P2ZJ5fOC73kbJDrM82IzyToSUYTf8t1y7AKgev9BdshD1qHLPq1UJkEd7CyFom0OFGroU34mAO0r8wPiprj0EVuq', component: RegisterComponent },
  { path: 'BBDD', component: BBDDComponent },
  { path: 'cahGtVcYjPzhDz4KkcKLokdqS56PDV5wLYFurV1yJrcac8tZ87TQY7Y6Sbi51PTT2qpw9cXWP8U5q1kZ33Li1OMljHxKLkVV9gvFGyyZKMmKOM3RgGMbxp328rlpd1ErpvRYKQwTI1FJfHEVDdVB14/:id', component: CVComponent },
  { path: 'm2DxKqfMK4TYKq16lC5lwVlHGfTpP7whA2sq4HbZb2E8glStrGrlxMIcbhyBgz5FUs85sKIear2H74bXjM4jZ6SehEdWFjCf4KqREP3W7UySEH7lgUoWQIPxmPmIHi3PFxxsU5t4e4rocZF4IpoZkA', component: ResultsComponent},
  { path: 'tinogastagob', component: TinogastagobComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
