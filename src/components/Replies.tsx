type CommentType = {
  username: string;
  userImagePath: string;
  commentText: string;
  likeNum: number;
  replies: CommentType[]
}
const Replies = (props:any) => {
  console.log(props.value)
const {username,userImagePath,commentText,likeNum,replies} = props.value;
  return (
    <div className="flex p-2 items-start space-x-2 pl-14">
      <img className="w-10 w-10 rounded-full" src={userImagePath}></img>
      <div className="bg-gray-200 rounded-lg p-2">
        <p className="font-semibold">{username}</p>
        <p>{commentText}</p>
              <div className='flex items-center'>
                <img className='w-4 h-4 mr-1' src='/like.svg'></img>
                <p className='text-gray-500'>{likeNum}</p>
              </div>
      </div>
    </div>
  
  )
  
  
}

export default Replies;