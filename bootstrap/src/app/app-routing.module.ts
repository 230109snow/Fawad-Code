import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path:'NavBar',
    component : NavbarComponent
  },
  {
    path:'Contact',
    component : ContactComponent
  },
  {
    path:'Blog',
    component : BlogComponent
  },
  {
    path:'Post',
    component : PostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
