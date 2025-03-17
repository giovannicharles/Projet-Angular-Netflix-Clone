import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeamlessComponent } from './seamless.component';

describe('SeamlessComponent', () => {
  let component: SeamlessComponent;
  let fixture: ComponentFixture<SeamlessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeamlessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeamlessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
