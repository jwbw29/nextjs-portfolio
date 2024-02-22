import { PrimaryButton } from "./Button";

const EmailForm = () => {
  return (
    // * Use this link to build the functionality: https://www.youtube.com/watch?v=t2LvPXHLrek

    <div className="size-full ring-1 ring-white rounded-lg p-8">
      <form>
        <div className="flex flex-wrap mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label>First Name (required)</label>
            <input type="text" />
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label>Last Name (required)</label>
            <input type="text" />
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label>Email (required)</label>
            <input type="email" />
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label>Company</label>
            <input type="text" />
          </div>
        </div>

        <div className="flex flex-wrap mb-6">
          <div className="w-full px-3">
            <label>Message (required)</label>
            <textarea rows="5" />
          </div>
        </div>

        <div className="flex px-3 justify-end">
          <PrimaryButton type="submit">Send Message</PrimaryButton>
        </div>
      </form>
    </div>
  );
};

export default EmailForm;
