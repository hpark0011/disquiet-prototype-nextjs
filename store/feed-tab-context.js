import { createContext, useState } from 'react';

const tabs = [
  { id: 0, label: '전체', query: 'all', width: '23.92px' },
  { id: 1, label: '프로덕트', query: 'product', width: '47.84px' },
  { id: 2, label: '메이커일지', query: 'makerlog', width: '59.81px' },
  { id: 3, label: 'Q&A', query: 'qa', width: '26.09px' },
  { id: 4, label: '팀원 찾기', query: 'find-teammate', width: '50.77px' },
];

const FeedTabContext = createContext();

export const FeedTabProvider = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const context = {
    tabs,
    tabIndex,
    setTabIndex,
  };

  return (
    <FeedTabContext.Provider value={context}>
      {children}
    </FeedTabContext.Provider>
  );
};

export { FeedTabContext };
