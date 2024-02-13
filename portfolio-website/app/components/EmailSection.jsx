import React from "react";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    return (
        <section className="grid md:grid-cols-12 my-12 md:my-16 py-24 gap-4 relative" id="contact">
            <div className="absolute w-80 h-80 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900 to-transparent rounded-full blur-lg top-[10%] left-1/2 transform -translate-x-3/4 translate-y-3/2"></div>
            <div className="col-span-12 z-10 flex flex-col items-center justify-center">
                <h2 className="text-center text-4xl font-bold text-white my-2">
                    <span className='text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-blue-700'>Let&#39;s Connect</span>
                </h2>
                <p className="text-center text-[#ADB7BE] mb-4 max-w-md">
                    I&#39;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&#39;ll try my best
                    to get back to you!
                </p>
                <div className="socials flex flex-row gap-2 items-center justify-center">
                    <a href="https://github.com/BehnamMozafari" target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/github-icon.svg" alt="GitHub" width={40} height={40} />
                    </a>
                    <a href="https://www.linkedin.com/in/behnam-mozafari-165506267/" target="_blank"
                        rel="noopener noreferrer">
                        <Image src="/linkedin-icon.svg" alt="LinkedIn" width={40} height={40} />
                    </a>
                    <a href="mailto:behnammozafari007@gmail.com" className="text-center text-[#ADB7BE] max-w-md underline" target="_blank"
                        rel="noopener noreferrer">
                        behnammozafari007@gmail.com
                    </a>
                </div>
            </div>
        </section>
    );
};

export default EmailSection;