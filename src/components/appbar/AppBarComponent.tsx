import React from "react";
import {
  AppBar,
  Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Toolbar,
  Typography
} from "@mui/material";
import {
  cilMenu,
} from '@coreui/icons';
import CIcon from "@coreui/icons-react";
import router from "routes"

const AppBarComponent = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Box sx={{ display: 'flex', marginTop: 5 }}>
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { sm: 'block' } }}
            >
              <Button
                color='success'
                type='button'
                onClick={toggleDrawer(true)}
              >
                <CIcon
                  className='cicon'
                  icon={cilMenu}
                  width={30}
                />
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer
        open={open}
        onClose={toggleDrawer(false)}
      >
        <List className='mt-4'>
          {router.routes.map((route: any, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {
                    <CIcon
                      className='cicon'
                      icon={route.icon}
                      width={20}
                    />
                  }
                </ListItemIcon>
                <ListItemText
                  primary={route.title}
                  onClick={() => {
                    location.pathname = route.path
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default React.memo(AppBarComponent);