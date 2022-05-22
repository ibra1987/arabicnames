const Comments = ({ comments }) => {
  return (
    <section className="w-full text-sm  flex flex-col justify-start items-start">
      {comments?.length > 0
        ? comments.map((comment) => {
            return (
              <div
                className="w-11/12 border my-2  p-2 flex flex-col justify-start items-start"
                key={comment._id}
              >
                <div className="w-full border-b  p-2 flex justify-start items-center ">
                  <div className="p-1 mx-4  w-10 h-10 flex justify-center items-center text-white rounded-full bg-pink-500">
                    {comment.name.split(" ").map((word) => {
                      return word.charAt(0).toUpperCase();
                    })}
                  </div>
                  <h2>{comment.name}</h2>
                </div>
                <div className="text-gray-700 px-4 my-4">{comment.body}</div>
              </div>
            );
          })
        : ""}
    </section>
  );
};

export default Comments;
