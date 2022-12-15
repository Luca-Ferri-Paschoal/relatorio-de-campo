import { RelationProvider } from 'common/context/RelationContext';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Initial from './pages/Initial';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<RelationProvider>
			<Initial/>
		</RelationProvider>
	</React.StrictMode>
);
