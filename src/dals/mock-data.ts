import { ObjectId } from 'mongodb'
import { TarotCard } from './tarotCard'

export interface DB {
    tarotCards: TarotCard[]
}

export const db: DB = {
    tarotCards:[
        {
          _id: new ObjectId(),
          name: 'el ce del mal',
          deploy:{
            inverted:'el pc del super mal',
            normal:'el pc del mal'
          },
          love:{
            inverted:'poco amor',
            normal:'mucho amor'
          },
          image:'asdfas',
          luck:{
            inverted:'sin suerte',
            normal: 'comprate la loteria'
          }
        },
        {
            _id: new ObjectId(),
            name: 'el gato del mal',
            deploy:{
              inverted:'el pc del super mal',
              normal:'el pc del mal'
            },
            love:{
              inverted:'poco amor',
              normal:'mucho amor'
            },
            image:'asdfas',
            luck:{
              inverted:'sin suerte',
              normal: 'comprate la loteria'
            }
          },
          {
            _id: new ObjectId(),
            name: 'el perro del mal',
            deploy:{
              inverted:'el pc del super mal',
              normal:'el pc del mal'
            },
            love:{
              inverted:'poco amor',
              normal:'mucho amor'
            },
            image:'asdfas',
            luck:{
              inverted:'sin suerte',
              normal: 'comprate la loteria'
            }
          },
          {
            _id: new ObjectId(),
            name: 'el caracol del mal',
            deploy:{
              inverted:'el pc del super mal',
              normal:'el pc del mal'
            },
            love:{
              inverted:'poco amor',
              normal:'mucho amor'
            },
            image:'asdfas',
            luck:{
              inverted:'sin suerte',
              normal: 'comprate la loteria'
            }
          }
    ]
}