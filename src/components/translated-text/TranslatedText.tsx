// Import React
import { Fragment } from 'react';

// Import Utils
import { translate } from '../../common/utils/translate/translateUtil';

// Import Utils

const TranslatedText = (props) => {
  const { label } = props;

  return <Fragment>{translate(label || '')}</Fragment>;
};

export default TranslatedText;
