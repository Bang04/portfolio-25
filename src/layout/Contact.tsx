import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
   const [loading, setLoading] = useState(false);
     const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const sendEmail = (e: any) => {

 
    e.preventDefault();

        if (form.current) {
            // const SERVICE_ID = "service_0d3fvty";
            // const TEMPLATE_ID = "template_463lz6m";
            // const PUBLIC_KEY = "LJBPtqb6MhZL_b4mr";

             emailjs
                .sendForm(
                    import.meta.env.VITE_EMAILJS_SERVICE_ID, 
                    import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
                    form.current, {
                    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
                })
                //  .sendForm(
                //     SERVICE_ID, 
                //     TEMPLATE_ID, 
                //     form.current, {
                //     publicKey: PUBLIC_KEY,
                // })
                .then(
                    (res) => {
                        console.log('SUCCESS!', res.status, res.text);
                    },
                    (err: any) => {
                        console.log('FAILED...', err.text);
                    },
                );
        } else {
            console.log('Form reference is null.');
        }
    };

    return (
         <div className="max-w-3xl mx-auto p-6">
            <div className="bg-gradient-to-br from-white/60 to-slate-50/60 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-lg p-6 md:p-10">
            <h2 id="contact-heading" className="text-2xl md:text-3xl font-semibold mb-2">
            Contact Me
            </h2>
            <p className="text-sm text-slate-600 mb-6">프로젝트 문의, 콜라보, 또는 간단한 인사도 환영합니다. </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label className="flex flex-col">
              <span className="text-sm font-medium text-slate-700">Name</span>
              <input
                name="name"
                placeholder="홍길동"
                className="mt-2 p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                aria-required
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                name="email"
                placeholder="name@example.com"
                className="mt-2 p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                aria-required
                type="email"
              />
            </label>
          </div>

            <label className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">Subject</span>
            <input
              name="subject"
              placeholder="프로젝트 문의 / 협업 제안"
              className="mt-2 p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">Message</span>
            <textarea
              name="message"
              placeholder="안녕하세요.(최소 10자)"
              rows={6}
              className="mt-2 p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
              aria-required
            />
          </label>

          {/* 상태 메시지 */}
          {status && (
            <div
              role="status"
              className={`p-3 rounded-md text-sm ${status.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
            >
              {status.msg}
            </div>
          )}

          <div className="flex items-center justify-between gap-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-medium shadow-md hover:scale-[1.01] active:scale-95 transition"
            >
             {loading ? (
                <>
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                    <path d="M4 12a8 8 0 018-8" stroke="currentColor" strokeWidth="4" className="opacity-75" />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" aria-hidden>
                    <path d="M2 12l20-8-8 20-4-9-8-3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Send Message
                </>
              )} 
            </button>
          </div>
        </form>
        </div>
        </div>
    );
};