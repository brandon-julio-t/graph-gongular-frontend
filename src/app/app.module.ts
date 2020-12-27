import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RegisterComponent } from './components/register/register.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { AccountComponent } from './components/account/account.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteAccountConfirmDialogComponent } from './components/delete-account-confirm-dialog/delete-account-confirm-dialog.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';
import { StorageComponent } from './components/storage/storage.component';
import { StorageUploadComponent } from './components/storage-upload/storage-upload.component';
import { StorageListingComponent } from './components/storage-listing/storage-listing.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StorageItemComponent } from './components/storage-item/storage-item.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    AccountComponent,
    DeleteAccountConfirmDialogComponent,
    UpdateAccountComponent,
    StorageComponent,
    StorageUploadComponent,
    StorageListingComponent,
    StorageItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    GraphQLModule,
    HttpClientModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatRadioModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
