"use client";
import "./home.css";
import React  from 'react';
import Link  from 'next/link';


export default function Home() {
  return (
    <main>
      <div className="rounded-box">
        <img
          src="/PayWise-home-logo.png"
          alt="PayWiser Home Logo"
          className="box-image"
        />
        {/* <div className="title">PayWiser</div> */}
        <p>
          PayWiser is an app that allows debt management to be worry-free. Here,
          you can track multiple debts, receive personalized repayment
          strategies and plans, and stay on top of your financial goals. Join
          PayWiser to take control of your debt and achieve financial
          confidence!
        </p>
        <Link href="/Registration" className="get-start">Get Started!</Link>
        {/* Added button element */}
        <div className="TitleC"></div>
      </div>
    </main>
  );
}
