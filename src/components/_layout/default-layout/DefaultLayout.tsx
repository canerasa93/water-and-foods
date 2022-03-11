// Import Components
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Container from '../container/Container';

// Import Styled Components
import { StyledDefaultLayout } from './_defaultLayoutStyle';

function DefaultLayout(props) {
  // Desctruct Props
  const { children } = props;

  return (
    <StyledDefaultLayout>
      {/* App Header */}
      <Header />

      {/* App Content */}
      <Container>{children}</Container>

      {/* App Footer */}
      <Footer />
    </StyledDefaultLayout>
  );
}

export default DefaultLayout;
