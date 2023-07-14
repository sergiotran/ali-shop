import { NavigationItemProps } from '../types/navigation'

export const PAGE_DEFAULT_TITLE = 'ALI SHOP'
export const PAGE_DEFAULT_DESCRIPTION = 'Mỹ phẩm - Phụ kiện - Túi sách'

export const NAVIGATION_ITEMS: NavigationItemProps[] = [
	{
		value: 'Trang chủ',
		href: '/',
	},
	{
		value: 'Hàng mới về',
		href: '/hang-moi',
	},
	{
		value: 'Bán chạy',
		href: '/best-seller',
	},
	{
		value: 'Sữa rửa mặt',
		href: '/chuyen-muc/sua-rua-mat',
	},
	{
		value: 'Trang sức',
		href: '/chuyen-muc/trang-suc',
	},
	{
		value: 'Túi sách',
		href: '/chuyen-muc/tui-sach',
	},
	{
		value: 'Mỹ phẩm',
		href: '/chuyen-muc/my-pham',
	},
]
