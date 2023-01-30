import React,{Suspense} from 'react';
import ReactDOM from 'react-dom/client';

// 引入默认样式
import './assets/css/index.less'

// 引入路由
import { HashRouter } from 'react-router-dom';

// 引入redux
import { Provider } from 'react-redux';
import store from './store';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // 路由懒加载
    <Suspense fallback={<h4>loading...</h4>}>
        <Provider store={store}>
            <HashRouter>
                <App />
            </HashRouter>
        </Provider>
    </Suspense>
);
