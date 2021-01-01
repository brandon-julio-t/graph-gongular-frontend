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
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteAccountConfirmDialogComponent } from './components/delete-account-confirm-dialog/delete-account-confirm-dialog.component';
import { AccountUpdateComponent } from './components/account-update/account-update.component';
import { StorageComponent } from './components/storage/storage.component';
import { StorageUploadComponent } from './components/storage-upload/storage-upload.component';
import { StorageListingComponent } from './components/storage-listing/storage-listing.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StorageItemComponent } from './components/storage-item/storage-item.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AccountViewComponent } from './components/account-view/account-view.component';
import { FriendsViewComponent } from './components/friends-view/friends-view.component';
import { FriendsSearchComponent } from './components/friends-search/friends-search.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { UserViewComponent } from './components/user-view/user-view.component';
import { FriendViewComponent } from './components/friend-view/friend-view.component';
import { UserViewDetailDialogComponent } from './components/user-view-detail-dialog/user-view-detail-dialog.component';
import { PublicChatComponent } from './components/public-chat/public-chat.component';
import { PublicChatMessageComponent } from './components/public-chat-message/public-chat-message.component';
import { PublicChatSendMessageComponent } from './components/public-chat-send-message/public-chat-send-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    DeleteAccountConfirmDialogComponent,
    AccountUpdateComponent,
    StorageComponent,
    StorageUploadComponent,
    StorageListingComponent,
    StorageItemComponent,
    AccountViewComponent,
    FriendsViewComponent,
    FriendsSearchComponent,
    UserViewComponent,
    FriendViewComponent,
    UserViewDetailDialogComponent,
    PublicChatComponent,
    PublicChatMessageComponent,
    PublicChatSendMessageComponent,
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
    MatGridListModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
