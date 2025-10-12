import { ArrowUpRightIcon } from "@phosphor-icons/react"; // Ikon panah untuk tombol submit
import { useEffect, useRef, useState } from "react";
import { useAlert } from "../hooks/Hooks";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

// Konstanta untuk Font Size Responsif (Desktop 4px lebih besar dari Mobile)
// Contoh: Mobile text-base (16px), Desktop text-xl (20px)
const TEXT_LG_RESPONSIVE = "text-base lg:text-xl";
// Contoh: Mobile text-sm (14px), Desktop text-lg (18px)
const TEXT_MD_RESPONSIVE = "text-sm lg:text-lg";

// List kategori untuk select project type
const categories = [
  { name: "Branded Content", id: "Branded Content" },
  { name: "Brand Films", id: "Brand Films" },
  { name: "Photography", id: "Photography" },
  { name: "Recap Films", id: "Recap Films" },
  { name: "Short Documentary", id: "Short Documentary" },
];

// Komponen Input Field Reusable
const ContactInput = ({
  label,
  placeholder,
  type = "text",
  required = true,
  name,
  className = "",
}) => (
  <div className={`flex flex-col gap-2 ${className}`}>
    <label
      htmlFor={name}
      className="text-white text-base font-semibold mb-1 cursor-pointer"
    >
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    {type === "select" ? (
      <CustomSelect
        name={name}
        required={required}
        placeholder={placeholder}
        options={categories}
      />
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-4 bg-black border border-transparent rounded-lg text-white placeholder-gray-500 focus:border-[#4B4B4B] focus:outline-none transition-colors z-10"
        style={{ position: "relative" }}
      />
    )}
  </div>
);

// Custom Select Dropdown (fully styled, works on iPhone)
function CustomSelect({ name, required, placeholder, options }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <input
        type="hidden"
        name={name}
        value={selected}
        required={required}
      />
      <button
        type="button"
        className={`w-full px-4 py-4 bg-black border border-transparent rounded-lg text-left text-white placeholder-gray-500 focus:border-[#4B4B4B] focus:outline-none transition-colors ${open ? "bg-[#2F2F2F]" : ""}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {selected || <span className="text-[#7E7E7E]">{placeholder}</span>}
        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white">▼</span>
      </button>
      {open && (
        <ul
          className="absolute z-20 mt-2 w-full bg-black border border-[#4B4B4B] rounded-lg shadow-lg max-h-60 overflow-auto"
          role="listbox"
        >
          {options.map((cat) => (
            <li
              key={cat.id}
              role="option"
              aria-selected={selected === cat.name}
              className={`px-4 py-3 cursor-pointer rounded-lg transition-colors ${selected === cat.name ? "bg-[#2F2F2F] text-white shadow-inner" : "text-[#7E7E7E] hover:text-white hover:bg-[#2F2F2F]"}`}
              onClick={() => {
                setSelected(cat.name);
                setOpen(false);
              }}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Komponen Textarea Reusable
const ContactTextarea = ({ label, placeholder, required = true, name }) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={name} className="text-white text-base font-semibold mb-1">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      rows={6}
      className="w-full px-4 py-4 bg-black border border-transparent rounded-lg text-white placeholder-gray-500 focus:border-[#4B4B4B] focus:outline-none transition-colors resize-none"
    />
  </div>
);

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { dispatchAlert } = useAlert();

  const sendEmail = (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          dispatchAlert({ type: "SHOW", payload: "Message sent successfully!", variant: "Success" });
          window.scrollTo({ top: 0, behavior: "smooth" });
          if (form.current) form.current.reset();
        },
        (error) => {
          dispatchAlert({ type: "SHOW", payload: "Failed to send message. Please try again.", variant: "Danger" });
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  // Helper to format date as dd/MM/yyyy
  const getCurrentDate = () => {
    const d = new Date();
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-[#121212] min-h-screen text-white pt-10 pb-20"
    >
      <div className="container mx-auto px-6 sm:px-10 lg:px-20">
        {/* --- JUDUL SECTION --- */}
        <div className="text-3xl md:text-5xl font-semibold mb-12 lg:mb-16">
          Get in <span className="text-[#828282]">Touch</span>
        </div>

        <form ref={form} className="mx-auto space-y-8" onSubmit={sendEmail}>
          {/* Hidden field for submittedAt */}
          <input type="hidden" name="submittedAt" value={getCurrentDate()} />
          {/* --- BARIS 1: Nama Depan & Nama Belakang (Grid di Desktop, Stack di Mobile) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactInput
              label="First Name"
              name="firstName"
              placeholder="Enter your first name"
              className={TEXT_MD_RESPONSIVE}
            />
            <ContactInput
              label="Last Name"
              name="lastName"
              placeholder="Enter your last name"
              className={TEXT_MD_RESPONSIVE}
            />
          </div>

          {/* --- BARIS 2: Email & Project Type (Grid di Desktop, Stack di Mobile) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <ContactInput
              label="Email Address"
              name="emailAddress"
              placeholder="Enter your email here"
              type="email"
              className={TEXT_MD_RESPONSIVE}
            />
            <ContactInput
              label="Project Type"
              name="projectType"
              placeholder="Select your project type"
              type="select"
              className={TEXT_MD_RESPONSIVE}
            />
          </div>

          {/* --- BARIS 3: Messages (Full Width) --- */}
          <div>
            <ContactTextarea
              label="Messages"
              name="messages"
              placeholder="Enter your messages"
            />
          </div>

          {/* --- BARIS 4: SUBMIT BUTTON --- */}
          <div className="pt-4 flex justify-end">
            <button
              type="submit"
              className="flex items-center px-8 py-4 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
              <ArrowUpRightIcon size={20} weight="bold" className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
}
