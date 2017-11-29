import { Component } from '@angular/core';
import { async, TestBed } from '@angular/core/testing';

import { ListModule } from './list.module';

export function main() {
  describe('List component', () => {
    // Setting module for testing
    // Disable old forms

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
        imports: [ListModule]
      });
    });

    it(
      'should work',
      async(() => {
        TestBed.compileComponents().then(() => {
          const fixture = TestBed.createComponent(TestComponent);
          const listDOMEl = fixture.debugElement.children[0].nativeElement;

          expect(listDOMEl.querySelectorAll('h2')[0].textContent).toEqual(
            'Features'
          );
        });
      })
    );
  });
}

@Component({
  selector: 'test-cmp',
  template: '<sd-list></sd-list>'
})
class TestComponent {}
