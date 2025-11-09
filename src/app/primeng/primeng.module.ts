import {NgModule} from '@angular/core';

import {CheckboxModule} from 'primeng/checkbox';
import {ToolbarModule} from 'primeng/toolbar';
import {CardModule} from 'primeng/card';
import {FieldsetModule} from 'primeng/fieldset';
import {Dialog, DialogModule} from 'primeng/dialog';
import {TableModule} from 'primeng/table';
import {SelectModule} from 'primeng/select';
import {FloatLabelModule} from 'primeng/floatlabel';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {DatePickerModule} from 'primeng/datepicker';
import {RadioButtonModule} from 'primeng/radiobutton';
import {TextareaModule} from 'primeng/textarea';
import {DividerModule} from 'primeng/divider';
import {InputGroup, InputGroupModule} from 'primeng/inputgroup';
import {InputGroupAddonModule} from 'primeng/inputgroupaddon';
import { SelectButton, SelectButtonModule } from 'primeng/selectbutton';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { AccordionModule } from 'primeng/accordion';
import { AvatarModule } from 'primeng/avatar';
import { ConfirmDialog } from 'primeng/confirmdialog';
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {SplitButtonModule} from "primeng/splitbutton";
import { InputMask } from 'primeng/inputmask';
import { Fluid } from 'primeng/fluid';
import { Tooltip } from 'primeng/tooltip';
import { MultiSelectModule } from 'primeng/multiselect';
import { SplitterModule } from 'primeng/splitter';
import { TabsModule } from 'primeng/tabs';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ListboxModule } from 'primeng/listbox';
import { ChipModule } from 'primeng/chip';
import { InputNumber } from 'primeng/inputnumber';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { SkeletonModule } from 'primeng/skeleton';
import { StepperModule } from 'primeng/stepper';
import { FileUploadModule } from 'primeng/fileupload';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { PanelMenuModule } from 'primeng/panelmenu';

@NgModule({
  imports: [FileUploadModule,ChipModule,SkeletonModule,BreadcrumbModule,InputNumber,SelectButton,Dialog,ListboxModule,ButtonModule,ConfirmDialog,InputMask,Fluid,Tooltip,MultiSelectModule,SplitterModule,InputGroup,InputGroupAddonModule,AutoCompleteModule],
  declarations: [],
  providers: [],
  exports: [
    ChipModule,
    FieldsetModule,
    SkeletonModule,
    BreadcrumbModule,
    Tooltip,
    ConfirmDialog,
    CheckboxModule,
    ListboxModule,
    TableModule,
    ToolbarModule,
    CardModule,
    DialogModule,
    SplitterModule,
    FloatLabelModule,
    AutoCompleteModule,
    ButtonModule,
    MultiSelectModule,
    SelectModule,
    TabsModule,
    InputGroup,
    InputTextModule,
    DatePickerModule,
    RadioButtonModule,
    TextareaModule,
    DividerModule,
    InputGroupModule,
    InputGroupAddonModule,
    SelectButtonModule,
    TagModule,
    ToastModule,
    AccordionModule,
    AvatarModule,
    ToolbarModule,
    InputMask,
    InputNumber,
    IconFieldModule,
    InputIconModule,
    SplitButtonModule,
    StepperModule,
    FileUploadModule,
    MenuModule,
    MenubarModule,
    AvatarModule,
    BadgeModule,
    PanelMenuModule,
    BreadcrumbModule
  ]
})
export class PrimengModule {
}
