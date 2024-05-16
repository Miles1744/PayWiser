// src/app/page.js
import "./home.css";

export default function Home() {
  return (
    <main>
      {/* Other movie elements */}
      <div className="rounded-box">
        <img
          src="./PayWise-home-logo.png"
          alt="PayWiser Home Logo"
          className="box-image"
          style={{ width: "50px" }}
        />
        <div className="title" style={{ marginTop: "50px", color: "#9962a4" }}>
          PayWiser
        </div>
        PayWiser is an app that allows debt management to be worry free. Here,
        you can track multiple debts, receive personalized repayment stratiegies
        and plans, and stay on to of your financial goals. Join PayWiser to take
        control of your debt and achieve financial confidence
        <div className="TitleC"></div>
      </div>
    </main>
  );
}
