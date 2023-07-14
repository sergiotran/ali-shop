import type { FC, PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import classNames from 'classnames'

import {
	PAGE_DEFAULT_DESCRIPTION,
	PAGE_DEFAULT_TITLE,
} from '@common/constants/global'

import './globals.scss'

import Header from '@common/components/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: `${PAGE_DEFAULT_TITLE} - ${PAGE_DEFAULT_DESCRIPTION}`,
	description: `Chuyên mỹ phẩm uy tín`,
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	const classes = classNames(inter.className, '')

	return (
		<html>
			<body className={classes}>
				<Header />
				{children}
			</body>
		</html>
	)
}

export default RootLayout
