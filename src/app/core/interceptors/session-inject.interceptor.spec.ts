import { TestBed } from '@angular/core/testing';

import { SessionInjectInterceptor } from './session-inject.interceptor';

describe('SessionInjectInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      SessionInjectInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: SessionInjectInterceptor = TestBed.inject(SessionInjectInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
