// Import React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Components
import TranslatedText from 'src/components/translated-text/TranslatedText';

// Import Store
import { RootState } from 'src/store/store';
import { test } from 'src/store/actions/test/test';

function Home() {
  // Store Variables
  const dispatch = useDispatch();

  const testdata = useSelector((state: RootState) => state?.globalReducer?.success?.data);

  useEffect(() => {
    dispatch(test());
  }, []);

  useEffect(() => {
    console.log('testdata', testdata);
  }, [testdata]);

  return (
    <>
      {testdata?.title} <br />
      <TranslatedText label="GLOBAL.TEST" />
    </>
  );
}

export default Home;
