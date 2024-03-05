import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
export const LandingPageBreadcromb = () => {
    return(
        <Breadcrumbs aria-label="breadcrumb" separator="" ml='15px' mt="3px">
        <Link underline="hover"  color="text.primary" href="" sx={{ fontWeight: 'bold' }}>
          Bags
        </Link>
        <Link
          underline="hover"
          color="text.primary"
        >
          Sneakers
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          aria-current="page"
        >
          Belt
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          aria-current="page"
        >
          Sunglasses
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          aria-current="page"
        >
          Breadcrumbs
        </Link>
      </Breadcrumbs>
    )
}