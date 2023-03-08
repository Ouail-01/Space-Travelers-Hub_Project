import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../Redux/configureStore';
import MyProfile from '../components/MyProfile';

const ProfileProvider = () => (
  <Provider store={store}>
    <MyProfile />
  </Provider>
);

describe('Test for the profile component', () => {
  it('Should be render profile correctly', () => {
    const myProfile = renderer.create(<ProfileProvider />);
    expect(myProfile).toMatchSnapshot();
  });
});
