import authReducer from '../../src/redux/auth.js';
import { toggleAuth } from '../../src/redux/auth.js';

describe('Auth Reducers', () => {
  test('returns the initial state', () => {
    const result = authReducer(undefined, {});
    expect(result).toBe(false);
  });

  test('TOGGLE_AUTH', () => {
    const result = authReducer(undefined, toggleAuth());
    expect(result).toBe(true);
  });
});
