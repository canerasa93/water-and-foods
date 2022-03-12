// Import Constants
import { BUTTON_VARIANTS } from 'src/common/constants/button/buttonConstants';

// Import Commponents
import Button from '../button/Button';

function FilterButtons() {
  // Variables

  const filterFakeData = [
    {
        title: 'mug'
    },
    {
        title: 'shirt'
    },
  ]

  return (
    <div>
      {filterFakeData?.map((filterbutton, index) => {
        let mod: number = (index %= 2);

        return (
          <Button
            translated={false}
            label={filterbutton?.title}
            margin="0 10px 0 0"
            variant={mod === 0 ? BUTTON_VARIANTS.PRIMARY : BUTTON_VARIANTS.SECONDARY}
          />
        );
      })}
    </div>
  );
}

export default FilterButtons;
