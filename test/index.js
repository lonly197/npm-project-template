import test from 'ava';
import DemoClass from '../src/index';

test('demo test', async(t) => {
  t.is(DemoClass.foo(), 'bar');
});

