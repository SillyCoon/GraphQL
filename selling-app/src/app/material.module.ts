import { NgModule } from '@angular/core';
import { MatTableModule, MatIconModule, MatFormFieldModule, MatInputModule, MatButtonModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatTableModule,
    MatIconModule
  ],
  exports: [
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ]
})
export class MaterialModule {}
