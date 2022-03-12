// Import Styled Components
import { StyledDefaultLayout, StyledMain } from './_defaultLayoutStyle';

// Import Components
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Container from '../container/Container';
import Sidebar from '../sidebar/Sidebar';

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
          {children}
        </Container>
      </StyledMain>

      {/* App Footer */}
      <Footer />
    </StyledDefaultLayout>
  );
}

export default DefaultLayout;
