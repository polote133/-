import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES } from 'igniteui-angular';
import { IgView2Component } from './ig-view-2.component';

describe('IgView2Component', () => {
  let component: IgView2Component;
  let fixture: ComponentFixture<IgView2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgView2Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgView2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
