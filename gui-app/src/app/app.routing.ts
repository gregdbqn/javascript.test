import { Routes, RouterModule} from '@angular/router';

// Import our components
import { PublicQuoteComponent } from './public-quote.component';
import { PrivateQuoteComponent } from './private-quote.component';

const appRoutes: Routes = [
  // Add the redirect
  {
    path: '',
    redirectTo: '/public',
    pathMatch: 'full'
  },
  // Add our routes
  {
    path: 'public',
    component: PublicQuoteComponent
  },
  {
    path: 'private',
    component: PrivateQuoteComponent
  }
];
// Here we are exporting our routes
export const routing = RouterModule.forRoot(appRoutes);
// Here we are combining our routing components into a single array. We will use this a little later when we update our root module
export const routedComponents = [PublicQuoteComponent, PrivateQuoteComponent];