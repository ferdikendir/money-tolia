import { Injectable, inject } from "@angular/core";
import { BreakpointObserver } from '@angular/cdk/layout';
import { BehaviorSubject, map } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class LayoutService {

  private readonly breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

  isDesktop$ = this.breakpointObserver.observe(`(min-width: 1280px)`).pipe(
    map(state => state.matches)
  );

  ltLg$ = this.breakpointObserver.observe(`(max-width: 1279px)`).pipe(
    map(state => state.matches)
  );

  gtMd$ = this.breakpointObserver.observe(`(min-width: 960px)`).pipe(
    map(state => state.matches)
  );

  ltMd$ = this.breakpointObserver.observe(`(max-width: 959px)`).pipe(
    map(state => state.matches)
  );

  gtSm$ = this.breakpointObserver.observe(`(min-width: 600px)`).pipe(
    map(state => state.matches)
  );

  isMobile$ = this.breakpointObserver.observe(`(max-width: 599px)`).pipe(
    map(state => state.matches)
  );

}
