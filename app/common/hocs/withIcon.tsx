import type { ComponentType } from 'react'

type Props = {
	width?: number
	height?: number
	color?: string
}

const withIcon = (Component: ComponentType<Props>) => {
	const returnComponent = (props: Props) => {
		return (
			<Component
				{...props}
				width={props.width || 50}
				height={props.height || 50}
				color={props.color || '#333'}
			/>
		)
	}

	return returnComponent
}

export default withIcon
