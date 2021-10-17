import { createContext } from 'react';

const topics = [
  {
    id: 'cktuqj3j4asvfasvasdvw',
    topicName: '🌕 전체',
    displayOrder: 0,
    queryString: 'all',
  },
  {
    id: 'cktuqj3j419s50c90qkj0x8za',
    topicName: '📡 중개 플랫폼',
    displayOrder: 1,
    queryString: 'platform',
  },
  {
    id: 'cktuqjjqg19uo0c90wr7at572',
    topicName: '🤳 라이프스타일',
    displayOrder: 2,
    queryString: 'lifestyle',
  },
  {
    id: 'cktuqjwuo19v70c90r32k5yjv',
    topicName: '⌚️ 하드웨어',
    displayOrder: 3,
    queryString: 'hardware',
  },
  {
    id: 'cktxmpec00lk60b84bj3jd7ra',
    topicName: '🎙 미디어',
    displayOrder: 4,
    queryString: 'media',
  },
  {
    id: 'cktuqk30w1a510a82e9ve5e3e',
    topicName: '👬 소셜',
    displayOrder: 5,
    queryString: 'social',
  },
  {
    id: 'cktxmqj880l860c86b7ldp716',
    topicName: '💰 금융',
    displayOrder: 6,
    queryString: 'finance',
  },
  {
    id: 'cktuqkd201a5r0a82v7bmtkb5',
    topicName: '💳 이커머스',
    displayOrder: 7,
    queryString: 'ecommerce',
  },
  {
    id: 'cktuqkt9c19wz0c90mlmi1e4r',
    topicName: '💻 노코드',
    displayOrder: 8,
    queryString: 'nocode',
  },
  {
    id: 'cktxmsoe00lq20b84m6lkbyfg',
    topicName: '🎨 디자인',
    displayOrder: 9,
    queryString: 'design',
  },
  {
    id: 'cktuqkwcg1a6y0a824fvfzbyh',
    topicName: '🤖 인공지능',
    displayOrder: 10,
    queryString: 'ai',
  },
  {
    id: 'cktuqkpeg194o0b40mz70uvy4',
    topicName: '🔗 블록체인',
    displayOrder: 11,
    queryString: 'blockchain',
  },
  {
    id: 'cktuqkgww195l0d31vvk7l3et',
    topicName: '🚲 생산성',
    displayOrder: 12,
    queryString: 'productivity',
  },
  {
    id: 'cktxmw2aw0lw40b840ir2he63',
    topicName: '📊 분석툴',
    displayOrder: 13,
    queryString: 'analytics',
  },
  {
    id: 'cktuqk97419400b40qjkhh8at',
    topicName: '🏫 교육',
    displayOrder: 14,
    queryString: 'education',
  },
];

const TopicsContext = createContext();

const context = { topics };

export const TopicsProvider = ({ children }) => {
  return (
    <TopicsContext.Provider value={context}>{children}</TopicsContext.Provider>
  );
};

export { TopicsContext };
