import "./styles/subscribe.css";

export const Subscribe = () => {
  return (
    <article className="subscribe">
      <section>
        <p className="tag">Email Newsletter</p>
        <h2>
          Subscribe <br /> for updates
        </h2>
      </section>

      <section className="subscribe-inputs">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <button>Submit</button>
      </section>
    </article>
  );
};
