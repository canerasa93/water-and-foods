// Import React
import { useState } from 'react';

// Import Styled Components
import { StyledSidebar } from './_sidebarStyle';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';

const staticSidebarBoxes = [
  {
    title: 'SORTING',
    scrollable: false,
    data: [
      {
        name: 'sorting_radios',
        label: 'Price low to high',
        id: 'lth'
      },
      {
        name: 'sorting_radios',
        label: 'Price high to low',
        id: 'htl'
      },
      {
        name: 'sorting_radios',
        label: 'New to old',
        id: 'nto'
      },
      {
        name: 'sorting_radios',
        label: 'Old to new',
        id: 'otn'
      }
    ]
  },
  {
    title: 'BRANDS',
    scrollable: true,
    data: [
      {
        name: 'all',
        label: 'All',
        id: 'all',
        count: 5
      },
      {
        name: 'all',
        label: 'gizem',
        id: 'gize',
        count: 5
      },
      {
        name: 'memo',
        label: 'memo',
        id: 'memo',
        count: 5
      },
      {
        name: 'caner',
        label: 'caner',
        id: 'caner',
        count: 5
      }
    ]
  },
  {
    title: 'TAGS',
    scrollable: true,
    data: [
      {
        name: 'all_tags',
        label: 'All',
        id: 'all_tags',
        count: 5

      },
      {
        name: 'asagizem',
        label: 'asagizem',
        id: 'asagizem',
        count: 5

      },
      {
        name: 'asacaner',
        label: 'giasacaner',
        id: 'asacanere',
        count: 5

      },
      {
        name: 'dilmenmemo',
        label: 'dilmenmemo',
        id: 'dilmenmemo',
        count: 5
      },
      {
        name: 'atman',
        label: 'atman',
        id: 'atman',
        count: 5
      }
    ]
  }
];

function Sidebar() {
  // Variables
  const [filterData] = useState(staticSidebarBoxes);

  return (
    <StyledSidebar>
      {filterData?.map((sidebarItem) => (
        <SidebarCard {...sidebarItem} key={sidebarItem?.title} />
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
