import type { FC } from 'react'
import Brand from './brand'
import Navigation from './navigation'
import Cart from './cart'
import UserBox from './user-box'

const Header: FC = () => {
	return (
		<header className='bg-white border-b border-gray-200 flex justify-center'>
			<div className='container'>
				<div className='flex flex-row justify-between h-full'>
					<Brand />
					<Navigation />
					<div className='flex flex-row divide-x'>
						<Cart />
						<UserBox />
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
