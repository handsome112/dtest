import React from 'react';
import { Menu, Dropdown } from 'antd';
import Link from 'next/link';
import { connect } from 'react-redux';
import { updateUIValue } from 'src/redux/ui/actions';
import {
  IPerformerCategogies,
  IDataResponse,
  IPerformer,
  IStudio,
  IUser,
  StreamSettings
} from 'src/interfaces';
import './left-header-content.less';
import { SETTING_KEYS } from 'src/constants';
import classnames from 'classnames';
import { MoreOutlined } from '@ant-design/icons';

interface Props {
  loggedIn?: boolean;
  currentUser?: IPerformer & IUser & IStudio;
  performerCategories?: IDataResponse<IPerformerCategogies>;
  settings?: StreamSettings;
  pluralTextModel?: string;
}

const LeftHeaderContent = ({
  loggedIn,
  currentUser,
  pluralTextModel,
  performerCategories,
  settings
}: Props) => {
  const [selectedKey, setSelectedKey] = React.useState('');
  const path = settings[SETTING_KEYS.OPTION_FOR_GROUP] === 'webrtc' ? 'webrtc/' : '';
  const categoryMenu = (
    <Menu>
      {performerCategories.data.length > 0
        && performerCategories.data.map((category: IPerformerCategogies) => (
          <Menu.Item
            key={`category-${category._id}`}
            onClick={() => {
              setSelectedKey('');
            }}
          >
            <Link
              href={{
                pathname: '/performer-category',
                query: {
                  slug: category.slug,
                  category: JSON.stringify(category)
                }
              }}
              as={`/performer-category/${category.slug}`}
            >
              <a>{category.name}</a>
            </Link>
          </Menu.Item>
        ))}
    </Menu>
  );

  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          setSelectedKey('');
        }}
      >
        <Link href="/live">
          <a>Go Live</a>
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link href={`/live/${path}groupchat`}>
          <a>Group Chat</a>
        </Link>
      </Menu.Item>
    </Menu>
  );

  return (
    <nav>
      <ul
        className="ant-menu ant-menu-root ant-menu-horizontal ant-menu-light"
        style={{ display: 'flex' }}
      >
        <li
          className={classnames('ant-menu-item', {
            'ant-menu-item-selected': selectedKey === 'home'
          })}
          onClick={() => {
            setSelectedKey('home');
          }}
          aria-hidden="true"
        >
          <Link href="/" shallow>
            <a>Home</a>
          </Link>
        </li>
        <Dropdown overlay={categoryMenu}>
          <li className="ant-menu-item">
            <span>Categories</span>
          </li>
        </Dropdown>
        <li
          className={classnames('ant-menu-item', {
            'ant-menu-item-selected': selectedKey === 'model'
          })}
          onClick={() => {
            setSelectedKey('model');
          }}
          aria-hidden="true"
        >
          <Link href="/performer-category" as="/all-models">
            <a>{`All ${pluralTextModel || 'Models'}`}</a>
          </Link>
        </li>
        {loggedIn && currentUser?._id && currentUser?.role === 'performer' && (
          <>
            <li
              className={classnames('ant-menu-item hidden-sm', {
                'ant-menu-item-selected': selectedKey === 'live'
              })}
              onClick={() => {
                setSelectedKey('live');
              }}
              aria-hidden="true"
            >
              <Link href="/live">
                <a>Go Live</a>
              </Link>
            </li>
            <li
              className={classnames('ant-menu-item hidden-sm', {
                'ant-menu-item-selected': selectedKey === 'groupchat'
              })}
              onClick={() => {
                setSelectedKey('groupchat');
              }}
              aria-hidden="true"
            >
              <Link href={`/live/${path}groupchat`}>
                <a>Group Chat</a>
              </Link>
            </li>
            <Dropdown overlay={menu}>
              <li className="ant-menu-item visible-sm">
                <MoreOutlined />
              </li>
            </Dropdown>
          </>
        )}
      </ul>
    </nav>
  );
};

LeftHeaderContent.defaultProps = {
  loggedIn: false,
  currentUser: null,
  settings: null,
  pluralTextModel: '',
  performerCategories: {
    total: 0,
    data: []
  }
};
const mapStateToProps = (state) => ({
  loggedIn: state.auth.loggedIn,
  ...state.performer.performers,
  ...state.ui
});
const mapDispatch = { updateUIValue };
export default connect(mapStateToProps, mapDispatch)(LeftHeaderContent);
