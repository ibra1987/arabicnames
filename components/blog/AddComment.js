import { useState } from "react";
import isEmail from "../../utils/helpers/isEmail";
import axios from "axios";

const AddComment = ({ id }) => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [comment, setComment] = useState({
    name: "",
    email: "",
    body: "",
  });
  const onChange = (e) => {
    setError("");
    setComment({
      ...comment,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = async (e) => {
    setError("");
    e.preventDefault();

    const { name, body, email } = comment;
    if (!name || !body || !email) {
      return setError("Please fill in all fields");
    }
    if (!isEmail(email)) setError("Please enter a valid email address");

    const finalComment = {
      name,
      body,
      postId: id,
      email,
      subscribed: checked,
    };
    try {
      await axios.post("/api/blog/comments/add-comment", finalComment, {
        headers: {
          "content-type": "application/json",
        },
      });
      setSuccess("Your comment is now published");
    } catch (error) {
      setError(error.response.data.error || "Something went wrong, try again ");
      console.log(error.message);
    }
  };
  return (
    <section className="w-full my-4 flex flex-col justify-start items-center">
      <h4 className="w-full p-2 bg-pink-400 text-white text-center">
        Add a comment
      </h4>
      {error && (
        <span className="text-white p-2 w-full my-1 bg-red-600">{error}</span>
      )}
      {success && (
        <span className="text-white p-2 w-full my-1 bg-green-600">
          {success}
        </span>
      )}
      <form
        onSubmit={onSubmit}
        className="w-full border p-4  rounded-md flex flex-col justify-start items-start"
      >
        <div className="border my-2 border-gray-400 w-full ">
          <input
            className="w-full outline-none p-2"
            type="text"
            placeholder="Your Name"
            onChange={onChange}
            name="name"
          />
        </div>
        <div className="border my-2 border-gray-400 w-full">
          <input
            type="email"
            placeholder="your email"
            className="w-full outline-none p-2"
            onChange={onChange}
            name="email"
          />
        </div>
        <div className="border my-2 border-gray-400 w-full ">
          <textarea
            onChange={onChange}
            className="w-full outline-none h-40 p-2 resize-none"
            name="body"
          ></textarea>
        </div>
        <div className="my-2 w-full flex justify-start items-center ">
          <label className="text-gray-600" htmlFor="check">
            {" "}
            Receive updates about this post?
          </label>
          <input
            name="check"
            type="checkbox"
            checked={checked}
            className=" mx-4 p-2"
            onChange={(e) => setChecked(e.target.checked)}
          />
        </div>
        <div className="w-3/5 ">
          <input
            className="bg-pink-400 text-white w-1/4 cursor-pointer px-6 py-2 text-lg tracking-widest rounded-md hover:bg-pink-500"
            type="submit"
            value="Post"
          />
        </div>
      </form>
    </section>
  );
};

export default AddComment;
