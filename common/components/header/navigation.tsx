'use client'
import type { FC } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { isEqual } from 'lodash'
import classNames from 'classnames'
import { NavigationItemProps } from '@/common/types/navigation'
import { NAVIGATION_ITEMS } from '@/common/constants/global'

const Navigation: FC = () => {
	const pathname = usePathname()

	return (
		<nav className='flex-1 h-full'>
			<ul className='flex flex-row divide-x h-full'>
				{NAVIGATION_ITEMS.map((props, index) => (
					<NavigationItem
						key={index}
						{...props}
						isActive={isEqual(pathname, props.href)}
					/>
				))}
			</ul>
		</nav>
	)
}

const NavigationItem: FC<NavigationItemProps> = ({ value, href, isActive }) => {
	const classes = classNames(
		'text-gray-600 text-xs border-b-2 border-transparent font-bold uppercase transition duration-200 hover:text-pink-500 hover:border-b-pink-400 px-3 h-full flex items-center',
		{
			'bg-pink-300 !text-white !border-none': isActive,
		},
	)

	return (
		<li className='relative h-full'>
			<Link className={classes} href={href}>
				{value}
			</Link>
		</li>
	)
}

export default Navigation
