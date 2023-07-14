import type { FC } from 'react'

type Props = {
	params: {
		slug: string
	}
}

const SpecificCategoryPage: FC<Props> = ({ params }) => {
	return <div>Chuyen muc {params.slug}</div>
}

export default SpecificCategoryPage
