import companiesReducer from './companies/companiesReducer';
import globalReducer from './globalReducer';
import productsReducer from './products/productsReducer';
import tagsReducer from './tags/tagsReducer';
import typesReducer from './types/typesReducer';
import basketReducer from './basket/basketReducer';
import mobileControlsReducer from './mobile-controls/mobileControlsReducer';

const reducers = {
  globalReducer,
  companiesReducer,
  productsReducer,
  tagsReducer,
  typesReducer,
  basketReducer,
  mobileControlsReducer
};

export default reducers;
