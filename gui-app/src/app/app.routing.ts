import { Routes, RouterModule, CanActivate} from '@angular/router';// Add the AuthGuard service
import { AuthGuard } from './auth-guard.service';

// Import our components
import { PublicQuoteComponent } from './public-quote.component';
import { PrivateQuoteComponent } from './private-quote.component';
import { CallbackComponent } from './callback.component';

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
    component: PrivateQuoteComponent,    // We'll use the canActivate API and pass in our AuthGuard. Now any time the /special route is hit, the AuthGuard will run first to make sure the user is logged in before activating and loading this route.
    canActivate: [AuthGuard]
  },
  {
    path: 'callback',
    component: CallbackComponent
  },

];
// Here we are exporting our routes
export const routing = RouterModule.forRoot(appRoutes);
// Here we are combining our routing components into a single array. We will use this a little later when we update our root module
export const routedComponents = [PublicQuoteComponent, PrivateQuoteComponent, CallbackComponent];