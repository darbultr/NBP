import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormBuilder, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { ConfirmationService, MessageService } from 'primeng/api';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DockModule } from 'primeng/dock';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ImageModule } from 'primeng/image';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { PanelModule } from 'primeng/panel';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { RatingModule } from 'primeng/rating';
import { RippleModule } from 'primeng/ripple';
import { SidebarModule } from 'primeng/sidebar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { StyleClassModule } from 'primeng/styleclass';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { AppComponent } from './app.component';
import {FileUploadModule} from 'primeng/fileupload';
import {PasswordModule} from 'primeng/password';
import {KeyFilterModule} from 'primeng/keyfilter';
import {InputMaskModule} from 'primeng/inputmask';
import {EditorModule} from 'primeng/editor';
import {GalleriaModule} from 'primeng/galleria';
import { RouterModule } from '@angular/router';

import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DockModule,
    ButtonModule,
    TabViewModule,
    CheckboxModule,
    TableModule,
    InputTextModule,
    RippleModule,
    MessagesModule,
    MessageModule,
    ToastModule,
    ProgressSpinnerModule,
    CardModule,
    StyleClassModule,
    ToolbarModule,
    MegaMenuModule,
    MenuModule,
    SplitButtonModule,
    RatingModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    DialogModule,
    FormsModule,
    PanelMenuModule,
    ImageModule,
    BadgeModule,
    DynamicDialogModule,
    CalendarModule,
    DividerModule,
    SidebarModule,
    InputNumberModule,
    ConfirmDialogModule,
    AccordionModule,
    OverlayPanelModule,
    InputTextareaModule,
    FileUploadModule,
    PasswordModule,
    KeyFilterModule,
    NgxExtendedPdfViewerModule,
    InputMaskModule,
    EditorModule,
    GalleriaModule
    
  ],

  providers: [FormBuilder, DialogService, ConfirmationService, MessageService, AppComponent],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
