import CircularProgress from '@material-ui/core/CircularProgress';
import Link from 'next/link';
import Logo from '../../assets/icons/juntos.svg';
import SearchField from '../../components/DataEntry/SearchField';
import Button from '../../components/Foundation/Button';
import Image from '../../components/Media/Image';
import { useProducts } from '../../context/products';
import { StyledSection } from '../../styles/pages/home';

export default function Home(props) {
  const { products } = useProducts()

  function handleDisplayOptionsRule(option) {
    return option.title
  }

  if (!products) return <CircularProgress />

  return (
    <StyledSection format="google">
      <Image type="svg" Component={Logo} />
      <SearchField
          options={products}
          rule={handleDisplayOptionsRule}
        />
      <Button variant="contained" color="primary" size="large">
        <Link href="/products">
          <a>
            View All
          </a>
        </Link>
      </Button>
  </StyledSection>
  )
}
