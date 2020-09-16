import _ from 'lodash'

const foo = {
  bar: [
    { buzz: 'bazz' }
  ]
}

const item = _.get(foo, 'bar.0.buzz')

console.log('item', item)

figma.showUI(__html__)