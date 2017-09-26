import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from '../index/index.component';
import { RootComponent } from '../root/root.component';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { SignedinComponent } from '../signedin/signedin.component';
import { SignedininComponent } from '../signedinin/signedinin.component';

const routes: Routes = [
  {
    path: '',
    component: RootComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent,
        data: {
          breadcrumb: 'Sign In'
        },
        children: [
          {
            path: 'signedin',
            component: SignedinComponent,
            data: {
              breadcrumb: 'Signed In'
            },
            children: [
              {
                path: 'signedinin',
                component: SignedininComponent,
                data: {
                  breadcrumb: 'Signed InIn'
                }
              }
            ]
          }
        ]
      },
      {
        path: 'signup',
        component: SignupComponent,
        data: {
          breadcrumb: 'Sign Up'
        }
      },
      {
        path: '',
        component: IndexComponent
      }
    ]
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
