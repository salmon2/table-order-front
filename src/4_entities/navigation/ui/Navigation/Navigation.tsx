import { Box, List, ListItem, ListItemButton, ListItemText } from '@mui/material';

type MenuItem = {
  label: string;
  href: string;
  isSelect: boolean;
};

type NavigationProps = {
  menuItemList: MenuItem[];
};

const Navigation = ({ menuItemList = [] }: NavigationProps) => {
  return (
    <Box role='presentation' onClick={() => {}}>
      <List>
        {menuItemList.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton href={item.href} selected={item.isSelect}>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
export default Navigation;
