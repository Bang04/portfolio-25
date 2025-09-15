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
      //return {ok:false, value : e.target.value };
    } else if (fieldName == "message" && e.target.value.length < 5) {
      setStatus({ ok: false, msg:  `${fieldName}은(는) 최소 5자 이상이어야 합니다.` });
      //return {ok:false, value : e.target.value };
    } else if (e.target.value.length > max) {
      setStatus({ ok: false, msg: `${fieldName}은(는) 최대 ${max}자까지 입력 가능합니다.` });
      //return {ok:false, value : e.target.value };
    } else {
      setStatus({ ok: true, msg: "" });
      //return {ok:true, value : e.target.value };
    }    
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, 
    fieldName : 'name' | 'subject'|'message',
    max : number
  ) =>{
    
    validateLength(e, fieldName, max );

    if(fieldName == "name")setName(e.target.value);
    if(fieldName == "subject")setSubject(e.target.value);
    if(fieldName == "message")setMessage(e.target.value);
  }

  const sendEmail = (e: any) => {
    e.preventDefault();

    if (name.length === 0 ) {
      setStatus({ ok: false, msg: "이름을 입력해주세요 " });
      return;
    }
     if (subject.length === 0 || subject.length > 30) {
      setStatus({ ok: false, msg: "제목은 30자 이하로 입력해주세요" });
      return;
    }
     if (email.length === 0 ) {
      setStatus({ ok: false, msg: "이메일은 필수입니다."});
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ ok: false, msg: "유효한 이메일 형식이 아닙니다."});
      setEmail("");
      return;
    } else {
      setStatus({ ok: true, msg: '' });
    }
  
    if (message.length === 0 || message.length > 200) {
      setStatus({ ok: false, msg: "메세지 200자 이하로 입력해주세요 " });
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
                  setEmail("");
                  setSubject("");
                  setMessage("");
                  setName("");
                  
                  setStatus({ ok: true, msg: "" });
                  alert("메일 전송이 성공했습니다 :) 감사합니다.");
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
              value={message}
              onChange={(e) => handleInputChange(e, "message",200)}
            />
          </label>

          {/* 상태 메시지 */}
          { status && status.ok === false && (
              <div
                role="status"
                className={`p-3 rounded-md text-sm font-semibold bg-red-50 border border-red-300 text-red-800`}
              >
                 <svg className="shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                </svg>
                {status.msg}
              </div>
          )}

          <div className="flex items-center justify-center gap-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center me-2 mb-2"
             
            >
              {loading ? (
                <>
                 <svg aria-hidden="true" role="status" className="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                  </svg>
                  <p>Sending...</p>
                </>
              ) : (
                <>
                  <svg className="w-3 h-3 text-white me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
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