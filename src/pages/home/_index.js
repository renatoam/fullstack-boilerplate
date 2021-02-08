import CircularProgress from '@material-ui/core/CircularProgress';
import Link from 'next/link';
import Logo from '../../assets/icons/juntos.svg';
import SearchField from '../../components/DataEntry/SearchField';
import Button from '../../components/Foundation/Button';
import Image from '../../components/Media/Image';
import { useCustomers } from "../../context/customers";
import { StyledSection } from "../../styles/pages/home";

export default function Home(props) {
  const { customers } = useCustomers()
  const { data, error, mutate, loading } = customers

  function handleDisplayOptionsRule(option) {
    return `${option.name?.first} ${option.name?.last}`
  }

  if (loading) return <CircularProgress />

  return (
    <StyledSection format="google">
      <Image type="svg" Component={Logo} />
      <SearchField
          options={data}
          rule={handleDisplayOptionsRule}
        />
      <Button variant="contained" color="primary" size="large">
        <Link href="/customer">
          <a>
            View All
          </a>
        </Link>
      </Button>
  </StyledSection>
  )
}
