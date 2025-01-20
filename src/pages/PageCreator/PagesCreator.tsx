import React, { useState } from 'react'
import remarkGfm from 'remark-gfm'
import MdEditor from 'react-markdown-editor-lite'
import './PageCreator.css'
import 'react-markdown-editor-lite/lib/index.css'
import Markdown from 'react-markdown'
import { Button, Drawer, Typography } from '@iot/portal-core-components'

const markdown = `![vodafone](https://www.trendwatching.com/hs-fs/hubfs/CLP%20Logos/Vodafone%20CLP.png?width=256&height=256&name=Vodafone%20CLP.png)

A paragraph with *emphasis* and **strong importance**.

> A block quote with ~strikethrough~ and a URL: https://reactjs.org.

* Lists
* [ ] todo
* [x] done

A table:

| Head | Head | Head |
| --- | --- | --- |
| Data | Data | Data |
| Data | Data | Data |

`

const PagesCreator = () => {
  const [{ text }, setText] = useState({ text: markdown })

  return (
    <div className="p-4">
      <header className="py-6 flex items-center justify-between mx-auto">
        <Typography ariaLabel={''} message="Pages Creator" size="2xl" />

        <Button
          text="Test your created drawer"
          ariaLabel="open"
          variant="operation"
        />
        <Drawer ariaLabel="html-mark" drawerSize="medium">
          <Drawer.Content>
            <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
          </Drawer.Content>
        </Drawer>
      </header>
      <MdEditor
        value={text}
        style={{ height: '800px', width: '100%' }}
        onChange={setText}
        renderHTML={(text: string) => (
          <Markdown remarkPlugins={[remarkGfm]}>{text}</Markdown>
        )}
      />
    </div>
  )
}

export default PagesCreator
