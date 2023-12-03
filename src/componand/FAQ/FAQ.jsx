import React, { useState } from "react";
import "./faq.css";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

function FAQ() {
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);
  const [click5, setClick5] = useState(false);
  const handleClick1 = () => {
    setClick1(!click1);
  };
  const handleClick2 = () => {
    setClick2(!click2);
  };
  const handleClick3 = () => {
    setClick3(!click3);
  };
  const handleClick4 = () => {
    setClick4(!click4);
  };
  const handleClick5 = () => {
    setClick5(!click5);
  };
  return (
    <div id="FAQ">
      <div className="faq-con">
        <div className="faq-l">
          <span>🙋‍♀️ FAQ</span>
          <h2>Need</h2>
          <h2 className="faq-l-h">Answers?</h2>
          <p>
            Check out our most commonly asked questions below to find the
            information you need.
          </p>
        </div>
        <div className="faq-r">
          <div className="faq-r-con">
            <div className="faq-con-h" onClick={handleClick1}>
              <h2>What is Manage Wise and what does it offer?</h2>
              <div className="faq-con-h-r">
                {click1 === true ? <RxCross2 /> : <MdMenu />}
              </div>
            </div>
            <div className={click1 === true ? "faq-con-p" : "faq-con-p hidden"}>
              <p>
                Manage Wise is a comprehensive management platform designed to
                streamline your business operations, enhance productivity, and
                drive success. It offers a range of features including task
                management, scheduling, communication tools, analytics, and
                more.
              </p>
            </div>
          </div>
          <div className="faq-r-con">
            <div className="faq-con-h" onClick={handleClick2}>
              <h2>
                Is Manage Wise suitable for small businesses and larger
                enterprises alike?
              </h2>
              <div className="faq-con-h-r">
                {click2 === true ? <RxCross2 /> : <MdMenu />}
              </div>
            </div>
            <div className={click2 === true ? "faq-con-p" : "faq-con-p hidden"}>
              <p>
                Yes, Manage Wise is designed to cater to the needs of both small
                businesses and larger enterprises. Its scalable features and
                customizable options make it versatile for various business
                sizes.
              </p>
            </div>
          </div>
          <div className="faq-r-con">
            <div className="faq-con-h" onClick={handleClick3}>
              <h2>
                Can I access Manage Wise from different devices and platforms?
              </h2>
              <div className="faq-con-h-r">
                {click3 === true ? <RxCross2 /> : <MdMenu />}
              </div>
            </div>
            <div className={click3 === true ? "faq-con-p" : "faq-con-p hidden"}>
              <p>
                Yes, Manage Wise offers cross-platform compatibility, allowing
                you to access and use the platform seamlessly on desktops, web
                browsers, and mobile devices.
              </p>
            </div>
          </div>
          <div className="faq-r-con">
            <div className="faq-con-h" onClick={handleClick4}>
              <h2>What kind of support options do you offer to users?</h2>
              <div className="faq-con-h-r">
                {click4 === true ? <RxCross2 /> : <MdMenu />}
              </div>
            </div>
            <div className={click4 === true ? "faq-con-p" : "faq-con-p hidden"}>
              <p>
                We provide responsive customer support via chat and email to
                assist you with any inquiries, issues, or guidance you may need
                while using Manage Wise.
              </p>
            </div>
          </div>
          <div className="faq-r-con">
            <div className="faq-con-h" onClick={handleClick5}>
              <h2>How secure is the data stored within Manage Wise?</h2>
              <div className="faq-con-h-r">
                {click5 === true ? <RxCross2 /> : <MdMenu />}
              </div>
            </div>
            <div className={click5 === true ? "faq-con-p" : "faq-con-p hidden"}>
              <p>
                Your data's security is a top priority. Manage Wise employs
                robust data encryption and follows industry best practices to
                ensure your sensitive information is safe and protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
