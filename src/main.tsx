import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './styles/index.css';
import App from './components/App.tsx';
import Chat from './components/Chat.tsx';
import Column from './components/Column.tsx';
import Carousel from './components/Carousel.tsx';

const router = createBrowserRouter(
	[
		{
			path: "/",
			Component: App,
			children: [
				{
					index: true,
					element: <Navigate to='chat' replace />
				},
				{
					path: "chat",
					Component: Chat
				},
				{
					path: 'column',
					Component: Column
				},
				{
					path: 'carousel',
					Component: Carousel
				}
			]
		}
	],
	{ basename: '/frontend-collection/' }
);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
