import styled from 'styled-components';
import MyCard from './MyCard';

const MyMakerlogs = ({ makerlogs }) => {
  return (
    <MyMakerlogsContainer>
      {makerlogs &&
        makerlogs.map((makerlog) => {
          const { id, title, content, date, tags } = makerlog;
          return (
            <div key={id} className='makerlog'>
              <div className='date'>{date}</div>
              <div className='timeline-graph'>
                <div className='line' />
              </div>
              <div className='card-wrapper'>
                <div className='tags'>
                  {tags.map((index, tag) => {
                    <div key={index} className='tag'>
                      {tag}
                    </div>;
                  })}
                </div>
                <MyCard />
                <div className='card'></div>
              </div>
            </div>
          );
        })}
    </MyMakerlogsContainer>
  );
};

const MyMakerlogsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 16px;

  .makerlog {
    display: flex;
    width: 100%;
  }

  .date {
    display: flex;
    justify-content: flex-end;
    color: #8e8e8e;
    font-size: 12px;
    line-height: 1em;
    margin-right: 8px;
    width: 60px;
  }

  .timeline-graph {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 12px;
    background-color: transparent;
    position: relative;
  }

  .line {
    width: 2px;
    height: 100%;
    background-color: #f5f5f7;
  }

  .line::before {
    content: '';
    display: flex;
    width: 6px;
    height: 6px;
    background-color: #fff;
    border-radius: 32px;
    border: 3px solid #20ab98;
    position: absolute;
    float: left;
    top: 0;
    left: 0px;
  }

  .card-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 16px;
    padding-bottom: 24px;
  }

  .tags {
    display: flex;
    margin-top: -4px;
    margin-bottom: 12px;
  }

  .tag {
    font-size: 12px;
    line-height: 1em;
    padding: 4px 8px;
    background: #e9f7f5;
    border-radius: 32px;
    color: #20ab98;
    margin-right: 6px;
  }

  .card {
    width: 516px;
    height: 580px;
    background-color: #f5f5f7;
    border-radius: 24px;
  }
`;

export default MyMakerlogs;
