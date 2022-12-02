import { Toolbar, AppBar, Box, Link } from '@mui/material';

const rightLink = {
    fontSize: 16,
    color: 'common.white',
    ml: 3,
};

const Navbar = () => {
    return (
        <div>
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <Box sx={{ flex: 1 }} />
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              href="/"
              sx={{ fontSize: 24 }}
            >
              {'Hotel Hell'}
            </Link>
            <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
              <Link
                color="inherit"
                variant="h6"
                underline="none"
                href="https://www.amazon.com/Hotel-Hell-Beverly-Hills-Beyond/dp/1944297340/ref=sr_1_7?crid=1P1BOQZME4ZA4&keywords=hotel+hell&qid=1669950057&s=books&sprefix=hotel+hell%2Cstripbooks%2C95&sr=1-7"
                sx={{ ...rightLink, color: 'secondary.main' }}
              >
                {'Get it Today'}
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Toolbar />
      </div>
    )
}

export default Navbar
