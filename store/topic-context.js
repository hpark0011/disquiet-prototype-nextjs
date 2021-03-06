import { createContext } from 'react';

const topics = [
  {
    id: 'cktuqj3j4asvfasvasdvw',
    topicName: 'π μ μ²΄',
    displayOrder: 0,
    queryString: 'all',
  },
  {
    id: 'cktuqj3j419s50c90qkj0x8za',
    topicName: 'π‘ μ€κ° νλ«νΌ',
    displayOrder: 1,
    queryString: 'platform',
  },
  {
    id: 'cktuqjjqg19uo0c90wr7at572',
    topicName: 'π€³ λΌμ΄νμ€νμΌ',
    displayOrder: 2,
    queryString: 'lifestyle',
  },
  {
    id: 'cktuqjwuo19v70c90r32k5yjv',
    topicName: 'βοΈ νλμ¨μ΄',
    displayOrder: 3,
    queryString: 'hardware',
  },
  {
    id: 'cktxmpec00lk60b84bj3jd7ra',
    topicName: 'π λ―Έλμ΄',
    displayOrder: 4,
    queryString: 'media',
  },
  {
    id: 'cktuqk30w1a510a82e9ve5e3e',
    topicName: 'π¬ μμ',
    displayOrder: 5,
    queryString: 'social',
  },
  {
    id: 'cktxmqj880l860c86b7ldp716',
    topicName: 'π° κΈμ΅',
    displayOrder: 6,
    queryString: 'finance',
  },
  {
    id: 'cktuqkd201a5r0a82v7bmtkb5',
    topicName: 'π³ μ΄μ»€λ¨Έμ€',
    displayOrder: 7,
    queryString: 'ecommerce',
  },
  {
    id: 'cktuqkt9c19wz0c90mlmi1e4r',
    topicName: 'π» λΈμ½λ',
    displayOrder: 8,
    queryString: 'nocode',
  },
  {
    id: 'cktxmsoe00lq20b84m6lkbyfg',
    topicName: 'π¨ λμμΈ',
    displayOrder: 9,
    queryString: 'design',
  },
  {
    id: 'cktuqkwcg1a6y0a824fvfzbyh',
    topicName: 'π€ μΈκ³΅μ§λ₯',
    displayOrder: 10,
    queryString: 'ai',
  },
  {
    id: 'cktuqkpeg194o0b40mz70uvy4',
    topicName: 'π λΈλ‘μ²΄μΈ',
    displayOrder: 11,
    queryString: 'blockchain',
  },
  {
    id: 'cktuqkgww195l0d31vvk7l3et',
    topicName: 'π² μμ°μ±',
    displayOrder: 12,
    queryString: 'productivity',
  },
  {
    id: 'cktxmw2aw0lw40b840ir2he63',
    topicName: 'π λΆμν΄',
    displayOrder: 13,
    queryString: 'analytics',
  },
  {
    id: 'cktuqk97419400b40qjkhh8at',
    topicName: 'π« κ΅μ‘',
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
