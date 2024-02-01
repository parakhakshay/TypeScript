import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreCodePaginationComponent } from './core-code-pagination.component';

describe('CoreCodePaginationComponent', () => {
  let component: CoreCodePaginationComponent;
  let fixture: ComponentFixture<CoreCodePaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreCodePaginationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoreCodePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
