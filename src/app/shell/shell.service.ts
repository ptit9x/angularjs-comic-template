import { Routes, Route } from '@angular/router';

import { FullComponent, NoFooterComponent } from './layouts';

/**
 * Provides helper methods to create routes.
 */
export class Shell {
  /**
   * Creates routes using the shell component and authentication.
   * @param routes The routes to add.
   * @return The new route using shell as the base.
   */
  static childRoutes(routes: Routes): Route {
    return {
      path: '',
      component: FullComponent,
      children: routes,
      // Reuse FullComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
  static childReadingRoutes(routes: Routes): Route {
    return {
      path: '',
      component: NoFooterComponent,
      children: routes,
      // Reuse NoFooterComponent instance when navigating between child views
      data: { reuse: true }
    };
  }
}
