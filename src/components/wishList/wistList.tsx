import { TouchableOpacity } from "react-native"
import { WishListType } from "./interface"
import Iconn from 'react-native-vector-icons/AntDesign'
const WishList:React.FC<WishListType>=({
  wishList,
  handleAddWishList,
  handleRemoveWishList
})=>{
  const handleWishList = () => {
    if(wishList){
      handleRemoveWishList()
    }else{
      handleAddWishList()
    }
  }
  return(
    <TouchableOpacity onPress={()=>handleWishList()}>
    {wishList?<Iconn name="heart" size={27} color="#C94C4C"/>:<Iconn name="hearto" size={27}/>}
    </TouchableOpacity>
  )
}
export default WishList