import React from 'react';

import Search from './../Components/Filters/Search';
import Styles from './FilterContainer.styles.scss';
import ResetButton from '../Components/Actions/ResetButton';
import StatusFilter from '../Components/Filters/StatusFilter';
import ExportHarButton from '../Components/Actions/ExportHarButton';
import PauseResumeButton from '../Components/Actions/PauseResumeButton';
import TypeFilter from '../Components/Filters/TypeFilter';
import ImportHAR from '../Components/Import/ImportHAR';
import { useTheme } from '../state/theme/Context';
import { useNetwork } from '../state/network/Context';

const FilterContainer = () => {
  const { state } = useNetwork();
  const {
    showImportHar,
    showExportHar,
    showPauseResume,
  } = useTheme();

  return (
    <section className={Styles['filters-container']}>
      <div className={Styles['filter-row']}>
        <StatusFilter />
        <Search {...state.get('search')} />
        {showPauseResume && <PauseResumeButton {...state.get('rawData')} />}
        <ResetButton />
        {showExportHar && <ExportHarButton />}
        {showImportHar && <ImportHAR />}
      </div>

      <div className={Styles['type-filter-row']}>
        <TypeFilter />
      </div>
    </section>
  );
};

export default FilterContainer;
