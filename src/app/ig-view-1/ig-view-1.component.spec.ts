import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { IGX_CARD_DIRECTIVES } from 'igniteui-angular';
import { IgView1Component } from './ig-view-1.component';

describe('IgView1Component', () => {
  let component: IgView1Component;
  let fixture: ComponentFixture<IgView1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IgView1Component, NoopAnimationsModule, FormsModule, ReactiveFormsModule, IGX_CARD_DIRECTIVES]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IgView1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
