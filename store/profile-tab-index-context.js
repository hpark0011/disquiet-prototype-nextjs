import { createContext, useState } from 'react';

const tabs = [
  { id: 0, label: '포스트', query: 'posts' },
  { id: 1, label: '스토리', query: 'stories' },
  { id: 2, label: '스크랩북', query: 'scrapbook' },
  { id: 3, label: '투표한 포스트', query: 'upvoted' },
];

const ProfileTabIndexContext = createContext();

export const ProfileTabIndexProvider = ({ children }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const context = {
    tabs,
    tabIndex,
    setTabIndex,
  };

  return (
    <ProfileTabIndexContext.Provider value={context}>
      {children}
    </ProfileTabIndexContext.Provider>
  );
};

export { ProfileTabIndexContext };
