// Import Styled Components
import { StyledSidebar } from './_sidebarStyle';

// Import Components
import SidebarCard from 'src/components/sidebar-card/SidebarCard';
import Checkbox from '../../form/checkbox/Checkbox';
import Radio from '../../form/radio/Radio';

function Sidebar() {
  // Variables
  const staticSidebarBoxes = [
    {
      title: 'SORTING',
      scrollable: false,
      search: false
    },
    {
      title: 'BRANDS',
      scrollable: true,
      search: true
    },
    {
      title: 'TAGS',
      scrollable: true,
      search: true
    }
  ];

  return (
    <StyledSidebar>
      <Checkbox id={'ch1'} name={'title'} label={'title'} handleOnChange={(value, name) => console.log('value + name: ', value + ' ' + name)}/>
      <Radio id={'bir'} name={'title' + '_radio'} label={'title 1'} handleOnChange={(value, id) => console.log('value + id radio: ', value + ' ' + id)}/>
      <Radio id={'iki'} name={'title' + '_radio'} label={'title 2'} handleOnChange={(value, id) => console.log('value + id radio: ', value + ' ' + id)}/>
      <Radio id={'uc'} name={'title' + '_radio'} label={'title 3'} handleOnChange={(value, id) => console.log('value + id radio: ', value + ' ' + id)}/>

      {staticSidebarBoxes?.map((sidebarItem) => (
        <SidebarCard {...sidebarItem} key={sidebarItem.title} />
      ))}
    </StyledSidebar>
  );
}

export default Sidebar;
