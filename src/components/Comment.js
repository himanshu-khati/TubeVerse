const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="py-4 px-2 rounded-3xl border mx-2 my-3  ">
      <div className="flex items-center">
        <div>
          <img
            src="https://yt3.ggpht.com/yti/ADpuP3OgLFzT0W3iKwNzlzFXq-9fpjP8_2CfMdO2K3ZRaw=s88-c-k-c0x00ffffff-no-rj"
            alt=""
            className="w-10 rounded-full"
          />
        </div>
        <div className="comment px-3">
          <p className="font-bold text-sm">{name}</p>
          <p className="text-sm">{comment}</p>
        </div>
      </div>
    </div>
  );
};
export default Comment;
