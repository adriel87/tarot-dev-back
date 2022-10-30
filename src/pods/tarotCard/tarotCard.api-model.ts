

export interface TarotCard {
    id: string,
    name: string,
    luck: Descriptions,
    love: Descriptions,
    deploy: Descriptions,
    imageURL: string
}

interface Descriptions { 
    normal: string,
    inverted: string
}