//Core
import { NgModule, Type } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Internal modules
import { CommonComponentsModule } from '../common-components/common-components.module';

// Pipes
import { SafeUrlPipe } from 'src/app/pipes/safe-resource-url/safe-resource-url';

// Services
import { ImageService } from 'src/app/services/image/image.service';

// Components
import { ImageUploadComponent } from './image-upload.component';
import { DragImageComponent } from './components/drag-image/drag-image.component';
import { FormImageComponent } from './components/form-image/form-image.component';

const exports: (any[] | Type<any>)[] | undefined = [ImageUploadComponent];

@NgModule({
  declarations: [
    ...exports,
    ImageUploadComponent,
    DragImageComponent,
    SafeUrlPipe,
    FormImageComponent,
  ],
  exports: exports,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CommonComponentsModule,
  ],
  providers: [ImageService],
})
export class ImageUploadModule {}