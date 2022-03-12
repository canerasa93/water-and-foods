// Import Styled Components
import { StyledSidebar } from './_sidebarStyle';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';

function Sidebar() {
  // Variables
  const staticSidebarBoxes = [
    {
      title: 'SORTING',
      scrollable: false
    },
    {
      title: 'BRANDS',
      scrollable: true
    },
    {
      title: 'TAGS',
      scrollable: true
    }
  ];

  return (
    <StyledSidebar>
      {staticSidebarBoxes?.map((sidebarItem) => (
        <SidebarCard {...sidebarItem} key={sidebarItem.title} />
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
