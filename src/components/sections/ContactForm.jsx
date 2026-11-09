import { useEffect, useRef, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Icon from "../ui/Icon";
import Button from "../ui/Button";
import { CONTACT_ENDPOINT, SERVICES, SITE } from "../../data/site";

const EMPTY = { name: "", email: "", company: "", service: "", message: "", _honey: "" };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(v) {
  const e = {};
  if (!v.name.trim()) e.name = "Please tell us your name.";
  if (!v.email.trim()) e.email = "We need an email address to reply to you.";
  else if (!EMAIL_RE.test(v.email.trim())) e.email = "That email address doesn’t look quite right.";
  if (!v.service) e.service = "Choose the service that fits best — “Not sure yet” is fine.";
  if (v.message.trim().length < 20) e.message = "A few more details help us respond properly (20+ characters).";
  return e;
}

function Field({ id, label, optional, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {optional ? (
          <span className="ml-1.5 font-normal text-ink-400">(optional)</span>
        ) : (
          <span className="ml-0.5 text-green-700" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 flex items-start gap-1.5 text-[0.875rem] text-danger-600">
          <Icon name="alert" size={16} className="mt-0.5 shrink-0" />
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="mt-2 text-[0.85rem] text-ink-400">
          {hint}
        </p>
      ) : null}
    </div>
  );
}

export default function ContactForm() {
  const [params] = useSearchParams();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState("");
  const formRef = useRef(null);
  const statusRef = useRef(null);

  // Pre-select a service when arriving from a service CTA (?service=iot)
  useEffect(() => {
    const s = params.get("service");
    if (s && SERVICES.some((x) => x.id === s)) setValues((v) => ({ ...v, service: s }));
  }, [params]);

  const onChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    if (touched[name]) setErrors(validate(next));
  };

  const onBlur = (e) => {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
    setErrors(validate(values));
  };

  const mailtoFallback = () => {
    const svc = SERVICES.find((s) => s.id === values.service)?.title || "General enquiry";
    const body = `Name: ${values.name}\nEmail: ${values.email}\nCompany: ${values.company || "-"}\nService: ${svc}\n\n${values.message}`;
    return `mailto:${SITE.email}?subject=${encodeURIComponent(`Project enquiry — ${svc}`)}&body=${encodeURIComponent(body)}`;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    setTouched({ name: true, email: true, service: true, message: true });
    if (Object.keys(errs).length) {
      const first = formRef.current?.querySelector(`[name="${Object.keys(errs)[0]}"]`);
      first?.focus();
      return;
    }
    if (values._honey) return; // bot

    setStatus("submitting");
    setServerMessage("");
    const serviceTitle = SERVICES.find((s) => s.id === values.service)?.title || "Not sure yet";

    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          company: values.company.trim() || "—",
          service: serviceTitle,
          message: values.message.trim(),
          _subject: `New project enquiry — ${serviceTitle}`,
          _replyto: values.email.trim(),
          _template: "table",
          _captcha: "false",
        }),
      });
      const data = await res.json().catch(() => ({}));
      const ok = res.ok && (data.success === undefined || String(data.success) === "true");
      if (!ok) throw new Error(data.message || `Request failed (${res.status})`);
      setStatus("success");
      setValues(EMPTY);
      setTouched({});
    } catch (err) {
      setServerMessage(err?.message || "");
      setStatus("error");
    } finally {
      requestAnimationFrame(() => statusRef.current?.focus());
    }
  };

  const describedBy = (name, hint) =>
    errors[name] && touched[name] ? `${name}-error` : hint ? `${name}-hint` : undefined;
  const invalid = (name) => Boolean(errors[name] && touched[name]);

  if (status === "success") {
    return (
      <div
        ref={statusRef}
        tabIndex={-1}
        role="status"
        className="card enter flex flex-col items-start p-8 outline-none sm:p-10"
      >
        <span className="grid h-12 w-12 place-items-center rounded-full bg-green-500 text-white">
          <Icon name="check" size={22} strokeWidth={2} />
        </span>
        <h2 className="t-h3 mt-6">Thanks — your message is on its way.</h2>
        <p className="mt-3 max-w-md text-ink-500">
          We’ve received your project details and will reply to the email address you provided. If it’s
          urgent, call us on{" "}
          <a href={SITE.phoneHref} className="link-u text-ink-900">
            {SITE.phone}
          </a>
          .
        </p>
        <Button onClick={() => setStatus("idle")} variant="secondary" className="mt-8">
          Send another message
        </Button>
      </div>
    );
  }

  const submitting = status === "submitting";

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="card p-6 sm:p-8 lg:p-10" aria-describedby="form-privacy">
      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="name" label="Full name" error={touched.name && errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            className="field"
            placeholder="Your name"
            value={values.name}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={invalid("name")}
            aria-describedby={describedBy("name")}
            required
          />
        </Field>

        <Field id="email" label="Work email" error={touched.email && errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            inputMode="email"
            autoComplete="email"
            className="field"
            placeholder="you@company.com"
            value={values.email}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={invalid("email")}
            aria-describedby={describedBy("email")}
            required
          />
        </Field>

        <Field id="company" label="Company" optional>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            className="field"
            placeholder="Company or project name"
            value={values.company}
            onChange={onChange}
          />
        </Field>

        <Field id="service" label="Service you’re interested in" error={touched.service && errors.service}>
          <select
            id="service"
            name="service"
            className="field"
            value={values.service}
            onChange={onChange}
            onBlur={onBlur}
            aria-invalid={invalid("service")}
            aria-describedby={describedBy("service")}
            required
          >
            <option value="" disabled>
              Select a service
            </option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title}
              </option>
            ))}
            <option value="unsure">Not sure yet</option>
          </select>
        </Field>

        <div className="sm:col-span-2">
          <Field
            id="message"
            label="Project details"
            error={touched.message && errors.message}
            hint="What are you building, who is it for, and where are you today?"
          >
            <textarea
              id="message"
              name="message"
              rows={6}
              className="field"
              placeholder="Tell us about your idea, goals and timeline…"
              value={values.message}
              onChange={onChange}
              onBlur={onBlur}
              aria-invalid={invalid("message")}
              aria-describedby={describedBy("message", true)}
              required
            />
          </Field>
        </div>

        {/* Honeypot — hidden from people, tempting for bots */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="_honey">Leave this field empty</label>
          <input id="_honey" name="_honey" type="text" tabIndex={-1} autoComplete="off" value={values._honey} onChange={onChange} />
        </div>
      </div>

      {status === "error" && (
        <div
          ref={statusRef}
          tabIndex={-1}
          role="alert"
          className="enter mt-6 flex gap-3 rounded-[var(--radius-md)] border border-danger-600/25 bg-danger-50 p-4 text-[0.925rem] text-ink-800 outline-none"
        >
          <Icon name="alert" size={20} className="mt-0.5 shrink-0 text-danger-600" />
          <div>
            <p className="font-medium text-danger-600">We couldn’t send your message.</p>
            <p className="mt-1">
              {serverMessage ? `${serverMessage} ` : ""}Please try again, or{" "}
              <a href={mailtoFallback()} className="font-medium text-ink-900 underline underline-offset-2">
                send it by email instead
              </a>{" "}
              — your details will be pre-filled.
            </p>
          </div>
        </div>
      )}

      <div className="mt-8 flex flex-col gap-5 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p id="form-privacy" className="max-w-sm text-[0.85rem] leading-relaxed text-ink-500">
          We only use these details to reply to your enquiry. See our{" "}
          <Link to="/privacy" className="link-u text-ink-800">
            privacy policy
          </Link>
          .
        </p>
        <button type="submit" className="btn btn-primary w-full sm:w-auto" disabled={submitting} aria-busy={submitting}>
          {submitting ? (
            <>
              <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.25" strokeWidth="2.5" />
                <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
              Sending…
            </>
          ) : (
            <>
              <span>Send message</span>
              <span className="btn-arrow" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
                </svg>
                <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 8h11M9 3.5 13.5 8 9 12.5" />
                </svg>
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
