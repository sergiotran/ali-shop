'use client'
import type { FC } from 'react'
import { useRouter } from 'next/router'

type NavigationItemProps = {
	value: string
	href: string
	isActive?: boolean
}

const NAVIGATION_ITEMS: NavigationItemProps[] = [
	{
		value: 'Trang chủ',
		href: '/',
	},
	{
		value: 'Mỹ phẩm',
		href: '/chuyen-muc/my-pham',
	},
	{
		value: 'Phụ kiện',
		href: '/chuyen-muc/phu-kien',
	},
]

const Navigation: FC = () => {
	const router = useRouter()

	console.log(router)

	return (
		<nav>
			<ul>
				{NAVIGATION_ITEMS.map((props, index) => (
					<NavigationItem key={index} {...props} />
				))}
			</ul>
		</nav>
	)
}

const NavigationItem: FC<NavigationItemProps> = ({ value, href, isActive }) => {
	return <li>{value}</li>
}

export default Navigation
