import React from 'react'
import {
	PAGE_DEFAULT_TITLE,
	PAGE_DEFAULT_DESCRIPTION,
} from '@common/constants/global'

const Brand = () => {
	return (
		<div className='self-center py-1 border-r border-r-gray-200 pr-3'>
			<h1 className='font-bold text-md text-center text-pink-400 transition duration-100 hover:text-pink-500 cursor-pointer'>
				{PAGE_DEFAULT_TITLE}
			</h1>
			<h4 className='text-xs text-gray-500'>{PAGE_DEFAULT_DESCRIPTION}</h4>
		</div>
	)
}

export default Brand
