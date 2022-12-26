const Create = () => {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [rating, setRating] = useState("");
  const [formError, setFormError] = useState(null);

  return (
    <div className="page create">
      <h2>Create</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title"> Title: </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="method"> Method: </label>
        <input
          id="method"
          type="text"
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        />
        <label htmlFor="title"> Rating: </label>
        <input
          id="rating"
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <button>Create Smoothie Recipe</button>
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  );
};

export default Create;
