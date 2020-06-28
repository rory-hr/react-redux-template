import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const mockStore = configureStore([]);

import App from '../client/src/components/App';

// APP // 
describe('<App />', () => {
  let store;
  let component;
 
  beforeEach(() => {
    store = mockStore({
      /* ENTER STATE HERE */
    });

    component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('should render one App component', () => {
    expect(component.find(App)).toHaveLength(1);
  });
  
});
