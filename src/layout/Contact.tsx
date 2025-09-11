import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  // 이메일 정규식 검사 함수 
  function validateEmail(email: string) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  }

  const validateLength = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
    fieldName : 'name' | 'subject'|'message', 
    max : number 
  ) => {
    if (e.target.value.length === 0) {
      setStatus({ ok: false, msg: `${fieldName}은(는) 필수 입력입니다.` });
      return {ok:false, value : e.target.value };
    } else if (e.target.value.length < 10) {
      setStatus({ ok: false, msg:  `${fieldName}은(는) 최소 5자 이상이어야 합니다.` });
      return {ok:false, value : e.target.value };
    } else if (e.target.value.length > 200) {
      setStatus({ ok: false, msg: `${fieldName}은(는) 최대 ${max}자까지 입력 가능합니다.` });
      return {ok:false, value : e.target.value };
    } else {
      setStatus({ ok: true, msg: "" });
      return {ok:true, value : e.target.value };
    }    
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
    fieldName : 'name' | 'subject'|'message',
    max : number
  ) =>{
    const result =  validateLength(e, fieldName, max );

    if(result.ok){
      if(fieldName == "name")setName(result.value);
      if(fieldName == "subject")setSubject(result.value);
      if(fieldName == "message")setMessage(result.value);
     }
  }

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (name.length === 0 || name.length < 10 || name.length > 200) {
      setStatus({ ok: false, msg: "이름은 5자 이상 입력해주세요 " });
      return;
    }
     if (subject.length === 0 || subject.length < 10 || subject.length > 200) {
      setStatus({ ok: false, msg: "제목은 5자 이상 입력해주세요 " });
      return;
    }
     if (email.length === 0 ) {
      setStatus({ ok: false, msg: "이메일은 필수입니다. " });
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ ok: false, msg: '유효한 이메일 형식이 아닙니다.' });
      setEmail("");
      return;
    } else {
      setStatus({ ok: true, msg: '' });
    }
  
    if (message.length === 0 || message.length < 10 || message.length > 200) {
      setStatus({ ok: false, msg: "메세지 10자 이상 입력해주세요 " });
      return;
    }
     setLoading(true);
    if (form.current) {
        emailjs
          .sendForm(
              import.meta.env.VITE_EMAILJS_SERVICE_ID, 
              import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
              form.current, {
              publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
          })
          .then(
              (res) => {
                  setStatus({ ok: true, msg: "메일이 성공적으로 전송되었습니다." });
                  console.log('SUCCESS!', res.status, res.text);
              },
              (err: any) => {
                  setStatus({ ok: false, msg: "메일 전송에 실패했습니다." });
                  console.log('FAILED...', err.text);
              },
          )
          .finally(() => setLoading(false));
    } else {
      console.log('Form reference is null.');
    }
  };

  return (
    <div className='bg-blue-100 py-16'>
       <div className="w-4/5 mx-auto p-3 text-lg text-left font-bold">✉️ Contact</div>
     
      <div className="flex flex-wrap max-w-4/5 m-auto gap-y-15">
      <div className="w-full bg-gradient-to-br from-white/60 to-slate-50/60 backdrop-blur-md border border-slate-200/60 rounded-2xl shadow-lg p-6 md:p-10">
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
                className="mt-2 p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white"
                aria-required
                value={name}
                onChange={(e) => handleInputChange(e, "name", 20)}
              />
            </label>

            <label className="flex flex-col">
              <span className="text-sm font-medium text-slate-700">Email</span>
              <input
                name="email"
                placeholder="email@example.com"
                className="mt-2 p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white"
                aria-required
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">Subject</span>
            <input
              name="subject"
              placeholder="프로젝트 문의 / 협업 제안"
              className="mt-2 p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition bg-white"
              value={subject}
               onChange={(e) => handleInputChange(e, "subject",50)}

            />
          </label>

          <label className="flex flex-col">
            <span className="text-sm font-medium text-slate-700">Message</span>
            <textarea
              name="message"
              placeholder="안녕하세요.(최대 200자)"
              rows={6}
              className="mt-2 p-3 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none bg-white"
              aria-required
              onChange={(e) => handleInputChange(e, "message",200)}
            />
          </label>

          {/* 상태 메시지 */}
          {status && (
            <div
              role="status"
              className={`p-3 rounded-md text-sm font-semibold ${status.ok ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}
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
                    <path d="M2 12l20-8-8 20-4-9-8-3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
   
  );
};