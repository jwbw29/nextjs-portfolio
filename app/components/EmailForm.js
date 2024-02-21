const EmailForm = () => {
  return (
    <div className="size-full ring-1 ring-white rounded-lg p-4">
      <form>
        <div className="border border-dashed border-white">
          <label>First Name (required)</label>
        </div>

        <div className="border border-dashed border-white">
          <input type="text" />
        </div>

        <div className="border border-dashed border-white">
          <label>Last Name (required)</label>
        </div>

        <div className="border border-dashed border-white">
          <input type="text" />
        </div>

        <div className="border border-dashed border-white">
          <label>Email (required)</label>
        </div>

        <div className="border border-dashed border-white">
          <input type="email" />
        </div>

        <div className="border border-dashed border-white">
          <label>Company</label>
        </div>

        <div className="border border-dashed border-white">
          <input type="text" />
        </div>

        <div className="border border-dashed border-white">
          <label>Message (required)</label>
        </div>

        <div className="border border-dashed border-white">
          <input type="text" />
        </div>

        <div className="border border-dashed border-white">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
