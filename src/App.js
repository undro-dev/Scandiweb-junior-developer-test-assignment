import { Products } from './pages/Products.jsx';
import { Header } from './components/header/Header.jsx';
import { Route, Routes } from 'react-router-dom';
import { Details } from './pages/Details.jsx';
import { Modal } from './pages/Modal.jsx';
import { Cart } from './pages/Cart.jsx';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' element={<Products />} />
				<Route path='products/:category' element={<Products />} />
				<Route path='products/:category' element={<Products />} />
				<Route path='products/:category/:id' element={<Details />} />
				<Route path='cart' element={<Cart />} />
			</Routes>
			<Modal />
		</>
	);
}

export default App;
