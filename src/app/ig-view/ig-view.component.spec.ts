import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_CARD_DIRECTIVES } from 'igniteui-angular';
import { IgViewComponent } from './ig-view.component';

describe('IgViewComponent', () => {
  let component: IgViewComponent;
  let fixture: ComponentFixture<IgViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgViewComponent, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_INPUT_GROUP_DIRECTIVES, IgxIconComponent, IGX_CARD_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
