export interface Card{
    imageUrl?: String,
    title: String,
    price: Number,
    isFavorite: Boolean,
    isAdded: Boolean,
    onClickAdd: () => void,
    onClickFavorite: ()=>void
}