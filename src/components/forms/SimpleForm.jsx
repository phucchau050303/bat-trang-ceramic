const SimpleForm = () => {
  return (
    <div className="container">
      <form className="mx-auto" style={{ maxWidth: 720 }}>
        <div className="form-group mb-3 text-start">
          <label htmlFor="name">Name:</label>
          <input type="text" className="form-control" id="name" name="name" required />
        </div>

        <div className="form-group mb-3 text-start">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" required />
        </div>

        <div className="form-group mb-3 text-start">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" className="form-control" id="phone" name="phone" required />
        </div>

        <div className="form-group mb-3 text-start">
          <label htmlFor="message">Message:</label>
          <textarea className="form-control" id="message" name="message" rows="4" required></textarea>
        </div>

        <div className="text-center">
          <button type="submit" className="cta-btn mt-3">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default SimpleForm;