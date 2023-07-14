import type { FC } from 'react'
import Brand from './brand'
import Navigation from './navigation'
import Cart from './cart'

const Header: FC = () => {
	return (
		<header className='bg-white border-b border-gray-200 py-3 flex items-center justify-center'>
			<div className='container'>
				<div className='flex flex-row items-center justify-between'>
					<Brand />
					<Navigation />
					<Cart />
				</div>
			</div>
		</header>
	)
}

export default Header
