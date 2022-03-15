// Import Styled Components
import { StyledPageTitleWrapper, StyledPageTitle } from './_pageTitleStyle';

// Import Utils
import { getPageTitle } from 'src/common/utils/page-title/getPageTitle';

// Import Components
import TranslatedText from '../translated-text/TranslatedText';

function PageTitle() {
  //  Variables
  const pageTitleData = getPageTitle();

  return (
    <StyledPageTitleWrapper>
      <StyledPageTitle>
        <TranslatedText label={pageTitleData} />
      </StyledPageTitle>
    </StyledPageTitleWrapper>
  );
}

export default PageTitle;
