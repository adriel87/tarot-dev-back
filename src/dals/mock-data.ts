import { ObjectId } from 'mongodb'
import { TarotCard } from './tarotCard'
import { User } from './user'

export interface DB {
    tarotCards: TarotCard[],
    user: User[],
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
    ],
    user:[
      {
      _id: new ObjectId(),
      isAdmin: true,
      email: 'Adri',
      password: 'secret'
    },
    {
      _id: new ObjectId(),
      isAdmin: false,
      email: 'Irda',
      password: 'secret'
    }
  ]
}