import { TestBed } from '@angular/core/testing';

import { InterceptadorInterceptor } from './interceptador.interceptor';

describe('InterceptadorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InterceptadorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InterceptadorInterceptor = TestBed.inject(InterceptadorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
