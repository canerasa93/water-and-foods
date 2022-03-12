// Import Styled Components
import { StyledSidebar } from './_sidebarStyle';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';

function Sidebar() {
  // Variables
  const staticSidebarBoxes = [
    {
      title: 'SORTING'
    },
    {
      title: 'BRANDS'
    },
    {
      title: 'TAGS'
    }
  ];

  return (
    <StyledSidebar>
      {staticSidebarBoxes?.map((sidebarItem) => (
        <SidebarCard title={sidebarItem.title} key={sidebarItem.title} />
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
