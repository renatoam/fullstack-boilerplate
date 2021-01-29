import Card from '../../components/DataDisplay/Card'
import Showcase from '../../components/DataDisplay/Showcase'
import Filter from '../../components/DataEntry/Filter'

export default function Customer(props) {
  return (
    <main>
      <Filter />
      <Showcase>
        <Card />
        <Card />
        <Card />
      </Showcase>
    </main>
  )
}
