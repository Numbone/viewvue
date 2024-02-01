export interface Card{
    id:number
    imageUrl: string,
    title: string,
    price: Number,
    isFavorite?: Boolean,
    isAdded?: Boolean,
    onClickAdd?: () => void,
    onClickFavorite?: ()=>void,
    favoriteId?: number,
    parentId?: number
}