import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibInfo } from '@annuadvent/ngx-lib-docs/docs-common';
import { APP_STATE_KEYS, AppState, AppStateService } from '../../../app-core';

@Component({
  selector: 'app-lib-info-page',
  templateUrl: './lib-info-page.component.html',
  styleUrls: ['./lib-info-page.component.scss']
})
export class LibInfoPageComponent {
  libInfo: LibInfo | null = null;

  constructor(
    private route: ActivatedRoute,
    private appStateService: AppStateService,
  ) {
    this.route.data.subscribe((data) => {
      this.libInfo = data.libInfo;
    });
  }

  public updateNavs(): void {
    this.appStateService.updateState(APP_STATE_KEYS.libsInfo, null);
  }
}
