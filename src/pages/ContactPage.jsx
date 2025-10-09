import { ArrowUpRightIcon } from "@phosphor-icons/react"; // Ikon panah untuk tombol submit

// Konstanta untuk Font Size Responsif (Desktop 4px lebih besar dari Mobile)
// Contoh: Mobile text-base (16px), Desktop text-xl (20px)
const TEXT_LG_RESPONSIVE = "text-base lg:text-xl";
// Contoh: Mobile text-sm (14px), Desktop text-lg (18px)
const TEXT_MD_RESPONSIVE = "text-sm lg:text-lg";

// Komponen Input Field Reusable
const ContactInput = ({
  label,
  placeholder,
  type = "text",
  required = true,
  name,
  className = "",
}) => (
  <div className={`space-y-2 ${className}`}>
    <label htmlFor={name} className="text-white text-base font-semibold">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    {type === "select" ? (
      <select
        id={name}
        name={name}
        required={required}
        className="w-full px-4 py-4 bg-black border border-transparent rounded-lg text-white placeholder-gray-500 focus:border-[#4B4B4B] focus:outline-none transition-colors"
      >
        <option value="">{placeholder}</option>
        <option value="Branded Content">Branded Content</option>
        <option value="Brand Films">Brand Films</option>
        <option value="Other">Other</option>
      </select>
    ) : (
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        className="w-full px-4 py-4 bg-black border border-transparent rounded-lg text-white placeholder-gray-500 focus:border-[#4B4B4B] focus:outline-none transition-colors"
      />
    )}
  </div>
);

// Komponen Textarea Reusable
const ContactTextarea = ({ label, placeholder, required = true, name }) => (
  <div className="space-y-2">
    <label htmlFor={name} className="text-white text-base font-semibold">
      {label}
      {required && <span className="text-red-500">*</span>}
    </label>
    <textarea
      id={name}
      name={name}
      placeholder={placeholder}
      required={required}
      rows={6} // Sesuaikan tinggi sesuai Figma
      className="w-full px-4 py-4 bg-black border border-transparent rounded-lg text-white placeholder-gray-500 focus:border-[#4B4B4B] focus:outline-none transition-colors resize-none"
    />
  </div>
);

export default function ContactPage() {
  return (
    <div className="bg-[#121212] min-h-screen text-white pt-10 pb-20">
      <div className="container mx-auto px-4 sm:px-10 lg:px-20">
        {/* --- JUDUL SECTION --- */}
        <div className="text-3xl md:text-5xl font-semibold mb-12 lg:mb-16">
          Get in <span className="text-[#828282]">Touch</span>
        </div>

        <form className="mx-auto space-y-8">
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
            >
              Submit
              <ArrowUpRightIcon size={20} weight="bold" className="ml-2" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
