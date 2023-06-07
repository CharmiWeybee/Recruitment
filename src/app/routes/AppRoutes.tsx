import { FC } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { ErrorsPage } from '../components/errors/ErrorsPage';
import { AuthPage, useAuth } from '../components/auth';
import { DASHBOARD } from '../helpers/routesConstant';
import App from '../../App';

const { PUBLIC_URL } = process.env;

const AppRoutes: FC = () => {
	const { currentUser } = useAuth();

	return (
		<BrowserRouter>
			<Routes>
				<Route element={<App />}>
					{currentUser ? (
						<>
							<Route path="/*" element={<PrivateRoutes />} />
							<Route index element={<Navigate to={DASHBOARD} />} />
						</>
					) : (
						<>
							<Route path="auth/*" element={<AuthPage />} />
							<Route path="*" element={<Navigate to="/auth" />} />
						</>
					)}
					<Route path="error/*" element={<ErrorsPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export { AppRoutes };
