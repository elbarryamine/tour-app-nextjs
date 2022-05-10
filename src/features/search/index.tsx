import React, { Fragment } from 'react'
import { Navigation, LoadingPage } from 'components'
import { Grid, Container, Alert, AlertIcon, AlertTitle } from '@chakra-ui/react'
import { useGetTours } from 'api/tour/useGetTours'
import TourCard from 'components/tour-card'
import Header from './components/header'
import Search from './components/search'
import Filters from './components/filters'

export default function SearchPage() {
  const { data, loading, error } = useGetTours()
  const [loaded, setloaded] = React.useState<boolean>(false)
  const [tours, setTours] = React.useState<Tour[]>([])
  React.useEffect(() => {
    if (!data || loading) return
    setTours(data)
    setloaded(true)
  }, [data, loading])
  if (error)
    return (
      <Alert status="error">
        <AlertIcon />
        <AlertTitle>{error.message}</AlertTitle>
      </Alert>
    )
  if (!loaded) return <LoadingPage />
  return (
    <Fragment>
      <Navigation />
      <Container maxW="1440px" h="100%" alignItems="center" justifyContent="space-between">
        <Header />
        <Search />
        <Filters />
        <Grid
          templateColumns={{ sm: '250px', md: 'repeat(2,250px)', lg: 'repeat(4,250px)', xl: 'repeat(5,250px)' }}
          alignItems="center"
          justifyContent="space-between"
          rowGap="50px"
          pt="20px">
          {tours.map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </Grid>
      </Container>
    </Fragment>
  )
}
