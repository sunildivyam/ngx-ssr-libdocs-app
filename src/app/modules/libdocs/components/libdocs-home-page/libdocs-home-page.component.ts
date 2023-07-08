import { Component } from '@angular/core';
import { LibsInfo } from '@annuadvent/ngx-lib-docs/docs-common';
import { AppState, AppStateService } from '../../../app-core';

@Component({
  selector: 'app-libdocs-home-page',
  templateUrl: './libdocs-home-page.component.html',
  styleUrls: ['./libdocs-home-page.component.scss']
})
export class LibdocsHomePageComponent {
  libsInfo: LibsInfo;

  constructor(
    private appStateService: AppStateService,
  ) {
    this.appStateService.appState.subscribe((appState: AppState) => {
      this.libsInfo = appState.libsInfo;
    });
  }
}
