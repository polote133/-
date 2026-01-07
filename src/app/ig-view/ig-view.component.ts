import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IGX_CARD_DIRECTIVES, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent } from 'igniteui-angular';

@Component({
  selector: 'app-ig-view',
  imports: [IGX_INPUT_GROUP_DIRECTIVES, IGX_CARD_DIRECTIVES, IgxIconComponent, FormsModule],
  templateUrl: './ig-view.component.html',
  styleUrls: ['./ig-view.component.scss']
})
export class IgViewComponent {
  public value?: string;
}
