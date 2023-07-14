import type { FC } from 'react'
import { CartIcon } from '@common/assets/icon'

const Cart: FC = () => {
	return (
		<div className='flex flex-row items-center px-3'>
			<button className='cursor-pointer flex items-center flex-row gap-1'>
				<CartIcon
					width={30}
					height={30}
					color='rgb(249 168 212 / var(--tw-bg-opacity))'
				/>
				<span className='text-sm font-medium'>Giỏ hàng</span>
			</button>
		</div>
	)
}

export default Cart
