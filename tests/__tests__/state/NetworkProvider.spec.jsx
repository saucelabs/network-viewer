import React from 'react';
import { List } from 'immutable';
import { shallow, mount } from 'enzyme';

import { initialState as defaultState } from './../../../src/state/network/reducer';
import NetworkProvider from './../../../src/state/network/NetworkProvider';

describe('NetworkProvider', () => {
  it('renders without crashing', () => {
    const element = shallow(
      <NetworkProvider>
        <div />
      </NetworkProvider>,
    );

    expect(element).toMatchSnapshot();
  });

  describe('onDataLoaded', () => {
    it('does not call the callback', () => {
      const props = {
        onDataLoaded: jest.fn(),
      };

      mount(
        <NetworkProvider {...props}>
          <div />
        </NetworkProvider>,
      );

      expect(props.onDataLoaded).not.toHaveBeenCalled();
    });

    describe('when gets actualData', () => {
      it('calls the callback', () => {
        const actualData = new List(['entry']);
        const initialState = defaultState.set('actualData', actualData);
        const props = {
          initialState,
          onDataLoaded: jest.fn(),
        };

        mount(
          <NetworkProvider {...props}>
            <div />
          </NetworkProvider>,
        );

        expect(props.onDataLoaded).toHaveBeenCalledWith(actualData);
      });
    });
  });

  describe('onDataError', () => {
    it('does not call the callback', () => {
      const props = {
        onDataError: jest.fn(),
      };

      mount(
        <NetworkProvider {...props}>
          <div />
        </NetworkProvider>,
      );

      expect(props.onDataError).not.toHaveBeenCalled();
    });

    describe('when gets error', () => {
      it('calls the callback', () => {
        const error = new Error('Something failed!');
        const initialState = defaultState.set('error', error);
        const props = {
          initialState,
          onDataError: jest.fn(),
        };

        mount(
          <NetworkProvider {...props}>
            <div />
          </NetworkProvider>,
        );

        expect(props.onDataError).toHaveBeenCalledWith(error);
      });
    });
  });
});
