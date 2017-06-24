import React from 'react';
import { shallow } from 'enzyme';
import { fromJS } from 'immutable';
import SearchResult from '../index';

describe('<SearchResult />', () => {
  const props = fromJS({
    video: {
      snippet: {
        title: 'test title',
        description: 'test description',
        thumbnails: {
          medium: {
            url: 'http://www.testurl.com',
          },
        },
      },
    },
    selectVideo: () => null,
  });
  const renderedComponent = shallow(<SearchResult video={props.get('video')} selectVideo={props.get('selectVideo')} />);
  const snippet = props.get('video').get('snippet');

  it('renders image', () => {
    expect(renderedComponent.find('img').node).toBeDefined();
  });

  it('renders title', () => {
    expect(renderedComponent.find('.search-result-info-title').contains(snippet.get('title'))).toEqual(true);
  });

  it('renders description', () => {
    expect(renderedComponent.find('.search-result-info-description').contains(snippet.get('description'))).toEqual(true);
  });
});
