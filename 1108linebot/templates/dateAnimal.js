export default {
  type: 'bubble',
  hero: {
    type: 'image',
    url: 'https://scdn.line-apps.com/n/channel_devcenter/img/fx/01_1_cafe.png',
    size: 'full',
    aspectRatio: '20:13',
    aspectMode: 'cover',
    action: {
      type: 'uri',
      uri: 'http://linecorp.com/'
    }
  },
  body: {
    type: 'box',
    layout: 'vertical',
    contents: [
      {
        type: 'text',
        text: 'Brown Cafe',
        weight: 'bold',
        size: 'xl'
      },
      {
        type: 'box',
        layout: 'vertical',
        margin: 'lg',
        spacing: 'sm',
        contents: [
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '所在地',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                wrap: true,
                color: '#666666',
                size: 'md',
                flex: 5,
                text: 'xx園區'
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            spacing: 'sm',
            contents: [
              {
                type: 'text',
                text: '地址',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                text: 'Miraina Tower, 4-1-6 Shinjuku, Tokyo',
                wrap: true,
                color: '#666666',
                size: 'lg',
                flex: 5
              }
            ]
          },
          {
            type: 'box',
            layout: 'baseline',
            contents: [
              {
                type: 'text',
                text: '電話',
                color: '#aaaaaa',
                size: 'sm',
                flex: 1
              },
              {
                type: 'text',
                wrap: true,
                color: '#666666',
                size: 'md',
                flex: 5,
                text: '03-4861760'
              }
            ]
          }
        ]
      }
    ]
  },
  footer: {
    type: 'box',
    layout: 'vertical',
    spacing: 'sm',
    contents: [
      {
        type: 'button',
        style: 'link',
        height: 'sm',
        action: {
          type: 'uri',
          label: '撥打電話',
          uri: 'http://linecorp.com/'
        }
      },
      {
        type: 'button',
        action: {
          type: 'uri',
          label: '複製地址',
          uri: 'http://linecorp.com/'
        }
      }
    ],
    flex: 0
  }
}
