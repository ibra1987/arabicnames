import { useState } from "react";

const Contact = () => {
  const [localError, setlocalError] = useState("");
  const [success, setSuccess] = useState("");
  const [formData, setFormData] = useState({
    name: " ",
    email: " ",
    body: " ",
  });
  const onChange = (e) => {
    setlocalError("");
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setlocalError("");
    setSuccess("");
  };

  return (
    <section className="w-full h-screen bg-gray-100 flex flex-col justify-center items-center">
      <h1>Send us a message</h1>
      <form
        className="w-3/5 flex p-2 flex-col justify-start items-center"
        onSubmit={onSubmit}
      >
        <div className="w-full flex justify-center items-center my-2">
          <input
            type="text"
            placeholder="Your name"
            className="p-2 w-3/5 outline-none border rounded border-gray-300"
            name="name"
            value={formData.name}
            onChange={onChange}
          />
        </div>
        <div className="w-full flex justify-center items-center my-2 ">
          <input
            className="p-2 w-3/5 outline-none border rounded border-gray-300"
            type="email"
            placeholder="Your email"
            name="email"
            value={formData.email}
            onChange={onChange}
          />
        </div>
        <div className="w-full flex justify-center items-center my-2 ">
          <textarea
            rows="10"
            className="p-2 w-3/5 outline-none border rounded border-gray-300 resize-none"
            placeholder="your message..."
            name="body"
            value={formData.body}
            onChange={onChange}
          ></textarea>
        </div>
        <div className="w-full flex justify-center items-center my-2 ">
          <input
            type="submit"
            value="Send"
            className=" w-3/5 p-2 rounded bg-pink-500 cursor-pointer hover:bg-pink-600 tracking-widest text-xl text-white"
          />
        </div>
      </form>
    </section>
  );
};
Contact.layout = "defaultLayout";

export default Contact;
