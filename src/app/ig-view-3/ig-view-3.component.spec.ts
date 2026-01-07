import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES } from 'igniteui-angular';
import { IgView3Component } from './ig-view-3.component';

describe('IgView3Component', () => {
  let component: IgView3Component;
  let fixture: ComponentFixture<IgView3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgView3Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgView3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
