"use client";

import { useCallback, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [modalShow, setModalShow] = useState(true);

  const closeModal = useCallback(() => {
    setModalShow(false);
    // console.log("asdf")
  }, [setModalShow]);

  return (
    <>
      {/* {modalShow && (
        <div className="fixed top-0 left-0 w-svw h-svh bg-black/80 z-50 flex items-center justify-center z-50">
          <div className="flex flex-col w-[500px] h-[300px] bg-white rounded-xl p-12">
            <div>Hi, This is Samson Adler.</div>
            <div>🤝 I would like to work with you in the future.</div>
            <div> 👇 These are my contact address.</div>
            <div>
              <strong className="w-30 mr-2">Telegram:</strong>
              <a
                href="https://t.me/goldenndevv"
                className="underline text-sky-700"
              >
                https://t.me/heraclesdevv
              </a>
            </div>
            <div>
              <strong className="w-30 mr-9">GMail:</strong>
              <a
                href="https://mail.google.com"
                className="underline text-sky-700"
              >
                samson.adler.dev@gmail.com
              </a>
            </div>
            <div>I look forward to your response! 😊😊😊</div>
            <span className="btn w-24 text-center mt-4" onClick={closeModal}>
              Close
            </span>
          </div>
        </div>
      )} */}
      {children}
    </>
  );
}
