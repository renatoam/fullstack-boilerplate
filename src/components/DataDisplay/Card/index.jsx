import PropTypes from 'prop-types';
// import { capitalize } from '../../../helpers/handleString';
// import Heading from '../../Foundation/Heading';
// import Text from '../../Foundation/Text';
// import Avatar from '../Avatar';
import { StyledCard } from './style';

export default function Card({ data }) {
  // const fullName = `${capitalize(data.name?.first)} ${capitalize(data.name?.last)}`

  return (
    <StyledCard>
      <p>{data.title}</p>
      {/* <Avatar src={data.picture?.large} width={150} height={150} />
      <Heading variant="h6" text={fullName} />
      <Text text={data.location?.street} />
      <Text text={data.location?.city} />
      <Text text={data.location?.state + ' - ' + data.location?.postcode} /> */}
    </StyledCard>
  )
}

Card.propTypes = {
  data: PropTypes.array
}
