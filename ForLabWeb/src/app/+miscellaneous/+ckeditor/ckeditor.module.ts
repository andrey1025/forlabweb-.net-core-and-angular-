import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CkeditorRoutingModule } from './ckeditor-routing.module';
import { CkeditorComponent } from './ckeditor.component';
import {SmartadminLayoutModule} from "../../shared/layout/layout.module";
import {StatsModule} from "../../shared/stats/stats.module";
import {SmartadminWidgetsModule} from "../../shared/widgets/smartadmin-widgets.module";
import {D3Module} from "../../shared/graphs/d3/d3.module";
@NgModule({
  imports: [
    CommonModule,
    CkeditorRoutingModule,
    D3Module,

    SmartadminLayoutModule,
		StatsModule,
    SmartadminWidgetsModule,
  ],
  declarations: [CkeditorComponent]
})
export class CkeditorModule { }
