import {NgModule} from '@angular/core';
import {NbCardModule} from '@nebular/theme';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';

import { ThemeModule } from '../../@theme/theme.module';
import { VideoplatformComponent } from './videoplatform.component';

@NgModule({
  imports: [
    ThemeModule,
    NbCardModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ],
  declarations: [
    VideoplatformComponent,
  ],
})
export class VideoPlatformModule {
}
