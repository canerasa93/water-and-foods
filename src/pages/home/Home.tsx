// Import React
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Import Store
import { RootState } from 'src/store/store';
import { test } from 'src/store/actions/test/test';

function Home() {
  // Store Variables
  const dispatch = useDispatch();

  const testdata = useSelector((state: RootState) => state?.globalReducer?.success?.data.companies);

  useEffect(() => {
    dispatch(test());
  }, []);

  useEffect(() => {
    console.log('testdata', testdata);
  }, [testdata]);

  return (
    <>
      {testdata?.[0]?.name}
    </>
  );
}

export default Home;
