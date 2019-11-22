import * as React from 'react';
import TestRenderer from 'react-test-renderer';
import Counter from '../index.windows';

test('Renders content rating image', () => {
  const subject = TestRenderer.create(<Counter />);

  expect(subject.root).toBeDefined();
});

