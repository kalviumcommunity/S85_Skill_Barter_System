import { useState } from "react";

const AddUserPage = ({ onUserAdded }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    skillsOffered: "",
    skillsNeeded: "",
    bio: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = {
      ...formData,
      skillsOffered: formData.skillsOffered.split(",").map((s) => s.trim()),
      skillsNeeded: formData.skillsNeeded.split(",").map((s) => s.trim()),
    };

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage("User added successfully!");
        onUserAdded();
        setFormData({ name: "", email: "", skillsOffered: "", skillsNeeded: "", bio: "" });
      } else {
        setMessage("Error: " + result.message);
      }
    } catch (error) {
      setMessage("Failed to add user");
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-6 bg-gray-800 text-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Add a New User</h2>
      {message && <p className="text-center text-green-400">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input className="w-full p-2 border rounded bg-gray-700 text-white" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input className="w-full p-2 border rounded bg-gray-700 text-white" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input className="w-full p-2 border rounded bg-gray-700 text-white" name="skillsOffered" placeholder="Skills Offered (comma-separated)" value={formData.skillsOffered} onChange={handleChange} required />
        <input className="w-full p-2 border rounded bg-gray-700 text-white" name="skillsNeeded" placeholder="Skills Needed (comma-separated)" value={formData.skillsNeeded} onChange={handleChange} required />
        <textarea className="w-full p-2 border rounded bg-gray-700 text-white" name="bio" placeholder="Bio" value={formData.bio} onChange={handleChange} required />
        <button className="w-full p-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded transition" type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserPage;
