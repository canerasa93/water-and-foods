// Import Styled Components
import { StyledDefaultLayout, StyledMain } from './_defaultLayoutStyle';

// Import Components
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Container from '../container/Container';
import Sidebar from '../sidebar/Sidebar';
import SidebarRight from '../sidebar/SidebarRight';
import MainSection from '../main-section/MainSection';

function DefaultLayout(props) {
  // Desctruct Props
  const { children } = props;

  return (
    <StyledDefaultLayout>
      {/* App Header */}
      <Header />

      {/* App Content */}
      <StyledMain>
        <Container>
          <Sidebar />
          <MainSection>{children}</MainSection>
          <SidebarRight />
        </Container>
      </StyledMain>

      {/* App Footer */}
      <Footer />
    </StyledDefaultLayout>
  );
}

export default DefaultLayout;
