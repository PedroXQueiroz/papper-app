import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SourcesModalPage } from './sources-modal.page';

describe('SourcesModalPage', () => {
  let component: SourcesModalPage;
  let fixture: ComponentFixture<SourcesModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SourcesModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SourcesModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
