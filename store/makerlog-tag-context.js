import { createContext } from 'react';

const makerlogTagList = [
  { value: 'insight', label: '# 인사이트' },
  { value: 'idea', label: '# 아이디어' },
  { value: 'mvp', label: '# MVP' },
  { value: 'milestone', label: '# 마일스톤' },
  { value: 'findteammate', label: '# 팀원찾기' },
];

const MakerlogTagContext = createContext();

const context = { makerlogTagList };

export const MakerlogTagsProvider = ({ children }) => {
  return (
    <MakerlogTagContext.Provider value={context}>
      {children}
    </MakerlogTagContext.Provider>
  );
};

export { MakerlogTagContext };
