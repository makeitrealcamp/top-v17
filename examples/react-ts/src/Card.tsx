// import PropTypes, { InferProps } from 'prop-types'

import { ReactNode, FC } from "react"

// const propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   numVotes: PropTypes.number
// }

// export type Props = InferProps<typeof propTypes>

export interface CardProps {
  title: string
  description: string
  numVotes?: number
}

const Card: FC<CardProps> = (props) => {
  const { title, description, numVotes = 0, children } = props
  return(
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <div>
        {numVotes && numVotes * 4} votes
      </div>
      { children }
    </div>
  )
}

Card.defaultProps = {
  numVotes: 0
}

export default Card
