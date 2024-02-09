
export interface Card{
    id:number
    imageUrl: string,
    title: string,
    price: number,
    isFavorite?: Boolean,
    isAdded?: Boolean,
    onClickAdd?: (item:Card) => void,
    onClickFavorite?: (item:Card)=>void,
    onClickDelete?:(item:number)=>void
    favoriteId?: number,
    parentId?: number
}

export type Basket=Pick<Card,"imageUrl"|"price"|"title"|"onClickDelete"|"id">