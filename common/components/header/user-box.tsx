import React from 'react'

const UserBox = () => {
	return (
		<div className='flex flex-row items-center gap-3 pl-3'>
			{/* <div className='rounded-full w-8 h-8 bg-gray-300' /> */}
			<div className='text-sm font-bold'>
				<a href='#'>Đăng nhập</a>
				<span className='text-xs text-gray-500 px-1'>hoặc</span>
				<a href='#'>Đăng ký</a>
			</div>
		</div>
	)
}

export default UserBox
