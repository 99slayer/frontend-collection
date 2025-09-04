import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router';
import './styles/index.css';
import App from './components/App.tsx';
import Chat from './components/Chat.tsx';
import Frontend2 from './components/Frontend2.tsx';
import Carousel from './components/Carousel.tsx';

const router = createBrowserRouter([
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
				path: 'frontend2',
				Component: Frontend2
			},
			{
				path: 'carousel',
				Component: Carousel
			}
		]
	}
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
