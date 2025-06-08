import { render } from "@testing-library/react";
import App from "./App";
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

test('App renders', () => {
    const app = render(
        <Provider store={store}>
            <App />
        </Provider>
    );
    expect(app).toBeDefined();
});