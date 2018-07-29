import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatToolbarModule,
  MatTooltipModule,
  MatListModule,
  MatStepperModule,
  MatMenuModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatTabsModule,
  MatCheckboxModule,
  MatRadioModule,
  MatGridListModule,
  MatProgressBarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


const used = [
    BrowserAnimationsModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatTooltipModule,
    MatToolbarModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatListModule,
    MatStepperModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSnackBarModule,
    MatTabsModule,
    MatRadioModule,
    MatGridListModule,
    MatProgressBarModule,
    MatSnackBarModule
]

@NgModule({
    imports: [
        CommonModule,
        ...used
    ],
    declarations: [],
    exports: used,
})
export class MaterialModule {
}
