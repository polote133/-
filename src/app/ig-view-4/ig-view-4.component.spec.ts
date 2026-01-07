import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES } from 'igniteui-angular';
import { IgView4Component } from './ig-view-4.component';

describe('IgView4Component', () => {
  let component: IgView4Component;
  let fixture: ComponentFixture<IgView4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgView4Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgView4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
