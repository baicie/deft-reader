import {
  BookOutlined,
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Button, Dropdown, Flex, Layout, Menu, theme } from 'antd'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import styles from './index.module.scss'

const { Header, Sider, Content } = Layout

const DeftLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  const navigate = useNavigate()
  const location = useLocation()
  const { i18n, t } = useTranslation()

  const items: MenuProps['items'] = [
    {
      key: 'en',
      label: 'English',
      onClick: () => void i18n.changeLanguage('en'),
    },
    {
      key: 'cn',
      label: '中文',
      onClick: () => void i18n.changeLanguage('cn'),
    },
  ]

  return (
    <Layout style={{ height: '100vh' }}>
      <Sider
        breakpoint="lg"
        // collapsedWidth={0}
        trigger={null}
        collapsible
        collapsed={collapsed}
        onBreakpoint={(broken) => {
          setCollapsed(broken)
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={[
            {
              key: '/',
              icon: <BookOutlined />,
              label: t('layout.menu.books'),
              onClick: () => {
                navigate('/')
              },
            },
            {
              key: '/config',
              icon: <SettingOutlined />,
              label: t('layout.menu.config'),
              onClick: () => {
                navigate('/config')
              },
            },
            {
              key: '/log',
              icon: <ProfileOutlined />,
              label: t('layout.menu.log'),
              onClick: () => {
                navigate('/log')
              },
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: '0 24px 0 0', background: colorBgContainer }}>
          <Flex justify="space-between" align="center">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => {
                setCollapsed(!collapsed)
              }}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />

            <Dropdown menu={{ items }}>
              <div
                onClick={(e) => {
                  e.preventDefault()
                }}
                onKeyDown={(e) => {
                  e.preventDefault()
                }}
                role="button"
                tabIndex={0}
              >
                {t('layout.language')} <DownOutlined />
              </div>
            </Dropdown>
          </Flex>
        </Header>
        <Content
          className={styles.content}
          style={{
            margin: '24px 16px',
            overflow: 'auto',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  )
}

export default DeftLayout
