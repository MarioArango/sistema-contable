'use client';

import { StyleProvider, createCache, extractStyle } from '@ant-design/cssinjs'
import { ConfigProvider, Empty } from 'antd'
import { useServerInsertedHTML } from 'next/navigation'
import themeConfig from './themeConfig'
import { IChildren } from '@/interfaces/IChildren';

const cache = createCache()
const ProviderDesign = ({ children }: IChildren) => {
  useServerInsertedHTML(() => (
    <style id="antd" dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />
  ))

  return (
    <StyleProvider cache={cache}>
      <ConfigProvider
        virtual={true}
        theme={themeConfig}
        locale={{
          locale: 'es-PE',
        }}
        direction={'ltr'}
        renderEmpty={() => <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
      >
        {children}
      </ConfigProvider>
    </StyleProvider>
  )
}

export default ProviderDesign