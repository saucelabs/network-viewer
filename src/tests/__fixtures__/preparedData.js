import { List } from 'immutable';

import networkDataMock from './network.json';
import { prepareViewerData } from './../../utils';

const preparedMockData = new List(prepareViewerData(networkDataMock.log.entries).data);

export default preparedMockData;
