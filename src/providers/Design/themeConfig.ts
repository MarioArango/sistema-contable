import type { ThemeConfig } from 'antd'
import { theme } from 'antd';

const { compactAlgorithm } = theme

const themeConfig: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#ec2008',
    colorTextDisabled: '#363535',
    borderRadius: 3,
    margin: 8,
    fontFamily: '',
  },
  algorithm: compactAlgorithm,
}

export default themeConfig